"use client";

import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

const stats = [
  {
    value: "5+",
    label: "Featured Projects",
    icon: Code2,
  },
  {
    value: "MERN",
    label: "Primary Stack",
    icon: Layers3,
  },
  {
    value: "∞",
    label: "Things to Learn",
    icon: Sparkles,
  },
];

export function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Visual */}
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.15),transparent_35%)]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Profile placeholder */}
            <div className="absolute inset-8 flex items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/60">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_80px_rgba(124,58,237,0.2)]">
                  <span className="font-mono text-3xl font-bold tracking-[-0.08em] text-white">
                    MP
                  </span>
                </div>

                <p className="mt-5 text-sm font-medium text-zinc-400">
                  Meiyarasan P
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Front-End Developer
                </p>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-primary shadow-[0_0_25px_rgba(124,58,237,0.8)]" />

            <div className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-secondary shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
          </div>

          {/* Floating label */}
          <div className="absolute -bottom-5 -right-2 rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Currently building
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              Modern Web Experiences
            </p>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
              About Me
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              I enjoy turning ideas into{" "}
              <span className="bg-linear-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                useful digital products.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-zinc-400">
              <p>
                I&apos;m <span className="font-medium text-zinc-200">Meiyarasan P</span>,
                a Front-End Developer with a strong interest in building
                responsive, intuitive, and visually polished web applications.
              </p>

              <p>
                I work primarily with the modern JavaScript ecosystem and enjoy
                working across the MERN stack when a project needs a complete
                end-to-end solution.
              </p>

              <p>
                My focus is not only on making applications work, but also on
                making them feel good to use — from thoughtful interfaces and
                smooth interactions to clean and maintainable code.
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.3}>
            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-primary-light">
                Explore my projects
              </span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] sm:p-5"
                  >
                    <Icon
                      size={17}
                      className="mb-4 text-zinc-600 transition-colors group-hover:text-primary-light"
                    />

                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-zinc-600 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}