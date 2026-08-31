"use client";

import { useEffect, useRef, useState } from "react";

type IntroPhase = "checking" | "visible" | "leaving" | "hidden";

let introShownInCurrentDocument = false;

function isInternalPageNavigation() {
  const navigationEntry = performance.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming | undefined;

  if (navigationEntry?.type === "reload" || !document.referrer) {
    return false;
  }

  try {
    return new URL(document.referrer).origin === window.location.origin;
  } catch {
    return false;
  }
}

export function SiteIntro() {
  const [phase, setPhase] = useState<IntroPhase>("checking");
  const skipTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (introShownInCurrentDocument || isInternalPageNavigation()) {
      document.body.classList.remove("intro-active");
      const hiddenTimer = window.setTimeout(() => setPhase("hidden"), 0);
      return () => window.clearTimeout(hiddenTimer);
    }

    introShownInCurrentDocument = true;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.classList.add("intro-active");
    const visibleTimer = window.setTimeout(() => setPhase("visible"), 0);
    const leaveTimer = window.setTimeout(
      () => setPhase("leaving"),
      reducedMotion ? 80 : 2600,
    );
    const hideTimer = window.setTimeout(
      () => {
        setPhase("hidden");
        document.body.classList.remove("intro-active");
      },
      reducedMotion ? 180 : 3300,
    );

    return () => {
      window.clearTimeout(visibleTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      if (skipTimerRef.current !== null) {
        window.clearTimeout(skipTimerRef.current);
      }
      document.body.classList.remove("intro-active");
    };
  }, []);

  const skip = () => {
    setPhase("leaving");
    skipTimerRef.current = window.setTimeout(() => {
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
          <span className="intro-rixa-mark" aria-hidden="true">
            <span className="intro-logo-halo" />
            <img
              className="intro-logo-layer intro-logo-core"
              src="/rixa-logo.png"
              alt=""
            />
            <img
              className="intro-logo-layer intro-logo-cap"
              src="/rixa-logo.png"
              alt=""
            />
            <img
              className="intro-logo-layer intro-logo-word"
              src="/rixa-logo.png"
              alt=""
            />
            <span className="intro-pen-trace" />
          </span>
        </button>
      </div>
    </div>
  );
}
