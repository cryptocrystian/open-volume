import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <Section tone="light" eyebrow="Privacy">
      <h1 className="display display--small">Privacy, without unnecessary complexity.</h1>
      <div className="legal-copy">
        <p>
          Open Volume may collect information you choose to provide, such as your email address when you join our updates or contact us.
        </p>
        <p>
          We use that information to operate the site, respond to inquiries, and send Open Volume announcements or editorial you asked to receive.
        </p>
        <p>
          We do not sell personal information to advertisers. Service providers may process information on our behalf where needed to operate the site, communications, analytics, or related infrastructure.
        </p>
        <p>
          You may unsubscribe from marketing communications at any time using the unsubscribe control included in those messages.
        </p>
        <p>
          This launch-page notice is intended as a practical baseline and should be reviewed against the final analytics, email, CRM, and hosting stack before public launch.
        </p>
        <p>
          Privacy questions: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
      </div>
    </Section>
  );
}
