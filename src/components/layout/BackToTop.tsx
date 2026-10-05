"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 420);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top${isVisible ? " back-to-top--visible" : ""}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 14 6-6 6 6" />
        <path d="M12 8v10" />
      </svg>
    </button>
  );
}
