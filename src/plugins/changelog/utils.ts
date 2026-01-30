/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from "fs-extra";
import path from "path";


type Author = { name: string; url: string; alias: string; imageURL: string };

type AuthorsMap = Record<string, Author>;

type ChangelogEntry = {
  title: string;
  content: string;
  authors: Author[];
};

function parseAuthor(committerLine: string): Author {
  const groups = committerLine.match(
    /- (?:(?<name>.*?) \()?\[@(?<alias>.*)\]\((?<url>.*?)\)\)?/,
  )!.groups as { name: string; alias: string; url: string };

  return {
    ...groups,
    name: groups.name ?? groups.alias,
    imageURL: `https://github.com/${groups.alias}.png`,
  };
}

function parseAuthors(content: string): Author[] {
  const committersContent = content.match(/## Committers: \d.*/s)?.[0];
  if (!committersContent) {
    return [];
  }
  const committersLines = committersContent.match(/- .*/g)!;

  const authors = committersLines
    .map(parseAuthor)
    .sort((a, b) => a.url.localeCompare(b.url));

  return authors;
}

export function createAuthorsMap(
  changelogEntries: ChangelogEntry[],
): AuthorsMap {
  const allAuthors = changelogEntries.flatMap((entry) => entry.authors);
  const authorsMap: AuthorsMap = {};
  allAuthors?.forEach((author) => {
    authorsMap[author.alias] = author;
  });
  return authorsMap;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Format a YYYY-MM-DD date string without using Date objects,
 * avoiding timezone-dependent shifts that cause file re-generation.
 */
function formatDateString(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${MONTHS[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
}

function toChangelogEntry(sectionContent: string): ChangelogEntry | null {
  const title = sectionContent
    .match(/\n## .*/)?.[0]
    ?.trim()
    .replace("## ", "");
  if (!title) {
    return null;
  }
  const content = sectionContent
    .replace(/\n## .*/, "")
    .trim()
    .replace("running_woman", "running");

  const authors = parseAuthors(content);

  const date = title.match(/ \((?<date>.*)\)/)?.groups?.date;
  if (!date) {
    return null;
  }
  const formattedDate = formatDateString(date);

  return {
    authors,
    title: formattedDate,
    content: `---
mdx:
 format: md
date: ${date}${
      authors.length > 0
        ? `
authors:
${authors.map((author) => `  - '${author.alias}'`).join("\n")}`
        : ""
    }
---

# ${formattedDate}

${content.replace(/#### Committers: \d[\s\S]*?<endcommiters\/>/g, "")}

<!-- truncate -->

`,
  };
}

export function toChangelogEntries(filesContent: string[]): ChangelogEntry[] {
  return filesContent
    .flatMap((content) => content.split(/(?=\n## )/))
    .map(toChangelogEntry)
    .filter((s): s is ChangelogEntry => s !== null);
}

export async function createBlogFiles(
  generateDir: string,
  changelogEntries: ChangelogEntry[],
): Promise<void> {
  await Promise.all(
    changelogEntries.map((changelogEntry) =>
      fs.outputFile(
        path.join(
          generateDir,
          `${changelogEntry.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]/g, "")}.md`,
        ),
        changelogEntry.content,
      ),
    ),
  );

  await fs.outputFile(
    path.join(generateDir, "authors.json"),
    JSON.stringify(createAuthorsMap(changelogEntries), null, 2),
  );
}
