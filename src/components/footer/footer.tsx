"use client";

import { ArrowUpRight } from "lucide-react";

import {
  scrollToSection,
  scrollToTop,
} from "@/lib/navigation";

const navigation = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Projects",
    id: "projects",
  },
  {
    label: "Journey",
    id: "experience",
  },
  {
    label: "GitHub",
    id: "github",
  },
  {
    label: "Blog",
    id: "blog",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-xs font-bold text-white transition-all duration-300 group-hover:border-primary/30 group-hover:bg-white/[0.08]">
                MP
              </span>

              <span className="text-sm font-semibold text-white">
                Meiyarasan P
              </span>
            </button>

            <p className="mt-3 max-w-sm text-xs leading-5 text-zinc-600">
              Frontend developer crafting responsive
              interfaces and full-stack web experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-5 gap-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  scrollToSection(item.id)
                }
                className="text-xs text-zinc-600 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Meiyarasan P.
            All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1 self-start transition-colors hover:text-zinc-400 sm:self-auto"
          >
            Back to top

            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}