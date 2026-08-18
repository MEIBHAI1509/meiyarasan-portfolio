"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

import { experiences } from "./experience-data";

export function Experience() {
  return (
    <Section
      id="experience"
      className="overflow-hidden"
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
            Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
            Experience that{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              shaped me.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            From building React interfaces to working
            on production-grade applications and
            scalable frontend systems.
          </p>
        </Reveal>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-5xl">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-primary/30 via-white/[0.08] to-transparent md:block" />

        <div className="space-y-10 md:space-y-14">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.id}
              delay={0.1 + index * 0.12}
            >
              <article className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-[17px] top-8 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-zinc-950 md:flex">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                </div>

                {/* Card */}
                <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:border-white/[0.13] hover:bg-white/[0.035] sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <BriefcaseBusiness
                          size={15}
                          className="text-primary-light"
                        />

                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary-light">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-zinc-400">
                        {experience.company}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">
                        <CalendarDays size={12} />
                        {experience.startDate} —{" "}
                        {experience.endDate}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
                    <MapPin size={13} />
                    {experience.location}
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      What I worked on
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {experience.responsibilities.map(
                        (item) => (
                          <div
                            key={item}
                            className="flex gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-3.5"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-zinc-700 transition-colors group-hover:text-primary-light"
                            />

                            <p className="text-xs leading-6 text-zinc-500">
                              {item}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      Technologies
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-zinc-500"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-8 border-t border-white/[0.06] pt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      Highlights
                    </p>

                    <div className="mt-4 space-y-3">
                      {experience.achievements.map(
                        (achievement) => (
                          <div
                            key={achievement}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light/50" />

                            <p className="text-xs leading-6 text-zinc-400">
                              {achievement}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.3}>
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                Current focus
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Building scalable frontend experiences
                while continuing to grow as a full-stack
                developer.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium text-white transition-colors hover:text-primary-light"
            >
              Let&apos;s work together

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}