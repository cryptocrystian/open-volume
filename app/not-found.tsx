import Link from "next/link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section tone="dark" eyebrow="404">
      <h1 className="display display--small">That page is not here.</h1>
      <p className="body-large">
        Open Volume is still taking shape. The page may have moved, or it may not be public yet.
      </p>
      <p style={{ marginTop: "2rem" }}>
        <Link className="arrow-link" href="/">Return Home <span aria-hidden="true">↗</span></Link>
      </p>
    </Section>
  );
}
