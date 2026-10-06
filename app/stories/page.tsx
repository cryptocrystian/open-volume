import { ArrowLink } from "@/components/section";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "Stories" };

const categories = ["Artists", "Scenes + Places", "Production", "Perspective", "Discovery"];

export default function StoriesPage() {
  return (
    <div className="v3-page">
      <section className="v3-stories-cover">
        <div className="v3-stories-cover-media"><img className="v3-image" src={launchMedia.club} alt="DJ performing within an intimate electronic music crowd" fetchPriority="high" /></div>
        <div className="v3-stories-cover-copy">
          <p className="v3-kicker">Open Volume / Stories</p>
          <h1>The culture around electronic music is part of the platform.</h1>
          <p className="v3-copy">Open Volume Stories follows the artists, scenes, places, production craft and ideas shaping how electronic music is made, performed and experienced.</p>
        </div>
      </section>

      <section className="v3-story-categories">
        <div className="v3-wrap">
          <p className="v3-kicker" style={{ marginBottom: "2.5rem" }}>Editorial Territory</p>
          <div className="v3-story-cat-grid">
            {categories.map((category, index) => (
              <div className="v3-story-cat" key={category}>
                <span>0{index + 1}</span>
                <h3>{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-story-feature">
        <div className="v3-wrap">
          <div className="v3-story-feature-card">
            <figure><img className="v3-image" src={launchMedia.crowd} alt="Electronic music audience inside a contemporary club" loading="eager" /></figure>
            <div>
              <p className="v3-kicker">Why Editorial Matters</p>
              <h2>A performance can create a moment. Culture gives people a reason to come back.</h2>
              <div className="v3-copy">
                <p>Open Volume is not trying to become a high-volume music publication. Stories exist to deepen the relationship between productions: to introduce artists, reveal process, document scenes and make the world around the performance more legible.</p>
                <p>The result should feel curated, useful and worth following even when there is no major release that week.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-presents">
        <div className="v3-presents-media" aria-hidden="true"><img className="v3-image" src={launchMedia.artist} alt="" loading="eager" /></div>
        <div className="v3-wrap v3-presents-content">
          <div className="v3-presents-grid">
            <div>
              <p className="v3-kicker">First Editorial Concepts</p>
              <h2 className="v3-display v3-presents-title">Taste over volume.</h2>
            </div>
            <div>
              <p className="v3-copy">The first editorial concepts are being developed alongside the initial Open Volume productions so the performance and the cultural story can reinforce one another from the beginning.</p>
              <p style={{ marginTop: "2rem" }}><ArrowLink href="/stories/what-makes-a-music-experience-worth-remembering">Read the First Story</ArrowLink></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
