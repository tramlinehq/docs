// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid", "math"],
    },
    rehypePlugins: [rehypeMermaid],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },
});
