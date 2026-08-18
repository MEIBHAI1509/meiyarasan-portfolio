"use client";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

import { projects } from "./project-data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Section id="projects" className="overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
              Selected Work
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              Things I&apos;ve{" "}
              <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                built.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              A selection of projects where I explored ideas, solved problems,
              and turned concepts into working digital products.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            02 Featured Projects
          </p>
        </Reveal>
      </div>

      {/* Projects */}
      <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.12}
              className="h-full"
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </Reveal>
          ))}
      </div>
    </Section>
  );
}