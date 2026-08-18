"use client";

import Image from "next/image";
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
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* ================================================== */}
        {/* Professional Photo */}
        {/* ================================================== */}

        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-zinc-950 to-secondary/10" />

            {/* Grid */}
            <div
              className="absolute inset-0 z-10 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Image */}
            <Image
              src="/images/profile-working.png"
              alt="Meiyarasan working on a laptop"
              fill
              priority={false}
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-[5] bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/10" />

            {/* Bottom information */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Currently building
              </p>

              <p className="mt-1 text-lg font-semibold tracking-tight text-white">
                Modern Web Experiences
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Frontend · Full Stack · Product
              </p>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -left-20 top-1/3 z-0 h-48 w-48 rounded-full bg-primary/20 blur-[90px]" />
          </div>

          {/* Floating status */}
          <div className="absolute -bottom-5 -right-2 rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Open to opportunities
              </p>
            </div>
          </div>
        </Reveal>

        {/* ================================================== */}
        {/* Content */}
        {/* ================================================== */}

        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
              About Me
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              I enjoy turning ideas into{" "}
              <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                useful digital products.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-zinc-400">
              <p>
                I&apos;m{" "}
                <span className="font-medium text-zinc-200">
                  Meiyarasan P
                </span>
                , a Frontend Developer with a strong interest in building
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
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-primary-light">
                Explore my projects
              </span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
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