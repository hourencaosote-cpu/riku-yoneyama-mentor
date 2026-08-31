"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

type IntroPhase = "checking" | "visible" | "leaving" | "hidden";

const INTRO_SEEN_KEY = "riku-yoneyama:intro-seen:rixa-v4";

export function SiteIntro() {
  const [phase, setPhase] = useState<IntroPhase>("checking");

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(INTRO_SEEN_KEY) === "true") {
        document.body.classList.remove("intro-active");
        return;
      }

      window.sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    } catch {
      // Storage may be unavailable in privacy-restricted browsers. In that case,
      // the intro still works for the current page.
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.classList.add("intro-active");
    const visibleTimer = window.setTimeout(() => setPhase("visible"), 0);
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
      window.clearTimeout(visibleTimer);
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

  if (phase === "checking" || phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`site-intro${phase === "leaving" ? " site-intro-leaving" : ""}`}
      aria-label="RIXA ロゴ"
    >
      <div className="intro-grid">
        <button
          type="button"
          className="intro-logo-button"
          onClick={skip}
          aria-label="サイトを表示する"
        >
          <BrandMark size="display" />
        </button>
      </div>
    </div>
  );
}
