"use client";

import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
) {
  const [activeSection, setActiveSection] =
    useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (element): element is HTMLElement =>
          element !== null,
      );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id,
          );
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) =>
      observer.observe(section),
    );

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}