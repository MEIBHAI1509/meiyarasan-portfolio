"use client";

import {
  SiAngular,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

type Skill = {
  name: string;
  icon: React.ElementType;
  level: string;
  size?: number;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Building responsive, accessible, and high-performance interfaces.",
    skills: [
      {
        name: "React.js",
        icon: SiReact,
        level: "Advanced",
        size: 22,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        level: "Advanced",
        size: 22,
      },
      {
        name: "Angular",
        icon: SiAngular,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: "Advanced",
        size: 21,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: "Advanced",
        size: 21,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        level: "Advanced",
        size: 21,
      },
      {
        name: "CSS3",
        icon: SiCss,
        level: "Advanced",
        size: 21,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Advanced",
        size: 22,
      },
    ],
  },

  {
    title: "Backend & Data",
    description:
      "Developing APIs, backend services, databases, and data-driven applications.",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        level: "Advanced",
        size: 22,
      },
      {
        name: "Express",
        icon: SiExpress,
        level: "Advanced",
        size: 22,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "Redis",
        icon: SiRedis,
        level: "Intermediate",
        size: 22,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Working with modern development tools and collaborative engineering workflows.",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        level: "Advanced",
        size: 22,
      },
      {
        name: "GitHub",
        icon: SiGithub,
        level: "Advanced",
        size: 22,
      },
      {
        name: "NPM",
        icon: SiNpm,
        level: "Advanced",
        size: 22,
      },
      {
        name: "Postman",
        icon: SiPostman,
        level: "Advanced",
        size: 22,
      },
      {
        name: "Figma",
        icon: SiFigma,
        level: "Intermediate",
        size: 22,
      },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      className="overflow-hidden"
    >
      {/* ================================================== */}
      {/* Heading */}
      {/* ================================================== */}

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
            Skills & Technologies
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              build things.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            A combination of frontend, backend, database,
            and engineering tools I use to turn ideas into
            production-ready applications.
          </p>
        </Reveal>
      </div>

      {/* ================================================== */}
      {/* Skill Groups */}
      {/* ================================================== */}

      <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.title}
            delay={0.1 + groupIndex * 0.1}
            className="h-full"
          >
            <div className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:border-white/[0.13] hover:bg-white/[0.035] sm:p-6">
              {/* Group heading */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-700">
                    {String(group.skills.length).padStart(
                      2,
                      "0",
                    )}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-zinc-600">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-1 flex-col gap-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-3 rounded-xl border border-transparent bg-white/[0.02] px-3 py-3 transition-all duration-300 hover:border-white/[0.07] hover:bg-white/[0.04]"
                    >
                      {/* Icon */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-black/20 text-zinc-500 transition-colors duration-300 group-hover/skill:text-white">
                        <Icon
                          size={skill.size ?? 22}
                        />
                      </div>

                      {/* Name */}
                      <span className="min-w-0 flex-1 text-xs font-medium text-zinc-400 transition-colors group-hover/skill:text-white">
                        {skill.name}
                      </span>

                      {/* Level */}
                      <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-700">
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ================================================== */}
      {/* Engineering Strengths */}
      {/* ================================================== */}

      <Reveal delay={0.35}>
        <div className="mx-auto mt-5 grid max-w-6xl gap-5 md:grid-cols-3">
          <Strength
            number="01"
            title="Reusable Architecture"
            description="Building reusable components and maintainable frontend systems that can scale with the product."
          />

          <Strength
            number="02"
            title="Performance"
            description="Focused on responsive interfaces, efficient API usage, rendering performance, and production optimization."
          />

          <Strength
            number="03"
            title="Full-Stack Thinking"
            description="Comfortable moving between frontend, APIs, databases, authentication, and deployment."
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================ */
/* Strength Card */
/* ============================================================ */

function Strength({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition-colors duration-300 hover:border-white/[0.1]">
      <span className="text-[10px] font-semibold tracking-[0.2em] text-primary-light">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-zinc-600">
        {description}
      </p>
    </div>
  );
}