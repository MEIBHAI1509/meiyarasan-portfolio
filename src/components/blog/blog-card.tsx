"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { BlogPost } from "@/types/blog/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({
  post,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-600">
          {new Date(
            post.date,
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>

        <ArrowUpRight
          size={17}
          className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-light"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
        {post.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
        {post.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}