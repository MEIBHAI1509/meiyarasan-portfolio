import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";
import { getBlogPosts } from "@/lib/blog/blog";

import { BlogCard } from "./blog-card";

export function BlogList() {
  const posts = getBlogPosts();

  return (
    <Section id="blog" className="overflow-hidden">
      <div className="max-w-3xl">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
            Writing
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            Things I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              learning.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            Notes about development, projects, things I&apos;ve
            learned, and problems I&apos;ve solved.
          </p>
        </Reveal>
      </div>

      {posts.length > 0 ? (
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <Reveal
              key={post.slug}
              delay={index * 0.1}
            >
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-10 text-center">
          <p className="text-sm text-zinc-500">
            New articles are coming soon.
          </p>
        </div>
      )}
    </Section>
  );
}