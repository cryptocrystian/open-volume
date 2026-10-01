import { ArrowLink, Section } from "@/components/section";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">About Open Volume</p>
          <h1 className="display">Expand the space music can occupy.</h1>
          <p className="page-copy">Open Volume is a music and culture platform creating original performances, experiences and collaborations across physical, virtual and hybrid spaces.</p>
        </div>
      </section>
      <Section tone="light" eyebrow="What we believe">
        <div className="rule-list">
          <div className="rule-row"><p>Music first</p><p>Technology should expand the experience, not become the reason for it.</p></div>
          <div className="rule-row"><p>Artist-led</p><p>The artist brings the identity. Open Volume helps create the environment, collaborators and production around it.</p></div>
          <div className="rule-row"><p>Format follows purpose</p><p>A cinematic session, live show, hybrid event, destination experience or virtual environment should exist because the idea needs it.</p></div>
          <div className="rule-row"><p>Culture matters</p><p>Open Volume is not just a production engine. Taste, discovery, editorial voice and cultural relevance are part of the platform.</p></div>
          <div className="rule-row"><p>Ambition needs discipline</p><p>The work should feel bold without becoming spectacle for spectacle’s sake.</p></div>
        </div>
      </Section>
      <Section eyebrow="What Open Volume is becoming">
        <h2 className="display display--small">A recognizable cultural property with its own audience, programming, formats, destinations, editorial voice and partner ecosystem.</h2>
        <p className="body-large">Not a virtual-world company. Not an event promoter alone. Not a production-services vendor. Not a technology demo.</p>
        <p className="body-large"><strong>A platform for creating and curating new ways for music to be experienced.</strong></p>
        <ArrowLink href="/experiences">Explore Experiences</ArrowLink>
      </Section>
    </>
  );
}
