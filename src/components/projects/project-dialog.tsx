"use client";

import { useEffect } from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";

import type { Project } from "./project-data";
import { FaGithub } from "react-icons/fa";

interface ProjectDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const scrollY = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      htmlOverflow: html.style.overflow,
    };

    // Stop Lenis while modal is open.
    window.__lenis?.stop();

    // Lock the background.
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    html.style.overflow = "hidden";

    return () => {
      // Restore everything.
      body.style.overflow =
        previous.overflow;

      body.style.position =
        previous.position;

      body.style.top =
        previous.top;

      body.style.left =
        previous.left;

      body.style.right =
        previous.right;

      body.style.width =
        previous.width;

      html.style.overflow =
        previous.htmlOverflow;

      // Restore Lenis.
      window.__lenis?.start();

      // Restore exact page position.
      window.scrollTo(
        0,
        scrollY,
      );
    };
  }, [open]);
  if (!open) {
    return null;
  }

  // createPortal is only needed in the browser.
  // This component is a client component, so document
  // is available when the component is actually rendered.
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* ================================================== */}
      {/* Backdrop */}
      {/* ================================================== */}

      <button
        type="button"
        aria-label="Close project dialog"
        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-md"
        onClick={() => onOpenChange(false)}
      />

      {/* ================================================== */}
      {/* Modal wrapper */}
      {/* ================================================== */}

      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* ================================================== */}
        {/* Dialog */}
        {/* ================================================== */}

        <div
          data-lenis-prevent
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-zinc-950 shadow-2xl shadow-black/60"
        >
          {/* ================================================== */}
          {/* Header */}
          {/* ================================================== */}

          <div className="flex shrink-0 items-start justify-between gap-5 border-b border-white/[0.07] px-5 py-5 sm:px-7">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
                {project.category}
              </p>

              <h2
                id={`project-${project.id}-title`}
                className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl"
              >
                {project.title}
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                {project.year}
              </p>
            </div>

            {/* Single close button */}
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close project dialog"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition-all hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* ================================================== */}
          {/* Scrollable content */}
          {/* ================================================== */}

          <div
            data-lenis-prevent
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="p-5 sm:p-7">
              {/* Overview */}
              <section>
                <SectionLabel>
                  Overview
                </SectionLabel>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>
              </section>

              {/* Features */}
              <section className="mt-9">
                <SectionLabel>
                  Key Features
                </SectionLabel>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-primary-light"
                        />

                        <p className="text-xs leading-6 text-zinc-500">
                          {feature}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </section>

              {/* Technologies */}
              <section className="mt-9">
                <SectionLabel>
                  Technologies
                </SectionLabel>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-zinc-400"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </section>

              {/* Challenges */}
              <section className="mt-9">
                <SectionLabel>
                  Challenges & Engineering
                </SectionLabel>

                <div className="mt-4 space-y-3">
                  {project.challenges.map(
                    (challenge) => (
                      <div
                        key={challenge}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />

                        <p className="text-xs leading-6 text-zinc-500">
                          {challenge}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </section>

              {/* Links */}
              {(project.githubUrl ||
                project.liveUrl) && (
                  <section className="mt-9 border-t border-white/[0.07] pt-7">
                    <SectionLabel>
                      Links
                    </SectionLabel>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-zinc-400 transition-all hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                        >
                          <FaGithub size={14} />

                          View Source

                          <ArrowUpRight
                            size={13}
                          />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black! transition-all hover:bg-zinc-200"
                        >
                          <ExternalLink
                            size={14}
                          />

                          Live Project

                          <ArrowUpRight
                            size={13}
                          />
                        </a>
                      )}
                    </div>
                  </section>
                )}

              <div className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ============================================================ */
/* Section Label */
/* ============================================================ */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
      {children}
    </p>
  );
}