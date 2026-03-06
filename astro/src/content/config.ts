import { z, defineCollection, reference } from "astro:content";
import { file } from "astro/loaders";

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    sidebar_position: z.number().optional(),
  }),
});

const integrations = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    sidebar_position: z.number().optional(),
  }),
});

const changelog = defineCollection({
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
