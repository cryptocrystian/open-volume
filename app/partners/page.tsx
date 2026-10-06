import { ArrowLink } from "@/components/section";

export const metadata = { title: "Partners + Collaborators" };

export default function PartnersPage() {
  return (
    <div className="v3-page">
      <header className="v3-partner-hero">
        <div>
          <p className="v3-kicker">Partners + Collaborators</p>
          <h1>Not every partnership belongs inside Open Volume.</h1>
        </div>
        <aside>Open Volume works selectively with artists, venues, destinations, brands and creative collaborators that can add something real to the production, the audience or the culture around it. <strong>The standard is not visibility. It is fit.</strong></aside>
      </header>

      <section className="v3-photo-strip">
        <img src="/media/ov-v3-hero.webp" alt="Destination electronic music production overlooking the sea" fetchPriority="high" />
      </section>

      <section className="v3-light">
        <div className="v3-wrap">
          <div className="v3-partner-block">
            <div className="v3-partner-label">01 / Venues + Destinations</div>
            <div>
              <h2>Some places deserve more than a booking.</h2>
              <p>Open Volume collaborates with distinctive venues and destinations to create electronic-music productions in which the setting becomes part of the creative idea.</p>
              <p>Artist programming, creative direction, production design, film, distribution and storytelling can come together around a place in a way that creates cultural value long after the performance ends.</p>
              <div className="v3-tags"><span>Programming</span><span>Creative Direction</span><span>Production</span><span>Film + Media</span><span>Distribution</span></div>
              <p><strong>We are interested in places with something distinctive to contribute.</strong></p>
              <div className="v3-cta"><ArrowLink href="mailto:hello@openvolume.world">Bring Us a Place</ArrowLink></div>
            </div>
          </div>

          <div className="v3-partner-block">
            <div className="v3-partner-label">02 / Brands + Sponsors</div>
            <div>
              <h2>Presence has to be earned.</h2>
              <p>Open Volume is not built around conventional sponsorship inventory. Brand participation is developed around genuine creative and cultural alignment—with a limited number of partners whose role can extend beyond exposure.</p>
              <p>Partnerships may connect to original productions, artist collaborations, physical experiences, films, editorial properties, commissioned work and longer-term platform relationships.</p>
              <div className="v3-tags"><span>Platform</span><span>Production</span><span>Commission</span><span>Editorial</span><span>Experience</span></div>
              <p><strong>Category exclusivity may be available where the partnership justifies it.</strong></p>
              <div className="v3-cta"><ArrowLink href="mailto:hello@openvolume.world">Explore a Partnership</ArrowLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-media-card">
        <img src="/media/ov-v3-night-crowd.webp" alt="Electronic music audience inside an architectural night production" />
        <div className="v3-overlay">
          <div><p className="v3-kicker">Artists</p><h2>The artist is not inventory.</h2></div>
          <div><p>Open Volume is built around artists with a point of view. We look for music, identity and ambition that can support a production worth making—and give the artist a larger canvas without forcing the work into a fixed house format.</p><ArrowLink href="mailto:hello@openvolume.world">Propose an Artist Collaboration</ArrowLink></div>
        </div>
      </section>

      <section className="v3-dark">
        <div className="v3-wrap">
          <div className="v3-two">
            <div><p className="v3-kicker">Creative Collaborators</p><h2 className="v3-big">A serious canvas for people who can elevate the work.</h2></div>
            <div className="v3-aside v3-copy"><p>Directors. Designers. Filmmakers. Architects. Visual artists. Choreographers. Musicians. Producers. Technologists.</p><p>Open Volume brings collaborators into productions when their contribution can materially change the outcome. Roles, creative authority, credit and standards are defined around the work—not around a generic vendor roster.</p><ArrowLink href="mailto:hello@openvolume.world">Introduce Your Work</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="v3-mineral">
        <div className="v3-wrap">
          <p className="v3-kicker">Fit Matters</p>
          <h2 className="v3-quote">We would rather build fewer partnerships that matter.</h2>
          <p className="v3-copy" style={{maxWidth:"46rem",margin:"3rem 0 0 auto"}}>The strongest opportunities are the ones where artist, audience, place, partner and production all benefit from the relationship.</p>
        </div>
      </section>
    </div>
  );
}
