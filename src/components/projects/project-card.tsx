"use client";

import { useRef, useState } from "react";

import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { ProjectDialog } from "./project-dialog";
import type { Project } from "./project-data";
import { ProjectVisual } from "./project-visual";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({
    project,
    index,
}: ProjectCardProps) {
    const [open, setOpen] = useState(false);

    const cardRef =
        useRef<HTMLElement | null>(null);

    const handlePointerMove = (
        event: React.PointerEvent<HTMLElement>,
    ) => {
        if (
            window.matchMedia("(pointer: coarse)")
                .matches
        ) {
            return;
        }

        const card = cardRef.current;

        if (!card) {
            return;
        }

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX -
            (rect.left + rect.width / 2);

        const y =
            event.clientY -
            (rect.top + rect.height / 2);

        const rotateX =
            -(y / rect.height) * 4;

        const rotateY =
            (x / rect.width) * 4;

        card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
    };

    const handlePointerLeave = () => {
        const card = cardRef.current;

        if (!card) {
            return;
        }

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };

    const getProjectInitial = () => {
        if (project.title === "Vambu") {
            return "V";
        }

        if (project.title === "Selavu Kaavalan") {
            return "SK";
        }

        // Professional / unnamed projects
        if (
            project.category
                ?.toLowerCase()
                .includes("professional")
        ) {
            return "TC";
        }

        return project.title
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

    return (
        <article
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-[transform,border-color,background-color] duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl"
        >
            {/* Project Visual */}
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
                <ProjectVisual project={project} />

                {/* Category */}
                <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md">
                        {project.category}
                    </span>
                </div>

                {/* Year */}
                <div className="absolute right-4 top-4 z-10 sm:right-5 sm:top-5">
                    <span className="text-xs text-zinc-500">
                        {project.year}
                    </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 z-10 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:right-5">
                    <ArrowUpRight size={17} />
                </div>
            </div>

            {/* ================================================== */}
            {/* Content */}
            {/* ================================================== */}

            <div className="flex flex-1 flex-col p-5 sm:p-7">
                {/* Main content */}
                <div>
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                {project.title}
                            </h3>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                                {project.shortDescription}
                            </p>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map(
                            (technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-zinc-500 transition-colors group-hover:text-zinc-400"
                                >
                                    {technology}
                                </span>
                            ),
                        )}
                    </div>
                </div>

                {/* ================================================== */}
                {/* Bottom Actions */}
                {/* ================================================== */}

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-7">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-white"
                        >
                            <FaGithub size={15} />
                            GitHub
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-white"
                        >
                            <ExternalLink size={15} />
                            Live Demo
                        </a>
                    )}

                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-white transition-colors hover:text-primary-light"
                    >
                        Case Study

                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>

            {/* Dialog */}
            <ProjectDialog
                project={project}
                open={open}
                onOpenChange={setOpen}
            />
        </article>
    );
}