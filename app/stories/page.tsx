import { ArrowLink, Section } from "@/components/section";

export const metadata = { title: "Stories" };

export default function StoriesPage() {
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">Open Volume / Stories</p>
          <h1 className="display">Follow the ideas around the music.</h1>
          <p className="page-copy">Open Volume Stories explores the people, places, processes and perspectives shaping how music is experienced. Not everything meaningful happens on stage.</p>
        </div>
      </section>
      <Section tone="light" eyebrow="Editorial">
        <div className="rule-list">
          <div className="rule-row"><p>Artists</p><p>Conversations with artists, producers, vocalists and collaborators about the work, the choices behind it and where they want to take it next.</p></div>
          <div className="rule-row"><p>Places</p><p>Venues, cities, destinations and environments that change how music feels.</p></div>
          <div className="rule-row"><p>Process</p><p>Creative direction, production craft, visual systems, performance design and the decisions that turn an idea into an experience.</p></div>
          <div className="rule-row"><p>Perspective</p><p>Ideas about music, culture, technology and the changing relationship between artists, audiences and place.</p></div>
          <div className="rule-row"><p>Discovery</p><p>Artists, sounds, scenes and creative work worth paying attention to.</p></div>
        </div>
      </Section>
      <Section eyebrow="Launch State">
        <h2 className="display display--medium">The first stories are on the way.</h2>
        <p className="body-large">We would rather publish something worth reading than fill a grid for the sake of looking busy.</p>
        <ArrowLink href="/join">Stay Close</ArrowLink>
      </Section>
    </>
  );
}
