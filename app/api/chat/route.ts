import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  generateText,
  type UIMessage,
} from "ai";
import {
  buildConsultationInstructions,
  findApprovedConsultationAnswer,
} from "../../_data/consultation-chat-knowledge";

export const maxDuration = 30;

const MAX_MESSAGES = 14;
const MAX_BODY_SIZE = 24_000;
const MAX_CONVERSATION_CHARACTERS = 12_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_REQUESTS = 12;
const AI_RETRY_DELAY_MS = 10 * 60 * 1000;

const requestBuckets = new Map<string, { count: number; resetAt: number }>();
let retryAIAt = 0;

function createTextResponse(text: string) {
  const textPartId = crypto.randomUUID();
  const stream = createUIMessageStream({
    execute({ writer }) {
      writer.write({ type: "text-start", id: textPartId });
      writer.write({ type: "text-delta", id: textPartId, delta: text });
      writer.write({ type: "text-end", id: textPartId });
    },
  });

  return createUIMessageStreamResponse({ stream });
}

function isTextOnlyMessage(message: unknown): message is UIMessage {
  if (!message || typeof message !== "object") {
    return false;
  }

  const candidate = message as Partial<UIMessage>;
  return (
    Array.isArray(candidate.parts) &&
    (candidate.role === "user" || candidate.role === "assistant") &&
    candidate.parts.length > 0 &&
    candidate.parts.every(
      (part) =>
        part.type === "text" &&
        typeof part.text === "string" &&
        part.text.length <= 1_600,
    )
  );
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientId =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";
  const now = Date.now();
  const current = requestBuckets.get(clientId);

  if (!current || current.resetAt <= now) {
    requestBuckets.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_REQUESTS;
}

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_SIZE) {
    return Response.json({ error: "Request too large" }, { status: 413 });
  }

  if (isRateLimited(request)) {
    return Response.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let body: { messages?: UIMessage[] };
  try {
    body = (await request.json()) as { messages?: UIMessage[] };
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const messages = body.messages;
  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES ||
    !messages.every(isTextOnlyMessage) ||
    messages.at(-1)?.role !== "user"
  ) {
    return Response.json({ error: "Invalid conversation" }, { status: 400 });
  }

  const conversationCharacters = messages.reduce(
    (total, message) =>
      total +
      message.parts.reduce(
        (messageTotal, part) =>
          messageTotal + (part.type === "text" ? part.text.length : 0),
        0,
      ),
    0,
  );

  if (conversationCharacters > MAX_CONVERSATION_CHARACTERS) {
    return Response.json({ error: "Conversation too large" }, { status: 413 });
  }

  const latestText = messages
    .at(-1)!
    .parts.filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n");
  const approvedFallback = findApprovedConsultationAnswer(latestText);

  if (Date.now() < retryAIAt) {
    return createTextResponse(approvedFallback);
  }

  try {
    const result = await generateText({
      model: "openai/gpt-5.6-luna",
      instructions: buildConsultationInstructions(),
      messages: await convertToModelMessages(messages),
      maxOutputTokens: 450,
    });

    return createTextResponse(result.text);
  } catch {
    retryAIAt = Date.now() + AI_RETRY_DELAY_MS;
    return createTextResponse(approvedFallback);
  }
}
