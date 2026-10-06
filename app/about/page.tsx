import { ArrowLink } from "@/components/section";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="v3-page">
      <section className="v3-about-hero">
        <img src="/media/ov-v3-hero.webp" alt="Open-air electronic music production at sunset" fetchPriority="high" />
        <div className="v3-about-inner">
          <p className="v3-kicker">About Open Volume</p>
          <h1>A production platform built from electronic music outward.</h1>
        </div>
      </section>

      <section className="v3-light">
        <div className="v3-wrap">
          <div className="v3-two">
            <div><p className="v3-kicker">Why Open Volume Exists</p><h2 className="v3-big">The music deserves a bigger canvas.</h2></div>
            <div className="v3-aside v3-copy"><p>Electronic music has always evolved alongside new spaces, new technologies and new ways of gathering. Open Volume exists to push that relationship forward without turning the technology itself into the attraction.</p><p>The goal is simple: create productions worth watching, attending, sharing and remembering—and build a cultural platform around the artists, places and ideas that make them matter.</p></div>
          </div>
        </div>
      </section>

      <section className="v3-photo-strip"><img src="/media/ov-v3-night-crowd.webp" alt="Electronic music crowd gathered inside an architectural night production" /></section>

      <section className="v3-light">
        <div className="v3-wrap">
          <p className="v3-kicker">Operating Principles</p>
          <div className="v3-principles">
            <div className="v3-principle"><span>01</span><h3>Music first</h3><p>Technology expands the creative possibilities. It does not replace the reason people care.</p></div>
            <div className="v3-principle"><span>02</span><h3>Artist-led</h3><p>The artist brings the sound and identity. Open Volume builds the production around it.</p></div>
            <div className="v3-principle"><span>03</span><h3>Production matters</h3><p>Creative direction, environment, performance, film, sound and distribution are treated as one connected system.</p></div>
            <div className="v3-principle"><span>04</span><h3>Format follows the idea</h3><p>Recorded, live, physical, virtual or hybrid are creative choices—not categories the work must fit into.</p></div>
            <div className="v3-principle"><span>05</span><h3>Culture compounds</h3><p>Performances create stories, discovery, audience, relationships and reasons to return between major productions.</p></div>
            <div className="v3-principle"><span>06</span><h3>Restraint is part of ambition</h3><p>The work can be technically advanced and visually extraordinary without becoming spectacle for spectacle's sake.</p></div>
          </div>
        </div>
      </section>

      <section className="v3-mineral">
        <div className="v3-wrap">
          <p className="v3-kicker">What Open Volume Is Becoming</p>
          <h2 className="v3-quote">A recognizable culture property that can move between screen, stage and real life.</h2>
          <div className="v3-two" style={{marginTop:"4rem"}}>
            <p className="v3-copy">Original productions. Artists. Editorial. Destinations. Collaborations. Live programming. Over time, concerts, festivals and new forms of physical, virtual and hybrid participation.</p>
            <div className="v3-aside v3-copy"><p>Open Volume is not a metaverse company, a generic production vendor or a conventional event promoter. It is a platform for creating, curating and extending ambitious electronic-music experiences.</p><ArrowLink href="/experiences">Explore Experiences</ArrowLink></div>
          </div>
        </div>
      </section>
    </div>
  );
}
