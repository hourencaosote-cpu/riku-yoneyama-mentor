"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

type IntroPhase = "visible" | "leaving" | "hidden";

type SiteIntroProps = {
  number: string;
  section: string;
  quote: string;
  detail: string;
  tone: "sky" | "gold" | "coral" | "indigo" | "teal" | "sand";
};

export function SiteIntro({
  number,
  section,
  quote,
  detail,
  tone,
}: SiteIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>("visible");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(
      () => setPhase("leaving"),
      reducedMotion ? 60 : 1650,
    );
    const hideTimer = window.setTimeout(
      () => {
        setPhase("hidden");
        document.body.classList.remove("intro-active");
      },
      reducedMotion ? 140 : 2350,
    );

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.classList.remove("intro-active");
    };
  }, []);

  const skip = () => {
    setPhase("leaving");
    window.setTimeout(() => {
      setPhase("hidden");
      document.body.classList.remove("intro-active");
    }, 480);
  };

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`site-intro site-intro-${tone}${phase === "leaving" ? " site-intro-leaving" : ""}`}
      aria-label={`${section}ページの紹介`}
    >
      <div className="intro-atmosphere" aria-hidden="true" />
      <div className="intro-grid">
        <div className="intro-brand-panel">
          <BrandMark size="display" inverse />
          <div className="intro-brand-copy">
            <strong>RIKU YONEYAMA</strong>
            <span>EDUCATION PATHWAYS</span>
          </div>
        </div>
        <span className="intro-divider" aria-hidden="true" />
        <div className="intro-message">
          <p className="intro-section">
            <span>{number}</span>
            {section}
          </p>
          <p className="intro-catchcopy">{quote}</p>
          <p className="intro-detail">{detail}</p>
        </div>
      </div>
      <button type="button" className="intro-skip" onClick={skip}>
        本文を見る
        <span aria-hidden="true">↘</span>
      </button>
    </div>
  );
}
