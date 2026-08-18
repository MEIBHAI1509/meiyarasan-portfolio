"use client";

import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "GitHub",
    href: "#github",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/MEIBHAI1509",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/meiyarasan-p-373577242/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:meiyarasan1509@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================================================== */}
        {/* Main footer */}
        {/* ================================================== */}

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Meiyarasan P home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold tracking-tight text-black">
                MP
              </span>

              <div>
                <p className="text-sm font-semibold tracking-tight text-white">
                  Meiyarasan P
                </p>

                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Frontend · Full Stack
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-600">
              Frontend developer focused on building
              scalable, responsive, and polished digital
              experiences with modern web technologies.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Start a conversation

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-xs text-zinc-600 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex w-fit items-center gap-3 text-xs text-zinc-600 transition-colors hover:text-white"
                  >
                    <Icon
                      size={15}
                      className="text-zinc-700 transition-colors group-hover:text-white"
                    />

                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* Bottom */}
        {/* ================================================== */}

        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-zinc-700">
            © {currentYear} Meiyarasan P. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] text-zinc-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/70" />

            Available for opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}