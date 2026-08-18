"use client";

import { useState } from "react";

import { ProjectDialog } from "./project-dialog";
import { ProjectCard } from "./project-card";
import {
  projects,
  type Project,
} from "./project-data";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

export function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <Section
      id="projects"
      className="overflow-hidden"
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
            Selected Work
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              built.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            A selection of projects where I&apos;ve worked
            across frontend development, full-stack
            architecture, APIs, and product experiences.
          </p>
        </Reveal>
      </div>

      {/* Projects */}
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.12}
            >
              <ProjectCard
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            </Reveal>
          ))}
      </div>

      {/* ================================================== */}
      {/* Modal lives OUTSIDE the cards */}
      {/* ================================================== */}

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProject(null);
            }
          }}
        />
      )}
    </Section>
  );
}