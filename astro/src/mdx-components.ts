// Custom components for MDX files
// This file provides a centralized location for MDX component overrides
// that can be imported and used across different pages

import Img from "./components/img.mdx.astro";
import Message from "./components/message.mdx.astro";

/**
 * MDX Components Mapping
 *
 * This object maps standard HTML elements to custom Astro components.
 * Pass this to the `<Content />` component's `components` prop to override
 * the default rendering of HTML elements in your MDX files.
 *
 * @example
 * ```astro
 * ---
 * import { components } from "@/mdx-components";
 * const { Content } = await entry.render();
 * ---
 * <Content components={components} />
 * ```
 */
export const components = {
  // Override the default <img> tag with our custom Img component
  // This provides automatic optimization, lazy loading, and consistent styling
  img: Img,

  // Message component for callouts/admonitions
  // Usage in MDX: :::info ... :::
  // Or component syntax: <message type="info">Content here</message>
  message: Message,

  // You can add more custom component overrides here as needed:
  //
  // Example: Custom heading components with auto-generated anchors
  // h1: CustomH1,
  // h2: CustomH2,
  // h3: CustomH3,
  //
  // Example: Custom link component with external link indicators
  // a: CustomLink,
  //
  // Example: Custom code block component with syntax highlighting
  // pre: CustomPre,
  // code: CustomCode,
  //
  // Example: Custom blockquote component with special styling
  // blockquote: CustomBlockquote,
  //
  // Example: Custom table component with responsive behavior
  // table: CustomTable,
};
