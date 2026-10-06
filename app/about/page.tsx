import { ArrowLink } from "@/components/section";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "About" };

const principles = [
  ["01", "Music first", "Technology expands the creative possibilities. It does not replace the reason people care."],
  ["02", "Artist-led", "The artist brings the sound and identity. Open Volume builds the production around it."],
  ["03", "Production matters", "Creative direction, environment, performance, film, sound and distribution are treated as one connected system."],
  ["04", "Format follows the idea", "Recorded, live, physical, virtual or hybrid are creative choices—not categories the work must fit into."],
  ["05", "Culture compounds", "Performances create stories, discovery, audience, relationships and reasons to return between major productions."],
  ["06", "Restraint is part of ambition", "The work can be technically advanced and visually extraordinary without becoming spectacle for spectacle's sake."],
];

export default function AboutPage() {
  return (
    <div className="v3-page">
      <section className="v3-subhero">
        <div className="v3-subhero-media" aria-hidden="true"><img className="v3-image" src={launchMedia.artist} alt="" fetchPriority="high" /></div>
        <div className="v3-wrap v3-subhero-content">
          <p className="v3-kicker">About Open Volume</p>
          <h1 className="v3-display v3-subhero-title">A production platform built from electronic music outward.</h1>
          <p className="v3-copy v3-subhero-copy">Open Volume creates original electronic-music performances, films, live experiences and cultural programming across physical, virtual and hybrid spaces.</p>
        </div>
      </section>

      <section className="v3-about-manifesto">
        <div className="v3-wrap v3-about-grid">
          <div><p className="v3-kicker">Why Open Volume Exists</p></div>
          <div>
            <h2 className="v3-display v3-about-title">The music deserves a bigger canvas.</h2>
            <div className="v3-copy" style={{ maxWidth: "760px", marginTop: "2.4rem" }}>
              <p>Electronic music has always evolved alongside new spaces, new technologies and new ways of gathering. Open Volume exists to push that relationship forward without turning the technology itself into the attraction.</p>
              <p>The goal is simple: create productions worth watching, attending, sharing and remembering—and build a cultural platform around the artists, places and ideas that make them matter.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-about-principles">
        <div className="v3-wrap">
          <p className="v3-kicker" style={{ marginBottom: "2.6rem" }}>Operating Principles</p>
          {principles.map(([n, title, copy]) => (
            <div className="v3-principle" key={n}>
              <span className="v3-meta">{n}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="v3-about-close">
        <div className="v3-wrap v3-about-grid">
          <div><p className="v3-kicker">What Open Volume Is Becoming</p></div>
          <div>
            <h2 className="v3-display v3-about-title">A recognizable electronic-music and culture property that can move between screen, stage and real life.</h2>
            <div className="v3-copy" style={{ maxWidth: "780px", marginTop: "2.4rem" }}>
              <p>Original productions. Artists. Editorial. Destinations. Collaborations. Live programming. Over time, concerts, festivals and new forms of physical, virtual and hybrid participation.</p>
              <p>Open Volume is not a metaverse company, a generic production vendor or a conventional event promoter. It is a platform for creating, curating and extending ambitious electronic-music experiences.</p>
            </div>
            <p style={{ marginTop: "2.3rem" }}><ArrowLink href="/experiences">Explore Experiences</ArrowLink></p>
          </div>
        </div>
      </section>
    </div>
  );
}
