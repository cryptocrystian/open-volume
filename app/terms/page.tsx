import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <Section tone="light" eyebrow="Terms">
      <h1 className="display display--small">Website terms.</h1>
      <div className="legal-copy">
        <p>
          This site is provided for informational and editorial purposes related to Open Volume, its programming, collaborations, and activities.
        </p>
        <p>
          Unless otherwise stated, Open Volume owns or controls the site design, brand assets, original text, and other original materials published here. Third-party names, works, trademarks, and media remain the property of their respective owners.
        </p>
        <p>
          Nothing on this site creates a partnership, sponsorship, artist engagement, venue commitment, event obligation, or commercial agreement unless separately confirmed in writing.
        </p>
        <p>
          Programming, dates, collaborators, locations, and availability may change as projects develop.
        </p>
        <p>
          Questions about site use may be sent to <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
      </div>
    </Section>
  );
}
