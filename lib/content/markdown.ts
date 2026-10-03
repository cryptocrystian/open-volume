import type { Story, StoryCategory } from "@/lib/content-models";

type Frontmatter = Record<string, string>;

function stripQuotes(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(source: string): { data: Frontmatter; body: string } {
  if (!source.startsWith("---\n")) {
    return { data: {}, body: source };
  }

  const closing = source.indexOf("\n---\n", 4);
  if (closing === -1) {
    return { data: {}, body: source };
  }

  const raw = source.slice(4, closing);
  const body = source.slice(closing + 5).trim();
  const data: Frontmatter = {};

  for (const line of raw.split("\n")) {
    const divider = line.indexOf(":");
    if (divider === -1) continue;
    const key = line.slice(0, divider).trim();
    const value = stripQuotes(line.slice(divider + 1));
    if (key) data[key] = value;
  }

  return { data, body };
}

export function parseStoryMarkdown(source: string, slug: string): Story {
  const { data, body } = parseFrontmatter(source);
  const title = data.title || slug.replaceAll("-", " ");
  const category = (data.category || "perspective") as StoryCategory;
  const status = data.status || "draft";

  return {
    slug,
    title,
    category,
    excerpt: data.excerpt || "",
    body: body.replace(/^#\s+.+?\n+/, "").trim(),
    isDraft: status !== "approved",
  };
}
