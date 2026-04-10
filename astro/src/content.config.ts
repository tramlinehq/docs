import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";
import { glob, file } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    sidebar_position: z.number().optional(),
  }),
});

const integrations = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/integrations",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    sidebar_position: z.number().optional(),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/changelog" }),
  schema: z.object({
    date: z.date(),
    authors: z.array(reference("author")),
  }),
});

const author = defineCollection({
  loader: file("src/content/authors.json"),
  schema: z.object({
    name: z.string(),
    alias: z.string(),
    url: z.string().url(),
    avatar: z.string().url(),
  }),
});

export const collections = {
  docs,
  integrations,
  changelog,
  author,
};
