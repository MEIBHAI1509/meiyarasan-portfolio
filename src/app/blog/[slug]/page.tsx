import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

const BLOG_DIRECTORY = path.join(
  process.cwd(),
  "src/content/blog",
);

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const filePath = path.join(
    BLOG_DIRECTORY,
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(
    filePath,
    "utf8",
  );

  const { data, content } = matter(source);

  return (
    <main className="min-h-screen bg-zinc-950">
      <article className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        {/* Header */}
        <header className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-light">
              Writing
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <time
              dateTime={String(data.date)}
              className="text-xs text-zinc-600"
            >
              {new Date(
                data.date,
              ).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </time>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            {data.title}
          </h1>

          {data.description && (
            <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
              {data.description}
            </p>
          )}

          {Array.isArray(data.tags) &&
            data.tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {data.tags.map(
                  (tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            )}
        </header>

        {/* Divider */}
        <div className="mx-auto my-12 max-w-3xl border-t border-white/[0.06]" />

        {/* Article */}
        <div className="prose prose-invert mx-auto max-w-3xl">
          <MDXRemote source={content} />
        </div>

        {/* Bottom */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
          <Link
            href="/#blog"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            ← Back to writing
          </Link>
        </div>
      </article>
    </main>
  );
}