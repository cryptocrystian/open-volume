import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section tone="light" eyebrow="Contact">
      <h1 className="display display--small">Start with the idea.</h1>
      <p className="page-copy">
        Artists, venues, destinations, brands and creative collaborators can reach Open Volume directly.
      </p>
      <p className="body-large">
        <a className="arrow-link" href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}<span aria-hidden="true">↗</span>
        </a>
      </p>
    </Section>
  );
}
