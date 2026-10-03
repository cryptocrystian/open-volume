import type { ReactNode } from "react";
import styles from "./story-body.module.css";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.+?\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${index}-${part}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${index}-${part}`}>{part}</span>;
  });
}

export function StoryBody({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ").trim();
    if (text) {
      blocks.push(<p key={`p-${blocks.length}`}>{renderInline(text)}</p>);
    }
    paragraph = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line === "---") {
      flushParagraph();
      blocks.push(<hr key={`hr-${blocks.length}`} />);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push(
        <h2 key={`h2-${blocks.length}`}>{renderInline(line.slice(3))}</h2>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();

  return <div className={styles.body}>{blocks}</div>;
}
