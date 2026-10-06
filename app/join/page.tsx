import { JoinForm } from "@/components/join-form";
import { Section } from "@/components/section";

export const metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <Section tone="light" eyebrow="Follow Open Volume">
      <h1 className="display">Come with us from the beginning.</h1>
      <p className="page-copy">
        Open Volume is building a new electronic-music and culture platform around original performances, artists, places, stories and live experiences.
      </p>
      <p className="body-large">
        Join for first looks at new productions, premieres, artist stories, destination reveals, live announcements and the work taking shape behind the scenes.
      </p>
      <JoinForm source="join-page" />
      <div className="page-block">
        <p className="body-large"><strong>No constant noise.<br />Just the things worth following.</strong></p>
      </div>
    </Section>
  );
}
