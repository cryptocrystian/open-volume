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
          We use that information to operate the site, respond to inquiries, maintain our audience relationship, and send Open Volume announcements or editorial you asked to receive.
        </p>
        <p>
          Audience records are maintained in Attio and processed through our automation infrastructure. Communications providers may process your email address when needed to deliver messages you requested.
        </p>
        <p>
          We use Cloudflare Web Analytics for privacy-first site and performance measurement. It does not use advertising cookies or collect visitor personal data. We also record a small number of first-party interaction events, such as selected call-to-action clicks and successful signup events, without storing email addresses or persistent user identifiers in those analytics events.
        </p>
        <p>
          Because the current analytics setup does not use advertising or cross-site tracking cookies, Open Volume does not display a separate analytics-cookie consent banner at launch. If that changes, this notice and the consent experience should be updated before the new tracking is enabled.
        </p>
        <p>
          We do not sell personal information to advertisers. Service providers may process information on our behalf where needed to operate the site, communications, analytics, CRM, hosting, or related infrastructure.
        </p>
        <p>
          You may unsubscribe from marketing communications at any time using the unsubscribe control included in those messages. Unsubscribing does not require us to delete the underlying relationship record when retention is otherwise appropriate; instead, we maintain the suppression or unsubscribe state so future marketing sends are not made without new consent.
        </p>
        <p>
          Privacy questions: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
      </div>
    </Section>
  );
}
