"use client";

import {
  type ReactNode,
  useRef,
} from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.2,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(
    null,
  );

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (
      window.matchMedia("(pointer: coarse)")
        .matches
    ) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const handlePointerLeave = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.transform =
      "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}