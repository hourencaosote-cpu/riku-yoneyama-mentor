"use client";

import { useEffect } from "react";

const targetSelector = [
  ".home-hero .hero-copy",
  ".home-hero .portrait-card",
  ".page-hero-copy",
  ".proof-grid > div",
  ".concern-grid > article",
  ".path-grid > .path-card",
  ".story-preview-grid > div",
  ".result-preview-grid > div",
  ".contact-band-grid > div",
  ".audience-list > li",
  ".pillar-grid > article",
  ".method-list > li",
  ".scope-list > article",
  ".boundary-columns > article",
  ".profile-layout > *",
  ".story-list > article",
  ".belief-grid > *",
  ".result-summary-grid > article",
  ".university-list > article",
  ".experience-points > article",
  ".process-list > li",
  ".plan-grid > article",
  ".comparison-list > article",
  ".voice-grid > article",
  ".faq-list > details",
  ".inquiry-grid > div",
].join(",");

export function MotionRuntime() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(targetSelector),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    targets.forEach((target, index) => {
      target.classList.add("reveal-target");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    });
    document.documentElement.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -9% 0px",
        threshold: 0.1,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
