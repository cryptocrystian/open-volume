import { ArrowLink } from "@/components/section";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "Experiences" };

const formats = [
  ["01", "Flagship Performances", "Artist-led productions with a complete creative premise: performance, environment, visual direction, capture and release treated as one work."],
  ["02", "Sessions", "More intimate electronic-music formats for discovery, experimentation, collaboration and repeat programming."],
  ["03", "Live + Hybrid", "Concerts, venue collaborations and future festival-scale programming connecting physical audiences with digital and spatial layers when the idea earns it."],
  ["04", "Destination Productions", "Performances built around places with enough identity to become part of the creative concept, not simply scenery."],
  ["05", "Distributed Performance", "Multiple artists, vocalists or ensembles performing together across one or more locations when the creative concept benefits from it."],
  ["06", "Open Volume Worlds", "Reusable creative environments and performance properties that can evolve across artists and productions without turning the platform into a virtual-world proposition."],
];

export default function ExperiencesPage() {
  return (
    <div className="v3-page">
      <section className="v3-subhero">
        <div className="v3-subhero-media" aria-hidden="true"><img className="v3-image" src={launchMedia.destination} alt="" fetchPriority="high" /></div>
        <div className="v3-wrap v3-subhero-content">
          <p className="v3-kicker">Open Volume / Experiences</p>
          <h1 className="v3-display v3-subhero-title">Electronic music can occupy more than one kind of stage.</h1>
          <p className="v3-copy v3-subhero-copy">Open Volume develops original productions around artists, performance, place and cinematic storytelling. The format can be recorded, live, physical, virtual or hybrid—but the music remains the center of gravity.</p>
        </div>
      </section>

      <section className="v3-experience-index">
        <div className="v3-wrap">
          <p className="v3-kicker" style={{ marginBottom: "2.5rem" }}>Formats</p>
          {formats.map(([n, title, copy]) => (
            <div className="v3-format-row" key={n}>
              <span className="v3-meta">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="v3-experience-feature">
        <div className="v3-experience-feature-media"><img className="v3-image" src={launchMedia.crowd} alt="Electronic music crowd gathered around a live production" loading="eager" /></div>
        <div className="v3-experience-feature-copy">
          <p className="v3-kicker">The Standard</p>
          <h2>A different format should still feel unmistakably Open Volume.</h2>
          <div className="v3-copy">
            <p>Every production begins with a reason to exist. Artist fit, music, environment, production design, performance technology, film language and release strategy are developed around that premise.</p>
            <p>New technology is used when it creates a better performance or a new form of presence—not because novelty is the product.</p>
          </div>
        </div>
      </section>

      <section className="v3-presents">
        <div className="v3-presents-media" aria-hidden="true"><img className="v3-image" src={launchMedia.club} alt="" loading="eager" /></div>
        <div className="v3-wrap v3-presents-content">
          <div className="v3-presents-grid">
            <div>
              <p className="v3-kicker">Initial Slate</p>
              <h2 className="v3-display v3-presents-title">The first productions are in development.</h2>
            </div>
            <div>
              <p className="v3-copy">The initial slate is being built to prove the range of the platform: different artists, environments and production formats held to one creative standard. Specifics will be revealed when the work is ready.</p>
              <p style={{ marginTop: "2rem" }}><ArrowLink href="/join">Follow the First Releases</ArrowLink></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
