"use client";

import {
  BarChart3,
  CheckCircle2,
  CircleUserRound,
  MessageCircle,
  Trophy,
  Wallet,
} from "lucide-react";

import type { Project } from "./project-data";

interface ProjectVisualProps {
  project: Project;
}

export function ProjectVisual({
  project,
}: ProjectVisualProps) {
  switch (project.id) {
    case "vambu":
      return <VambuVisual />;

    case "selavu-kaavalan":
      return <SelavuKaavalanVisual />;

    case "tournament-challenge-platform":
      return <TournamentVisual />;

    default:
      return <DefaultVisual />;
  }
}

/* ============================================================ */
/* Vambu */
/* ============================================================ */

function VambuVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-500/[0.12] via-zinc-950 to-cyan-500/[0.08]">
      <Grid />

      <Glow className="bg-violet-500/20" />

      {/* Application window */}
      <div className="absolute left-1/2 top-1/2 w-[86%] max-w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-xl transition-transform duration-700 group-hover:scale-[1.03] sm:w-[78%]">
        {/* Window header */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2.5 sm:px-4 sm:py-3">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />

          <div className="ml-auto h-5 w-20 rounded-md bg-white/[0.04] sm:w-24" />
        </div>

        <div className="flex h-36 sm:h-44">
          {/* Sidebar */}
          <div className="hidden w-28 border-r border-white/[0.06] p-3 sm:block">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-violet-400/20" />

              <div className="h-2 w-12 rounded bg-white/10" />
            </div>

            <div className="space-y-2">
              <div className="h-6 rounded-md bg-violet-400/10" />
              <div className="h-6 rounded-md bg-white/[0.03]" />
              <div className="h-6 rounded-md bg-white/[0.03]" />
            </div>
          </div>

          {/* Chat */}
          <div className="flex flex-1 flex-col p-3 sm:p-4">
            <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
              <CircleUserRound
                size={18}
                className="text-violet-300"
              />

              <div>
                <div className="h-2 w-16 rounded bg-white/15" />

                <div className="mt-1 h-1.5 w-10 rounded bg-green-400/30" />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-2 pt-4">
              <ChatBubble width="14" />

              <div className="flex justify-end">
                <div className="rounded-xl rounded-br-sm bg-violet-500/20 px-3 py-2">
                  <div className="h-1.5 w-24 rounded bg-violet-200/20" />
                </div>
              </div>

              <ChatBubble width="14" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating icon */}
      <FloatingIcon>
        <MessageCircle size={18} />
      </FloatingIcon>
    </div>
  );
}

/* ============================================================ */
/* Selavu Kaavalan */
/* ============================================================ */

function SelavuKaavalanVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-emerald-500/[0.10] via-zinc-950 to-cyan-500/[0.08]">
      <Grid />

      <Glow className="bg-emerald-500/15" />

      {/* Dashboard */}
      <div className="absolute left-1/2 top-1/2 w-[86%] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-zinc-950/90 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-700 group-hover:scale-[1.03] sm:w-[80%] sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-20 rounded bg-white/15" />

            <div className="mt-2 h-1.5 w-12 rounded bg-white/[0.06]" />
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10">
            <Wallet
              size={14}
              className="text-emerald-300"
            />
          </div>
        </div>

        {/* Balance */}
        <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
          <div className="text-[8px] uppercase tracking-widest text-zinc-600">
            Total Balance
          </div>

          <div className="mt-2 h-4 w-28 rounded bg-white/15" />

          {/* Chart */}
          <div className="mt-3 flex h-7 items-end gap-1">
            {[
              30,
              45,
              35,
              65,
              50,
              75,
              60,
              90,
              70,
              100,
            ].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-emerald-400/20 transition-all duration-700 group-hover:bg-emerald-400/30"
                style={{
                  height: `${height * 0.28}px`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <MiniStat label="Income" />
          <MiniStat label="Expenses" />
          <MiniStat label="Savings" />
        </div>
      </div>

      <FloatingIcon>
        <BarChart3 size={18} />
      </FloatingIcon>
    </div>
  );
}

/* ============================================================ */
/* Confidential Tournament Platform */
/* ============================================================ */

function TournamentVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-orange-500/[0.10] via-zinc-950 to-violet-500/[0.08]">
      <Grid />

      <Glow className="bg-orange-500/15" />

      {/* Tournament bracket */}
      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-zinc-950/90 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-700 group-hover:scale-[1.03] sm:w-[84%] sm:p-4">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="h-2 w-24 rounded bg-white/15" />

            <div className="mt-2 h-1.5 w-16 rounded bg-white/[0.06]" />
          </div>

          <Trophy
            size={18}
            className="text-orange-300"
          />
        </div>

        {/* Bracket */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Round 1 */}
          <div className="space-y-3">
            <RoundLabel label="Round 1" />

            <Match />
            <Match />
            <Match />
          </div>

          {/* Semi */}
          <div className="flex flex-col justify-center gap-8">
            <RoundLabel label="Semi" />

            <Match active />
            <Match active />
          </div>

          {/* Final */}
          <div className="flex flex-col justify-center">
            <RoundLabel label="Final" />

            <div className="mt-4 rounded-lg border border-orange-400/20 bg-orange-400/[0.06] p-2.5">
              <div className="flex items-center gap-2">
                <Trophy
                  size={11}
                  className="text-orange-300"
                />

                <div className="h-1.5 w-12 rounded bg-orange-200/20" />
              </div>

              <div className="mt-2 h-1.5 w-16 rounded bg-white/10" />
            </div>
          </div>
        </div>

        {/* Confidential label */}
        <div className="mt-4 flex items-center justify-center">
          <span className="rounded-full border border-orange-400/10 bg-orange-400/[0.04] px-2.5 py-1 text-[7px] uppercase tracking-[0.2em] text-orange-200/40">
            Professional Work · Confidential
          </span>
        </div>
      </div>

      <FloatingIcon>
        <Trophy size={18} />
      </FloatingIcon>
    </div>
  );
}

/* ============================================================ */
/* Default */
/* ============================================================ */

function DefaultVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary/15 via-zinc-950 to-secondary/10">
      <Grid />

      <Glow className="bg-primary/20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
          <CheckCircle2
            size={32}
            className="text-primary-light"
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================ */
/* Shared Components */
/* ============================================================ */

function Grid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.5) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,0.5) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

function Glow({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-all duration-700 group-hover:h-72 group-hover:w-72 ${className}`}
    />
  );
}

function FloatingIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute bottom-[12%] right-[8%] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white/70 shadow-xl backdrop-blur-md transition-transform duration-700 group-hover:-translate-y-2 sm:bottom-[14%] sm:right-[10%] sm:h-11 sm:w-11">
      {children}
    </div>
  );
}

function ChatBubble({
  width,
}: {
  width: string;
}) {
  return (
    <div className="flex justify-start">
      <div className="rounded-xl rounded-bl-sm bg-white/[0.06] px-3 py-2">
        <div
          className={`h-1.5 w-${width} rounded bg-white/10`}
        />
      </div>
    </div>
  );
}

function MiniStat({
  label,
}: {
  label: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2">
      <div className="text-[7px] text-zinc-700">
        {label}
      </div>

      <div className="mt-1.5 h-1.5 w-10 rounded bg-white/10" />
    </div>
  );
}

function RoundLabel({
  label,
}: {
  label: string;
}) {
  return (
    <div className="text-[7px] uppercase tracking-widest text-zinc-700">
      {label}
    </div>
  );
}

function Match({
  active = false,
}: {
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-2 ${active
          ? "border-orange-400/15 bg-orange-400/[0.04]"
          : "border-white/[0.05] bg-white/[0.02]"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="h-1.5 w-10 rounded bg-white/10" />

        <span className="text-[7px] text-zinc-700">
          2
        </span>
      </div>

      <div className="mt-1.5 flex items-center justify-between">
        <div className="h-1.5 w-7 rounded bg-white/[0.06]" />

        <span className="text-[7px] text-zinc-700">
          1
        </span>
      </div>
    </div>
  );
}