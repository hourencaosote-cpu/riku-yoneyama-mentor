"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

type IntroPhase = "visible" | "leaving" | "hidden";

export function SiteIntro() {
  const [phase, setPhase] = useState<IntroPhase>("visible");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    try {
      if (window.sessionStorage.getItem("riku-intro-seen") === "true") {
        document.documentElement.classList.add("intro-seen");
        const alreadySeenTimer = window.setTimeout(
          () => setPhase("hidden"),
          0,
        );
        return () => window.clearTimeout(alreadySeenTimer);
      }
      window.sessionStorage.setItem("riku-intro-seen", "true");
    } catch {
      // The introduction still works when storage is unavailable.
    }

    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(
      () => setPhase("leaving"),
      reducedMotion ? 80 : 2150,
    );
    const hideTimer = window.setTimeout(
      () => {
        setPhase("hidden");
        document.documentElement.classList.add("intro-seen");
        document.body.classList.remove("intro-active");
      },
      reducedMotion ? 160 : 2850,
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
      document.documentElement.classList.add("intro-seen");
      document.body.classList.remove("intro-active");
    }, 500);
  };

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`site-intro${phase === "leaving" ? " site-intro-leaving" : ""}`}
      aria-label="サイト紹介"
    >
      <div className="intro-orbit" aria-hidden="true" />
      <div className="intro-content">
        <BrandMark size="large" inverse />
        <p className="intro-kicker">RIKU YONEYAMA</p>
        <p className="intro-catchcopy">
          日本から世界へ、
          <br />
          選択肢を無限大に。
        </p>
        <p className="intro-subline">
          NCEA <span>/</span> ATAR <span>/</span> INTERNATIONAL PATHWAYS
        </p>
      </div>
      <button type="button" className="intro-skip" onClick={skip}>
        Skip
      </button>
    </div>
  );
}
