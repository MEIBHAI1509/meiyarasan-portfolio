import {
    GitFork,
    Star,
    Users,
} from "lucide-react";

import {
    FaGithub,
} from "react-icons/fa";

import { Section } from "@/components/common/section";
import { getGitHubData } from "@/lib/github/get-github-data";

export async function GitHubSection() {
    let githubData: Awaited<
        ReturnType<typeof getGitHubData>
    > | null = null;

    try {
        githubData = await getGitHubData();
    } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
    }

    if (!githubData) {
        return <GitHubFallback />;
    }

    const { user, repositories, stats } = githubData;

    const recentRepositories = repositories.slice(0, 4);

    return (
        <Section id="github" className="overflow-hidden">
            <div className="flex flex-col gap-12">
                {/* Heading */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
                            Open Source
                        </p>

                        <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                            Built in public,
                            <br />
                            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                                one commit at a time.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                            A live snapshot of my public GitHub activity,
                            repositories, and technologies.
                        </p>
                    </div>

                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.08]"
                    >
                        <FaGithub size={17} />
                        Visit GitHub
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <StatCard
                        icon={<FaGithub size={18} />}
                        value={stats.repositories}
                        label="Repositories"
                    />

                    <StatCard
                        icon={<Star size={18} />}
                        value={stats.stars}
                        label="Stars"
                    />

                    <StatCard
                        icon={<Users size={18} />}
                        value={stats.followers}
                        label="Followers"
                    />

                    <StatCard
                        icon={<GitFork size={18} />}
                        value={stats.topLanguages.length}
                        label="Main Languages"
                    />
                </div>

                {/* Repository list */}
                <div>
                    <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white">
                            Recently Updated
                        </h3>

                        <span className="text-xs text-zinc-600">
                            @{user.login}
                        </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {recentRepositories.map((repository) => (
                            <a
                                key={repository.id}
                                href={repository.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.04]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <FaGithub
                                        size={18}
                                        className="text-zinc-600 transition-colors group-hover:text-white"
                                    />

                                    <span className="text-xs text-zinc-700">
                                        ↗
                                    </span>
                                </div>

                                <h4 className="mt-5 text-sm font-semibold text-white">
                                    {repository.name}
                                </h4>

                                <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-600">
                                    {repository.description ??
                                        "No description available."}
                                </p>

                                <div className="mt-5 flex items-center gap-4 text-[11px] text-zinc-600">
                                    {repository.language && (
                                        <span>{repository.language}</span>
                                    )}

                                    <span>
                                        ★ {repository.stargazers_count}
                                    </span>

                                    <span>
                                        Forks {repository.forks_count}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                        Technologies appearing across my repositories
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {stats.topLanguages.map((language) => (
                            <span
                                key={language}
                                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

function GitHubFallback() {
    return (
        <Section id="github">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 text-center">
                <FaGithub
                    size={28}
                    className="mx-auto text-zinc-600"
                />

                <h2 className="mt-4 text-xl font-semibold text-white">
                    GitHub activity
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                    GitHub data is temporarily unavailable.
                </p>

                <a
                    href="https://github.com/MEIBHAI1509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-medium text-primary-light hover:text-white"
                >
                    Open GitHub →
                </a>
            </div>
        </Section>
    );
}

function StatCard({
    icon,
    value,
    label,
}: {
    icon: React.ReactNode;
    value: number;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="text-zinc-600">{icon}</div>

            <p className="mt-5 text-2xl font-bold text-white">
                {value}
            </p>

            <p className="mt-1 text-xs text-zinc-600">
                {label}
            </p>
        </div>
    );
}