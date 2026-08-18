"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(
    null,
  );

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const glow = glowRef.current;

    if (!glow) {
      return;
    }

    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    const update = () => {
      currentX +=
        (targetX - currentX) * 0.12;

      currentY +=
        (targetY - currentY) * 0.12;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      frame = 0;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl md:block"
    />
  );
}