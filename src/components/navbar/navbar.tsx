"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { scrollToSection } from "@/lib/navigation";

import { Magnetic } from "@/components/effects/magnetic";

import { useActiveSection } from "@/hooks/use-active-section";

const navigationItems = [
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
];

const trackedSectionIds = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "github",
  "blog",
  "contact",
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const activeSection =
    useActiveSection(trackedSectionIds);

  /* ==========================================================
     Header scroll state
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* ==========================================================
     Escape key
  ========================================================== */

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [mobileOpen]);

  /* ==========================================================
     Lock background scrolling when mobile menu is open
  ========================================================== */

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow =
      body.style.overflow;

    const previousHtmlOverflow =
      html.style.overflow;

    // Stop Lenis from scrolling the page
    // while the mobile menu is open.
    window.__lenis?.stop();

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow =
        previousBodyOverflow;

      html.style.overflow =
        previousHtmlOverflow;

      window.__lenis?.start();
    };
  }, [mobileOpen]);

  /* ==========================================================
     Navigation
  ========================================================== */

  const handleNavigation = (id: string) => {
    setMobileOpen(false);

    requestAnimationFrame(() => {
      scrollToSection(id);
    });
  };

  return (
    <>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* ================================================== */}
          {/* Logo */}
          {/* ================================================== */}

          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);

              requestAnimationFrame(() => {
                scrollToSection("hero");
              });
            }}
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-white transition-all duration-300 group-hover:border-primary/40 group-hover:bg-white/[0.08]">
              <span className="relative z-10">
                MP
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
              Meiyarasan P
            </span>
          </button>

          {/* ================================================== */}
          {/* Desktop Navigation */}
          {/* ================================================== */}

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navigationItems.map(
              (item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                  className={`group relative text-xs font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-primary-light transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ),
            )}
          </nav>

          {/* ================================================== */}
          {/* Desktop CTA */}
          {/* ================================================== */}

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() =>
                handleNavigation("contact")
              }
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* ================================================== */}
          {/* Mobile Menu Button */}
          {/* ================================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen(
                (current) => !current,
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] lg:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Menu
                size={19}
                className={`absolute transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              <X
                size={19}
                className={`absolute transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ====================================================== */}
      {/* Mobile Navigation */}
      {/* ====================================================== */}

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* ==================================================== */}
        {/* Backdrop */}
        {/* ==================================================== */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() =>
            setMobileOpen(false)
          }
          tabIndex={mobileOpen ? 0 : -1}
          className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* ==================================================== */}
        {/* Menu Panel */}
        {/* ==================================================== */}

        <div
          className={`absolute left-3 right-3 top-[5.5rem] max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-zinc-950/95 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <nav
            className="p-3"
            aria-label="Mobile navigation"
          >
            {navigationItems.map(
              (item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleNavigation(
                      item.id,
                    )
                  }
                  tabIndex={
                    mobileOpen ? 0 : -1
                  }
                  className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                    activeSection ===
                    item.id
                      ? "bg-white/[0.06]"
                      : "hover:bg-white/[0.05]"
                  }`}
                >
                  <span>
                    <span
                      className={`block text-sm font-medium ${
                        activeSection ===
                        item.id
                          ? "text-white"
                          : "text-zinc-200"
                      }`}
                    >
                      {item.label}
                    </span>

                    <span className="mt-1 block text-[11px] text-zinc-600">
                      {getNavigationDescription(
                        item.id,
                      )}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className={`transition-all duration-300 ${
                      activeSection ===
                      item.id
                        ? "text-primary-light"
                        : "text-zinc-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-light"
                    }`}
                  />
                </button>
              ),
            )}

            {/* ================================================= */}
            {/* Mobile CTA */}
            {/* ================================================= */}

            <div className="mt-2 border-t border-white/[0.06] p-2">
              <Magnetic>
                <button
                  type="button"
                  onClick={() =>
                    handleNavigation(
                      "contact",
                    )
                  }
                  tabIndex={
                    mobileOpen ? 0 : -1
                  }
                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Let&apos;s Talk

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </Magnetic>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

/* ============================================================ */
/* Navigation descriptions */
/* ============================================================ */

function getNavigationDescription(
  id: string,
) {
  switch (id) {
    case "about":
      return "A little about me";

    case "skills":
      return "Technologies I work with";

    case "projects":
      return "Things I've built";

    case "experience":
      return "My developer journey";

    case "github":
      return "Open-source work";

    case "blog":
      return "Things I'm learning";

    default:
      return "";
  }
}