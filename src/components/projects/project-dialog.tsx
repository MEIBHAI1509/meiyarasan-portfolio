"use client";

import {
  useEffect,
  type ReactNode,
} from "react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Wrench,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const isProfessional =
    project.category
      .toLowerCase()
      .includes("professional");

  /*
   * Prevent the page behind the dialog from scrolling.
   *
   * This is especially important on mobile and when
   * using wheel/touch scrolling over the dialog.
   */

  useEffect(() => {
    const lenis = window.__lenis;

    if (!lenis) {
      return;
    }

    if (open) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="w-[min(92vw,900px)] max-w-[900px]">
        {/* ================================================== */}
        {/* Header - NOT SCROLLABLE */}
        {/* ================================================== */}

        <div className="relative shrink-0 border-b border-white/[0.07] px-5 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-8">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative pr-10">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400">
                {project.category}
              </span>

              <span className="text-xs text-zinc-700">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <DialogTitle className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              {project.title}
            </DialogTitle>

            {/* Description */}
            <DialogDescription className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
              {project.shortDescription}
            </DialogDescription>

            {/* Professional metadata */}
            {isProfessional && (
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-3 py-1.5 text-xs text-zinc-400">
                  <BriefcaseBusiness
                    size={13}
                    className="text-primary-light"
                  />

                  Associate Software Developer
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-500">
                  Aretedge Innovations
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================================================== */}
        {/* SCROLLABLE BODY */}
        {/* ================================================== */}

        <div
          data-lenis-prevent
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            touch-pan-y
            px-5
            py-7
            sm:px-8
            sm:py-9
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="space-y-10 pb-4">
            {/* Overview */}
            <section>
              <SectionHeading
                icon={<Lightbulb size={14} />}
                title="Overview"
              />

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {project.description}
              </p>
            </section>

            {/* Professional experience */}
            {isProfessional && (
              <section>
                <SectionHeading
                  icon={
                    <BriefcaseBusiness
                      size={14}
                    />
                  }
                  title="My Contribution"
                />

                <div className="mt-4 rounded-2xl border border-primary/10 bg-primary/[0.025] p-5 sm:p-6">
                  <p className="text-sm leading-7 text-zinc-500">
                    As an Associate Software Developer,
                    I worked primarily on frontend
                    development, building responsive
                    production interfaces with React.js
                    and Next.js. I developed reusable UI
                    components, integrated GraphQL and
                    REST APIs, optimized frontend
                    performance, and contributed to
                    white-label implementations for
                    multiple clients.
                  </p>
                </div>
              </section>
            )}

            {/* Features */}
            <section>
              <SectionHeading
                icon={<CheckCircle2 size={14} />}
                title="Key Features"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-primary-light"
                      />

                      <span className="text-xs leading-6 text-zinc-500">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <SectionHeading
                icon={<Wrench size={14} />}
                title="Technology"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </section>

            {/* Challenges */}
            <section>
              <SectionHeading
                icon={<Lightbulb size={14} />}
                title="Challenges & Engineering"
              />

              <div className="mt-4 space-y-3">
                {project.challenges.map(
                  (challenge) => (
                    <div
                      key={challenge}
                      className="flex gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700" />

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
                <section className="border-t border-white/[0.07] pt-7">
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 text-xs font-medium text-zinc-400 transition-colors hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                      >
                        <FaGithub size={14} />
                        GitHub
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-xs font-medium text-black! transition-transform hover:scale-[1.02]"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </section>
              )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ============================================================ */
/* Section Heading */
/* ============================================================ */

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
}

function SectionHeading({
  icon,
  title,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary-light">
        {icon}
      </span>

      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
        {title}
      </h3>
    </div>
  );
}