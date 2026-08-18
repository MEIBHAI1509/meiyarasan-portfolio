import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

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
      <article className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <header>
          <p className="text-xs uppercase tracking-[0.25em] text-primary-light">
            {new Date(data.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {data.description}
          </p>
        </header>

        <div className="prose prose-invert mt-12 max-w-none">
          <div className="whitespace-pre-wrap text-zinc-300">
            {content}
          </div>
        </div>
      </article>
    </main>
  );
}