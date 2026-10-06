"use client";

import { useEffect } from "react";

const SCROLL_DURATION = 950;
const SCROLL_DELAY = 90;

export default function SmoothScroll() {
  useEffect(() => {
    let animationFrame: number | null = null;

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");

      if (!link) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return;
      }

      let targetId: string;

      try {
        targetId = decodeURIComponent(url.hash.slice(1));
      } catch {
        return;
      }

      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", url.hash);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
      const startY = window.scrollY;
      const targetY = Math.max(
        0,
        targetElement.getBoundingClientRect().top + startY - headerHeight - 16,
      );

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo({ top: targetY });
        return;
      }

      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = Math.max(0, time - startTime - SCROLL_DELAY);
        const progress = Math.min(elapsed / SCROLL_DURATION, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 4);

        window.scrollTo({ top: startY + (targetY - startY) * easedProgress });

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
        } else {
          animationFrame = null;
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return null;
}
