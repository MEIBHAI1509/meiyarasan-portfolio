"use client";

import { useEffect, useMemo, useState } from "react";
import {
    ArrowUpRight,
    Command,
    Mail,
    Search,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { scrollToSection } from "@/lib/navigation";

type CommandItem = {
    id: string;
    label: string;
    description: string;
    keywords: string[];
    action: () => void;
    icon: React.ReactNode;
};

const navigationItems = [
    {
        id: "about",
        label: "About",
        description: "Learn more about me",
    },
    {
        id: "skills",
        label: "Skills",
        description: "Explore my technology stack",
    },
    {
        id: "projects",
        label: "Projects",
        description: "See what I've built",
    },
    {
        id: "experience",
        label: "Journey",
        description: "Explore my developer journey",
    },
    {
        id: "github",
        label: "GitHub",
        description: "View my open-source work",
    },
    {
        id: "blog",
        label: "Blog",
        description: "Read my latest articles",
    },
    {
        id: "contact",
        label: "Contact",
        description: "Get in touch",
    },
];

export function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isShortcut =
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "k";

            if (isShortcut) {
                event.preventDefault();

                setOpen((current) => {
                    if (!current) {
                        setQuery("");
                    }

                    return !current;
                });
            }

            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (!open) {
            return;
        }

        const frame = requestAnimationFrame(() => {
            document
                .getElementById("command-palette-input")
                ?.focus();
        });

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [open]);

    const commands: CommandItem[] = useMemo(
        () => [
            ...navigationItems.map((item) => ({
                ...item,
                keywords: [
                    item.label,
                    item.description,
                ],
                icon: <ArrowUpRight size={16} />,
                action: () => scrollToSection(item.id),
            })),

            {
                id: "github-external",
                label: "Open GitHub",
                description: "Visit my GitHub profile",
                keywords: ["github", "code", "repositories"],
                icon: <FaGithub size={16} />,
                action: () => {
                    window.open(
                        "https://github.com/MEIBHAI1509",
                        "_blank",
                        "noopener,noreferrer",
                    );
                    setOpen(false);
                },
            },

            {
                id: "email",
                label: "Send me an email",
                description: "Start a conversation",
                keywords: ["email", "contact", "mail"],
                icon: <Mail size={16} />,
                action: () => {
                    window.location.href =
                        "mailto:meiyarasan1509@gmail.com?subject=Let's%20work%20together";

                    setOpen(false);
                },
            },
        ],
        [],
    );

    const filteredCommands = commands.filter(
        (command) => {
            const searchableText = [
                command.label,
                command.description,
                ...command.keywords,
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(
                query.toLowerCase(),
            );
        },
    );

    if (!open) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    setOpen(false);
                }
            }}
        >
            <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
                {/* Search */}
                <div className="flex items-center gap-3 border-b border-white/[0.08] px-4">
                    <Search
                        size={18}
                        className="shrink-0 text-zinc-600"
                    />

                    <input
                        id="command-palette-input"
                        value={query}
                        onChange={(event) =>
                            setQuery(event.target.value)
                        }
                        placeholder="Search anything..."
                        className="h-14 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                    />

                    <kbd className="hidden rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-zinc-600 sm:block">
                        ESC
                    </kbd>
                </div>

                {/* Results */}
                <div className="max-h-[55vh] overflow-y-auto p-2">
                    {filteredCommands.length > 0 ? (
                        filteredCommands.map((command) => (
                            <button
                                key={command.id}
                                type="button"
                                onClick={command.action}
                                className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/[0.06]"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-600 transition-colors group-hover:border-primary/30 group-hover:text-primary-light">
                                    {command.icon}
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm font-medium text-zinc-200">
                                        {command.label}
                                    </span>

                                    <span className="mt-0.5 block truncate text-xs text-zinc-600">
                                        {command.description}
                                    </span>
                                </span>

                                <ArrowUpRight
                                    size={14}
                                    className="text-zinc-700 opacity-0 transition-opacity group-hover:opacity-100"
                                />
                            </button>
                        ))
                    ) : (
                        <div className="px-4 py-10 text-center">
                            <p className="text-sm text-zinc-500">
                                No commands found.
                            </p>

                            <p className="mt-1 text-xs text-zinc-700">
                                Try another search.
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-700">
                        <Command size={12} />
                        <span>Navigate your portfolio</span>
                    </div>

                    <span className="text-[10px] text-zinc-700">
                        {filteredCommands.length} results
                    </span>
                </div>
            </div>
        </div>
    );
}