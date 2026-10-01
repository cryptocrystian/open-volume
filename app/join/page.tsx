import { JoinForm } from "@/components/join-form";
import { Section } from "@/components/section";

export const metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <Section tone="light" eyebrow="Join Open Volume">
      <h1 className="display">Be there before it happens.</h1>
      <p className="page-copy">Open Volume is building new performances, artist collaborations, places, stories and experiences.</p>
      <p className="body-large">Join for early announcements, premieres, artist features, editorial and the moments worth knowing about before everyone else does.</p>
      <JoinForm source="join-page" />
      <div className="page-block">
        <p className="body-large"><strong>No filler. No constant noise.<br />Just the things worth sharing.</strong></p>
      </div>
    </Section>
  );
}
