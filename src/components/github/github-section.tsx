import {
    GitFork,
    Star,
    Users,
  } from "lucide-react";
  
  import { FaGithub } from "react-icons/fa";
  
  import { Section } from "@/components/common/section";
  import { getGitHubData } from "@/lib/github/get-github-data";
  
  export async function GitHubSection() {
    const githubData = await loadGitHubData();
  
    if (!githubData) {
      return <GitHubFallback />;
    }
  
    return (
      <GitHubContent githubData={githubData} />
    );
  }
  
  /* ============================================================ */
  /* Data loading */
  /* ============================================================ */
  
  async function loadGitHubData() {
    try {
      return await getGitHubData();
    } catch (error) {
      console.error(
        "Failed to fetch GitHub data:",
        error,
      );
  
      return null;
    }
  }
  
  /* ============================================================ */
  /* GitHub Content */
  /* ============================================================ */
  
  type GitHubData = NonNullable<
    Awaited<ReturnType<typeof getGitHubData>>
  >;
  
  function GitHubContent({
    githubData,
  }: {
    githubData: GitHubData;
  }) {
    const {
      user,
      repositories,
      stats,
    } = githubData;
  
    const recentRepositories =
      repositories.slice(0, 4);
  
    return (
      <Section
        id="github"
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-12">
          {/* ================================================== */}
          {/* Heading */}
          {/* ================================================== */}
  
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
                A live snapshot of my public GitHub
                activity, repositories, and
                technologies.
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
  
          {/* ================================================== */}
          {/* Stats */}
          {/* ================================================== */}
  
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
  
          {/* ================================================== */}
          {/* Repositories */}
          {/* ================================================== */}
  
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Recently Updated
              </h3>
  
              <span className="text-xs text-zinc-600">
                @{user.login}
              </span>
            </div>
  
            {recentRepositories.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {recentRepositories.map(
                  (repository) => (
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
  
                        <span className="text-xs text-zinc-700 transition-colors group-hover:text-primary-light">
                          ↗
                        </span>
                      </div>
  
                      <h4 className="mt-5 truncate text-sm font-semibold text-white">
                        {repository.name}
                      </h4>
  
                      <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-zinc-600">
                        {repository.description ??
                          "No description available."}
                      </p>
  
                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-zinc-600">
                        {repository.language && (
                          <span>
                            {repository.language}
                          </span>
                        )}
  
                        <span>
                          ★{" "}
                          {repository.stargazers_count}
                        </span>
  
                        <span>
                          Forks{" "}
                          {repository.forks_count}
                        </span>
                      </div>
                    </a>
                  ),
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-sm text-zinc-600">
                No public repositories are
                currently available.
              </div>
            )}
          </div>
  
          {/* ================================================== */}
          {/* Languages */}
          {/* ================================================== */}
  
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Technologies appearing across my
              repositories
            </p>
  
            {stats.topLanguages.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {stats.topLanguages.map(
                  (language) => (
                    <span
                      key={language}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/[0.14] hover:text-white"
                    >
                      {language}
                    </span>
                  ),
                )}
              </div>
            ) : (
              <p className="text-sm text-zinc-600">
                Language information is
                currently unavailable.
              </p>
            )}
          </div>
  
          {/* ================================================== */}
          {/* Bottom Profile CTA */}
          {/* ================================================== */}
  
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <FaGithub
                    size={20}
                    className="text-zinc-400"
                  />
                </div>
  
                <div>
                  <p className="text-sm font-semibold text-white">
                    Explore more of my work
                  </p>
  
                  <p className="mt-1 text-xs text-zinc-600">
                    View my repositories and open-source
                    experiments on GitHub.
                  </p>
                </div>
              </div>
  
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-xs font-medium text-white transition-colors hover:text-primary-light"
              >
                github.com/{user.login}
  
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    );
  }
  
  /* ============================================================ */
  /* Fallback */
  /* ============================================================ */
  
  function GitHubFallback() {
    return (
      <Section
        id="github"
        className="overflow-hidden"
      >
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 text-center sm:p-12">
          <FaGithub
            size={30}
            className="mx-auto text-zinc-600"
          />
  
          <h2 className="mt-5 text-xl font-semibold text-white">
            GitHub activity
          </h2>
  
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
            I&apos;m currently unable to load my
            GitHub activity. You can still explore my
            public repositories directly.
          </p>
  
          <a
            href="https://github.com/MEIBHAI1509"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            <FaGithub size={16} />
  
            Open GitHub
  
            <span>↗</span>
          </a>
        </div>
      </Section>
    );
  }
  
  /* ============================================================ */
  /* Stat Card */
  /* ============================================================ */
  
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
      <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.04]">
        <div className="text-zinc-600 transition-colors group-hover:text-primary-light">
          {icon}
        </div>
  
        <p className="mt-5 text-2xl font-bold text-white">
          {value}
        </p>
  
        <p className="mt-1 text-xs text-zinc-600">
          {label}
        </p>
      </div>
    );
  }