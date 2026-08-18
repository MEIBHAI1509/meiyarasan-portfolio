import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { BlogPost } from "@/types/blog/types";

const BLOG_DIRECTORY = path.join(
  process.cwd(),
  "src/content/blog",
);

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");

      const filePath = path.join(
        BLOG_DIRECTORY,
        file,
      );

      const source = fs.readFileSync(
        filePath,
        "utf8",
      );

      const { data } = matter(source);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime(),
    );
}