import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";

const SITE_URL = "https://meiyarasan.in";

const BLOG_DIRECTORY = path.join(
    process.cwd(),
    "src/content/blog",
);

export default function sitemap(): MetadataRoute.Sitemap {
    const routes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    if (!fs.existsSync(BLOG_DIRECTORY)) {
        return routes;
    }

    const blogRoutes = fs
        .readdirSync(BLOG_DIRECTORY)
        .filter((file) => file.endsWith(".mdx"))
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
                url: `${SITE_URL}/blog/${slug}`,
                lastModified: data.date
                    ? new Date(data.date)
                    : new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            };
        });

    return [...routes, ...blogRoutes];
}