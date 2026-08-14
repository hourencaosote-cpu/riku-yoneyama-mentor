"use client";

import { useEffect, useRef, useState } from "react";
import {
  consultationChat,
  consultationConcerns,
  consultationSteps,
  type ConsultationAnswers,
  type ConsultationStepId,
  type ConsultationTopic,
} from "../_data/consultation-chat";
import { approvedConsultationAnswerGuide } from "../_data/consultation-chat-knowledge";
import { BrandMark } from "./BrandMark";

const flow: ConsultationStepId[] = [
  "audience",
  "schoolStage",
  "topic",
  "concern",
  "timing",
];

function getTopicLabel(topic?: ConsultationTopic) {
  return consultationSteps.topic.options.find((option) => option.id === topic)
    ?.label;
}

function getStepPrompt(step: ConsultationStepId) {
  if (step === "concern") {
    return "今の状況に一番近いものを選んでください。";
  }

  return consultationSteps[step].prompt;
}

function getAnswerLabel(step: ConsultationStepId, answers: ConsultationAnswers) {
  if (step === "topic") {
    return getTopicLabel(answers.topic) ?? "";
  }

  return answers[step] ?? "";
}

function buildConsultationEmail(answers: ConsultationAnswers) {
  const subject = "無料相談について（事前相談まとめ）";
  const body = [
    "米山様",
    "",
    "無料相談を希望します。事前相談で整理した内容は以下の通りです。",
    "",
    "【事前相談まとめ】",
    `相談者：${answers.audience ?? "未回答"}`,
    `学年・状況：${answers.schoolStage ?? "未回答"}`,
    `相談テーマ：${getTopicLabel(answers.topic) ?? "未回答"}`,
    `現在の悩み：${answers.concern ?? "未回答"}`,
    `希望時期：${answers.timing ?? "未回答"}`,
    "",
    "お名前：",
    "在住国：",
    "その他に伝えたいこと：",
  ].join("\n");

  return `mailto:${consultationChat.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ConsultationChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<ConsultationAnswers>({});
  const closeRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isComplete = currentStep >= flow.length;
  const activeStep = flow[currentStep];
  const topic = answers.topic;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 220);
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
  }, [currentStep, isOpen]);

  const selectOption = (step: ConsultationStepId, value: string) => {
    setAnswers((current) => ({ ...current, [step]: value }));
    setCurrentStep((current) => current + 1);
  };

  const selectTopic = (value: ConsultationTopic) => {
    setAnswers((current) => ({ ...current, topic: value }));
    setCurrentStep((current) => current + 1);
  };

  const restart = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  const guidance = topic
    ? approvedConsultationAnswerGuide[topic]
    : null;

  const renderOptions = () => {
    if (activeStep === "topic") {
      return consultationSteps.topic.options.map((option) => (
        <button
          type="button"
          key={option.id}
          onClick={() => selectTopic(option.id)}
        >
          {option.label}
        </button>
      ));
    }

    if (activeStep === "concern") {
      return topic
        ? consultationConcerns[topic].map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => selectOption("concern", option)}
            >
              {option}
            </button>
          ))
        : null;
    }

    if (!activeStep) {
      return null;
    }

    return consultationSteps[activeStep].options.map((option) => (
      <button
        type="button"
        key={option}
        onClick={() => selectOption(activeStep, option)}
      >
        {option}
      </button>
    ));
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
              <span>無料・選択式の事前整理</span>
              <strong id="consultation-chat-title">{consultationChat.title}</strong>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="consultation-chat-close"
            aria-label="事前相談を閉じる"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </header>

        <div className="consultation-chat-progress" aria-label="相談の進捗">
          <span>{isComplete ? "相談内容の整理が完了しました" : `質問 ${currentStep + 1} / ${flow.length}`}</span>
          <i aria-hidden="true">
            <b style={{ width: `${isComplete ? 100 : (currentStep / flow.length) * 100}%` }} />
          </i>
        </div>

        <div className="consultation-chat-messages" aria-live="polite">
          <div className="consultation-message consultation-message-assistant">
            <span>事前相談</span>
            <p>{consultationChat.welcome}</p>
          </div>

          {flow.slice(0, currentStep).map((step) => (
            <div className="consultation-exchange" key={step}>
              <div className="consultation-message consultation-message-assistant">
                <span>事前相談</span>
                <p>{getStepPrompt(step)}</p>
              </div>
              <div className="consultation-message consultation-message-user">
                <span>あなたの選択</span>
                <p>{getAnswerLabel(step, answers)}</p>
              </div>
            </div>
          ))}

          {!isComplete && activeStep && (
            <div className="consultation-current-step">
              <div className="consultation-message consultation-message-assistant">
                <span>事前相談</span>
                <p>{getStepPrompt(activeStep)}</p>
              </div>
              <div className="consultation-options" aria-label="回答を選択">
                {renderOptions()}
              </div>
            </div>
          )}

          {isComplete && guidance && (
            <section className="consultation-summary" aria-labelledby="consultation-summary-title">
              <p className="consultation-summary-kicker">READY FOR CONSULTATION</p>
              <h3 id="consultation-summary-title">個別相談用のまとめ</h3>
              <dl>
                <div>
                  <dt>相談者</dt>
                  <dd>{answers.audience}</dd>
                </div>
                <div>
                  <dt>学年・状況</dt>
                  <dd>{answers.schoolStage}</dd>
                </div>
                <div>
                  <dt>テーマ</dt>
                  <dd>{getTopicLabel(topic)}</dd>
                </div>
                <div>
                  <dt>現在の悩み</dt>
                  <dd>{answers.concern}</dd>
                </div>
                <div>
                  <dt>希望時期</dt>
                  <dd>{answers.timing}</dd>
                </div>
              </dl>
              <div className="consultation-summary-guidance">
                <strong>資料に基づくご案内</strong>
                <p>{guidance}</p>
              </div>
              <a className="consultation-summary-cta" href={buildConsultationEmail(answers)}>
                この内容をメールに引き継ぐ
                <span aria-hidden="true">↗</span>
              </a>
              <button type="button" className="consultation-restart" onClick={restart}>
                最初からやり直す
              </button>
              <small>
                メールを開いてから、お名前・在住国・補足内容を追記できます。
              </small>
            </section>
          )}
          <div ref={messagesEndRef} />
        </div>

        {!isComplete && (
          <footer className="consultation-chat-compose">
            <div className="consultation-chat-footer">
              <a href={consultationChat.contactHref}>{consultationChat.contactLabel}</a>
              <p>選択内容は外部AIへ送信せず、この画面内でのみ整理します。</p>
            </div>
          </footer>
        )}
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
