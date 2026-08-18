"use client";

import { useRef, useState } from "react";
import { Terminal } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";

import {
  terminalCommands,
  type TerminalResult,
} from "./terminal-commands";

type TerminalLine = {
  command?: string;
  results?: TerminalResult[];
};

export function DeveloperTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>(
    [],
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (value: string) => {
    const command = value.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const commandHandler =
      terminalCommands[command];

    const results = commandHandler
      ? commandHandler()
      : [
        {
          type: "output" as const,
          content: `Command not found: ${command}. Type "help" to see available commands.`,
        },
      ];

    setHistory((current) => [
      ...current,
      {
        command,
        results,
      },
    ]);

    setInput("");
  };

  return (
    <Section id="terminal" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
              Developer Mode
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              Want to know how I{" "}
              <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                think?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
              There&apos;s a little terminal hidden in the
              portfolio. Try a command and explore.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <div className="ml-auto flex items-center gap-2 text-[10px] text-zinc-700">
                <Terminal size={12} />
                meiyarasan ~
              </div>
            </div>

            {/* Terminal body */}
            <div className="h-[360px] overflow-auto p-4 font-mono text-[11px] leading-6 sm:h-[380px] sm:p-5 sm:text-xs">
              <div className="text-zinc-600">
                Welcome to Meiyarasan&apos;s portfolio terminal.
              </div>

              <div className="text-zinc-700">
                Type &quot;help&quot; to get started.
              </div>

              {history.map((line, index) => (
                <div key={index} className="mt-4">
                  <div>
                    <span className="text-primary-light">
                      meiyarasan
                    </span>

                    <span className="text-zinc-700">
                      @portfolio
                    </span>

                    <span className="text-zinc-600">
                      :~$
                    </span>{" "}

                    <span className="text-zinc-300">
                      {line.command}
                    </span>
                  </div>

                  <div className="mt-1 space-y-1">
                    {line.results?.map(
                      (result, resultIndex) =>
                        result.type === "link" ? (
                          <a
                            key={resultIndex}
                            href={result.href}
                            target={
                              result.href?.startsWith(
                                "http",
                              )
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            className="block text-secondary-light hover:underline"
                          >
                            {result.content}
                          </a>
                        ) : (
                          <p
                            key={resultIndex}
                            className="text-zinc-500"
                          >
                            {result.content}
                          </p>
                        ),
                    )}
                  </div>
                </div>
              ))}

              {/* Input */}
              <form
                className="mt-4 flex min-w-max items-center"
                onSubmit={(event) => {
                  event.preventDefault();
                  executeCommand(input);
                }}
              >
                <span className="shrink-0 text-primary-light">
                  meiyarasan
                </span>

                <span className="shrink-0 text-zinc-700">
                  @portfolio:~$
                </span>

                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  className="ml-2 min-w-0 flex-1 bg-transparent text-zinc-300 outline-none"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal command"
                />

                <span className="ml-1 h-4 w-[5px] animate-pulse bg-primary-light/70" />
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}