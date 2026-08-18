"use client";

import type { ComponentType } from "react";

import {
  SiAngular,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
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

import { Server, Workflow, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

type SkillIconProps = {
  size?: number;
  className?: string;
};

type SkillIcon = ComponentType<SkillIconProps>;

type Skill = {
  name: string;
  icon: SkillIcon;
  level: string;
  size?: number;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const RestApiIcon: SkillIcon = ({
  size = 22,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="7"
        cy="7"
        r="1"
        fill="currentColor"
      />

      <circle
        cx="7"
        cy="12"
        r="1"
        fill="currentColor"
      />

      <circle
        cx="7"
        cy="17"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
};

const DynamoDbIcon: SkillIcon = ({
  size = 22,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 7.5L12 4l7 3.5v9L12 20l-7-3.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M5 7.5L12 11l7-3.5M12 11v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* ============================================================ */
/* Skill Data */
/* ============================================================ */

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
        name: "Angular",
        icon: SiAngular,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        level: "Advanced",
        size: 21,
      },
      {
        name: "CSS",
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
    title: "Backend & APIs",
    description:
      "Building APIs, backend services, integrations, and scalable application architecture.",
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
        name: "NestJS",
        icon: SiNestjs,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        level: "Advanced",
        size: 22,
      },
      {
        name: "REST APIs",
        icon: RestApiIcon,
        level: "Advanced",
        size: 21,
      },
    ],
  },

  {
    title: "Databases",
    description:
      "Working with relational, NoSQL, caching, and production data systems.",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "Redis",
        icon: SiRedis,
        level: "Intermediate",
        size: 22,
      },
      {
        name: "DynamoDB",
        icon: DynamoDbIcon,
        level: "Intermediate",
        size: 21,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Using modern development tools and collaborative engineering workflows.",
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

/* ============================================================ */
/* Skills Section */
/* ============================================================ */

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
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              build things.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            A combination of frontend, backend,
            database, API, and engineering tools
            I use to turn ideas into
            production-ready applications.
          </p>
        </Reveal>
      </div>

      {/* ================================================== */}
      {/* Skill Groups */}
      {/* ================================================== */}

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(
          (group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={
                0.1 +
                groupIndex * 0.08
              }
              className="h-full"
            >
              <div className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-500 hover:border-white/[0.13] hover:bg-white/[0.035] sm:p-6">
                {/* Group heading */}
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                      {group.title}
                    </h3>

                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-700">
                      {String(
                        group.skills.length,
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-zinc-600">
                    {group.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-1 flex-col gap-2">
                  {group.skills.map(
                    (skill) => {
                      const Icon =
                        skill.icon;

                      return (
                        <div
                          key={
                            skill.name
                          }
                          className="group/skill flex items-center gap-3 rounded-xl border border-transparent bg-white/[0.02] px-3 py-3 transition-all duration-300 hover:border-white/[0.07] hover:bg-white/[0.04]"
                        >
                          {/* Icon */}
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-black/20 text-zinc-500 transition-colors duration-300 group-hover/skill:text-white">
                            <Icon
                              size={
                                skill.size ??
                                22
                              }
                            />
                          </div>

                          {/* Name */}
                          <span className="min-w-0 flex-1 text-xs font-medium text-zinc-400 transition-colors group-hover/skill:text-white">
                            {
                              skill.name
                            }
                          </span>

                          {/* Level */}
                          <span className="hidden text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-700 sm:block">
                            {
                              skill.level
                            }
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </Reveal>
          ),
        )}
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
            icon={Workflow}
          />

          <Strength
            number="02"
            title="Performance"
            description="Focused on responsive interfaces, efficient API usage, rendering performance, and production optimization."
            icon={Sparkles}
          />

          <Strength
            number="03"
            title="Full-Stack Thinking"
            description="Comfortable moving between frontend, APIs, databases, authentication, and deployment."
            icon={Server}
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
  icon: Icon, 
}: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.025]">
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-primary-light">
          {number}
        </span>

        <Icon
          size={17}
          className="text-zinc-700 transition-colors group-hover:text-primary-light"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

/* ============================================================ */
/* Performance icon */
/* ============================================================ */

// function SparkIcon({
//   size = 17,
//   className,
// }: {
//   size?: number;
//   className?: string;
// }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       aria-hidden="true"
//     >
//       <path
//         d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
//         fill="currentColor"
//       />

//       <path
//         d="M19 15L19.8 17.2L22 18L19.8 18.8L19 21L18.2 18.8L16 18L18.2 17.2L19 15Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }