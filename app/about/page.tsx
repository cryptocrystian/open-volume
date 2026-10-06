import { ArrowLink, Section } from "@/components/section";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">About Open Volume</p>
          <h1 className="display">A production platform built from electronic music outward.</h1>
          <p className="page-copy">
            Open Volume creates original electronic-music performances, films, live experiences and cultural programming across physical, virtual and hybrid spaces.
          </p>
        </div>
      </section>

      <Section tone="light" eyebrow="Why Open Volume Exists">
        <h2 className="display display--medium">The music deserves a bigger canvas.</h2>
        <p className="body-large">
          Electronic music has always evolved alongside new spaces, new technologies and new ways of gathering. Open Volume exists to push that relationship forward without turning the technology itself into the attraction.
        </p>
        <p className="body-large">
          The goal is simple: create productions worth watching, attending, sharing and remembering—and build a cultural platform around the artists, places and ideas that make them matter.
        </p>
      </Section>

      <Section eyebrow="Operating Principles">
        <div className="rule-list">
          <div className="rule-row"><p>Music first</p><p>Technology expands the creative possibilities. It does not replace the reason people care.</p></div>
          <div className="rule-row"><p>Artist-led</p><p>The artist brings the sound and identity. Open Volume builds the production around it.</p></div>
          <div className="rule-row"><p>Production matters</p><p>Creative direction, environment, performance, film, sound and distribution are treated as one connected system.</p></div>
          <div className="rule-row"><p>Format follows the idea</p><p>Recorded, live, physical, virtual or hybrid are creative choices—not categories the work must fit into.</p></div>
          <div className="rule-row"><p>Culture compounds</p><p>Performances create stories, discovery, audience, relationships and reasons to return between major productions.</p></div>
          <div className="rule-row"><p>Restraint is part of ambition</p><p>The work can be technically advanced and visually extraordinary without becoming spectacle for spectacle's sake.</p></div>
        </div>
      </Section>

      <Section tone="light" eyebrow="What Open Volume Is Becoming">
        <h2 className="display display--small">A recognizable electronic-music and culture property that can move between screen, stage and real life.</h2>
        <p className="body-large">
          Original productions. Artists. Editorial. Destinations. Collaborations. Live programming. Over time, concerts, festivals and new forms of physical, virtual and hybrid participation.
        </p>
        <p className="body-large">
          Open Volume is not a metaverse company, a generic production vendor or a conventional event promoter. It is a platform for creating, curating and extending ambitious electronic-music experiences.
        </p>
        <ArrowLink href="/experiences">Explore Experiences</ArrowLink>
      </Section>
    </>
  );
}
