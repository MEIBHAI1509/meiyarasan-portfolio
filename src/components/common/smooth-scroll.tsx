"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.5,

      // Don't let Lenis take control of elements
      // explicitly marked as native scroll containers.
      prevent: (node) => {
        return (
          node.closest(
            "[data-lenis-prevent]",
          ) !== null
        );
      },
    });

    window.__lenis = lenis;

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);

      animationFrameId =
        requestAnimationFrame(raf);
    };

    animationFrameId =
      requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(
        animationFrameId,
      );

      lenis.destroy();

      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}