"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { consultationChat } from "../_data/consultation-chat";
import { BrandMark } from "./BrandMark";

const initialMessages: UIMessage[] = [
  {
    id: "consultation-welcome",
    role: "assistant",
    parts: [{ type: "text", text: consultationChat.welcome }],
  },
];

const chatTransport = new DefaultChatTransport({ api: "/api/chat" });

export function ConsultationChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error, stop, regenerate } = useChat({
    transport: chatTransport,
    messages: initialMessages,
  });

  const isResponding = status === "submitted" || status === "streaming";
  const canSend = status === "ready" && input.trim().length > 0;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 220);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, status]);

  const submit = (text: string) => {
    const value = text.trim();
    if (!value || status !== "ready") {
      return;
    }

    void sendMessage({ text: value });
    setInput("");
  };

  return (
    <aside className={`consultation-chat${isOpen ? " is-open" : ""}`}>
      <section
        id="consultation-chat-panel"
        className="consultation-chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="consultation-chat-title"
        aria-hidden={!isOpen}
      >
        <header className="consultation-chat-header">
          <div className="consultation-chat-identity">
            <BrandMark />
            <div>
              <span>AIによる事前相談</span>
              <strong id="consultation-chat-title">{consultationChat.title}</strong>
            </div>
          </div>
          <button
            type="button"
            className="consultation-chat-close"
            aria-label="AI相談を閉じる"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </header>

        <div className="consultation-chat-messages" aria-live="polite">
          {messages.map((message) => {
            const text = message.parts
              .filter((part) => part.type === "text")
              .map((part) => part.text)
              .join("");

            if (!text) {
              return null;
            }

            return (
              <div
                className={`consultation-message consultation-message-${message.role}`}
                key={message.id}
              >
                <span>{message.role === "user" ? "あなた" : "AI相談"}</span>
                <p>{text}</p>
              </div>
            );
          })}

          {messages.length === 1 && (
            <div className="consultation-quick-prompts" aria-label="相談例">
              {consultationChat.quickPrompts.map((prompt) => (
                <button
                  type="button"
                  key={prompt}
                  disabled={status !== "ready"}
                  onClick={() => submit(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {isResponding && (
            <div className="consultation-chat-thinking">
              <span />
              <span />
              <span />
              <small>回答を整理しています</small>
            </div>
          )}

          {error && (
            <div className="consultation-chat-error" role="alert">
              <p>
                現在AI相談を利用できません。時間をおいて再度お試しいただくか、
                本人へ直接ご相談ください。
              </p>
              <button type="button" onClick={() => void regenerate()}>
                もう一度試す
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="consultation-chat-compose">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submit(input);
            }}
          >
            <label htmlFor="consultation-chat-input">相談内容</label>
            <textarea
              id="consultation-chat-input"
              ref={inputRef}
              rows={2}
              maxLength={800}
              value={input}
              disabled={isResponding}
              placeholder="例：Year 12でCalculusの勉強法に悩んでいます"
              onChange={(event) => setInput(event.currentTarget.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  submit(input);
                }
              }}
            />
            {isResponding ? (
              <button type="button" className="consultation-send" onClick={() => stop()}>
                停止
              </button>
            ) : (
              <button
                type="submit"
                className="consultation-send"
                disabled={!canSend}
                aria-label="相談内容を送信する"
              >
                ↑
              </button>
            )}
          </form>
          <div className="consultation-chat-footer">
            <a href={consultationChat.contactHref}>{consultationChat.contactLabel}</a>
            <p>AIの回答は事前整理です。重要事項は本人にご確認ください。</p>
          </div>
        </div>
      </section>

      <button
        type="button"
        className="consultation-chat-trigger"
        aria-expanded={isOpen}
        aria-controls="consultation-chat-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="consultation-trigger-status" aria-hidden="true" />
        <span>
          <strong>{consultationChat.title}</strong>
          <small>{consultationChat.description}</small>
        </span>
        <i aria-hidden="true">{isOpen ? "×" : "↗"}</i>
      </button>
    </aside>
  );
}
