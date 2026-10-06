import { ArrowLink } from "@/components/section";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "Partners + Collaborators" };

const partnerTypes = [
  ["01", "Brands + Sponsors", "Open Volume is not built around conventional sponsorship inventory. Brand participation is developed around genuine creative and cultural alignment—with a limited number of partners whose role can extend beyond exposure."],
  ["02", "Artists", "Open Volume is built around artists with a point of view. We look for music, identity and ambition that can support a production worth making—and give the artist a larger canvas without forcing the work into a fixed house format."],
  ["03", "Creative Collaborators", "Directors, designers, filmmakers, architects, visual artists, choreographers, musicians, producers and technologists enter the work when their contribution can materially change the outcome."],
];

export default function PartnersPage() {
  return (
    <div className="v3-page">
      <section className="v3-subhero">
        <div className="v3-subhero-media" aria-hidden="true"><img className="v3-image" src={launchMedia.crowd} alt="" fetchPriority="high" /></div>
        <div className="v3-wrap v3-subhero-content">
          <p className="v3-kicker">Partners + Collaborators</p>
          <h1 className="v3-display v3-subhero-title">Not every partnership belongs inside Open Volume.</h1>
          <p className="v3-copy v3-subhero-copy">Open Volume works selectively with artists, venues, destinations, brands and creative collaborators that can add something real to the production, the audience or the culture around it. <strong>The standard is not visibility. It is fit.</strong></p>
        </div>
      </section>

      <section className="v3-partner-destination">
        <div className="v3-partner-destination-media"><img className="v3-image" src={launchMedia.destination} alt="Electronic music production staged at a coastal destination" loading="eager" /></div>
        <div className="v3-partner-destination-copy">
          <p className="v3-kicker">Venues + Destinations</p>
          <h2>Some places deserve more than a booking.</h2>
          <div className="v3-copy">
            <p>Open Volume collaborates with distinctive venues and destinations to create electronic-music productions in which the setting becomes part of the creative idea.</p>
            <p>Artist programming, creative direction, production design, film, distribution and storytelling can come together around a place in a way that creates cultural value long after the performance ends.</p>
          </div>
          <p className="v3-meta" style={{ marginTop: "2rem" }}>Programming / Creative Direction / Production / Film + Media / Distribution</p>
          <p style={{ marginTop: "2rem" }}><ArrowLink href="mailto:hello@openvolume.world">Bring Us a Place</ArrowLink></p>
        </div>
      </section>

      <section className="v3-partner-types">
        <div className="v3-wrap">
          <p className="v3-kicker" style={{ marginBottom: "2.8rem" }}>Who We Work With</p>
          {partnerTypes.map(([n, title, copy]) => (
            <div className="v3-partner-type" key={n}>
              <span className="v3-meta">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="v3-presents">
        <div className="v3-presents-media" aria-hidden="true"><img className="v3-image" src={launchMedia.club} alt="" loading="eager" /></div>
        <div className="v3-wrap v3-presents-content">
          <div className="v3-presents-grid">
            <div>
              <p className="v3-kicker">Brands + Sponsors</p>
              <h2 className="v3-display v3-presents-title">Presence has to be earned.</h2>
            </div>
            <div>
              <p className="v3-copy">Partnerships may connect to original productions, artist collaborations, physical experiences, films, editorial properties, commissioned work and longer-term platform relationships. When a brand belongs in the idea, its presence should make the work stronger.</p>
              <p className="v3-meta" style={{ marginTop: "1.7rem" }}>Platform partnerships / Production partnerships / Creative commissions / Category exclusivity where justified</p>
              <p style={{ marginTop: "2rem" }}><ArrowLink href="mailto:hello@openvolume.world">Explore a Partnership</ArrowLink></p>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-about-close">
        <div className="v3-wrap v3-about-grid">
          <div><p className="v3-kicker">Fit Matters</p></div>
          <div>
            <h2 className="v3-display v3-about-title">We would rather build fewer partnerships that matter.</h2>
            <p className="v3-copy" style={{ maxWidth: "760px", marginTop: "2.3rem" }}>Open Volume is designed to remain curated. The strongest opportunities are the ones where artist, audience, place, partner and production all benefit from the relationship.</p>
            <p style={{ marginTop: "2rem" }}><ArrowLink href="mailto:hello@openvolume.world">Introduce Your Work</ArrowLink></p>
          </div>
        </div>
      </section>
    </div>
  );
}
