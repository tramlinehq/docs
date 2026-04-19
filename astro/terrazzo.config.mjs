import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";

export default defineConfig({
  tokens: [
    "./src/tokens/spacing.json",
    "./src/tokens/palette.colors.json",
    "./src/tokens/semantic.colors.json",
    "./src/tokens/tokens.resolver.json",
  ],
  plugins: [
    css({
      filename: "tokens.css",
    }),
  ],
  outDir: "./src/tokens",
});
