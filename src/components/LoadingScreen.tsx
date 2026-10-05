"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loadingState, setLoadingState] = useState<"loading" | "fading" | "hidden">("loading");
  const [scale, setScale] = useState(0.9);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const entranceTimer = setTimeout(() => {
      setScale(1);
      setOpacity(1);
    }, 100);

    const fadeTimer = setTimeout(() => {
      setLoadingState("fading");
    }, 1200);

    const unmountTimer = setTimeout(() => {
      setLoadingState("hidden");
    }, 1900);

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (loadingState === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#fbf8f2]"
      role="status"
      aria-label="Loading Aamos Wedding Planners"
      style={{
        opacity: loadingState === "fading" ? 0 : 1,
        transition: "opacity 0.7s ease-in-out",
      }}
    >
      <div
        className="relative z-10 flex w-full max-w-[24rem] flex-col items-center px-6"
        style={{
          opacity,
          transform: "scale(" + scale + ")",
          transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          src="/amos-logo-transparent.png"
          alt="Aamos Wedding Planners"
          width={2200}
          height={1730}
          priority
          className="h-auto w-full"
        />
        <div className="relative mt-5 h-[2px] w-32 overflow-hidden bg-[#9b7fad]/25">
          <div className="absolute inset-y-0 left-0 w-full origin-left animate-[loadingBar_1.2s_ease-in-out_infinite] bg-[#9b7fad]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); opacity: 1; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
