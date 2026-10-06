import { JoinForm } from "@/components/join-form";
import { ArrowLink } from "@/components/section";
import { launchMedia } from "@/lib/launch-media";

export default function HomePage() {
  return (
    <div className="v3-page">
      <section className="v3-hero">
        <div className="v3-hero-media" aria-hidden="true">
          <img className="v3-image" src={launchMedia.destination} alt="" fetchPriority="high" />
        </div>
        <div className="v3-wrap v3-hero-content">
          <p className="v3-kicker">Open Volume / Electronic Music + Culture</p>
          <h1 className="v3-display v3-hero-title">Electronic music, without fixed boundaries.</h1>
          <div className="v3-hero-lower">
            <p className="v3-meta">Recorded / Live / Physical / Virtual / Hybrid</p>
            <div>
              <p className="v3-copy">Open Volume creates original electronic-music performances, films, live experiences and cultural programming across physical, virtual and hybrid spaces.</p>
              <div className="v3-hero-actions">
                <ArrowLink href="/experiences">Explore Experiences</ArrowLink>
                <ArrowLink href="/join">Follow Open Volume</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-manifesto">
        <div className="v3-wrap v3-manifesto-grid">
          <div>
            <p className="v3-kicker">What Open Volume Makes</p>
            <h2 className="v3-display v3-manifesto-title">The format changes. The production standard does not.</h2>
          </div>
          <div className="v3-manifesto-side v3-copy">
            <div className="v3-rule" />
            <p>A cinematic performance. A destination session. A live or hybrid production. A collaboration connecting artists in different places. An original world that exists only because the music calls for it.</p>
            <p>Creative direction, production design, performance technology, film, sound, place and distribution come together around one idea: make the music feel larger without making the technology the story.</p>
          </div>
        </div>
      </section>

      <section className="v3-artist">
        <div className="v3-artist-media" aria-hidden="true">
          <img className="v3-image" src={launchMedia.artist} alt="" loading="eager" />
        </div>
        <span className="v3-artist-index">03 / Artist-led production</span>
        <div className="v3-wrap">
          <div className="v3-artist-copy">
            <p className="v3-kicker">For Artists</p>
            <h2 className="v3-display v3-artist-title">Build a bigger world around the music.</h2>
            <div className="v3-copy v3-artist-body">
              <p>Open Volume gives electronic artists a larger creative canvas: cinematic production, environments, collaborators, visual storytelling, live and hybrid formats, and media built to travel beyond the performance itself.</p>
              <p>The artist stays at the center. The production is shaped around the sound, identity and ambition of the work—not around a house template.</p>
            </div>
            <p style={{ marginTop: "2.4rem" }}><ArrowLink href="/partners">Create With Open Volume</ArrowLink></p>
          </div>
        </div>
      </section>

      <section className="v3-presents">
        <div className="v3-presents-media" aria-hidden="true">
          <img className="v3-image" src={launchMedia.destination} alt="" loading="eager" />
        </div>
        <div className="v3-wrap v3-presents-content">
          <div className="v3-presents-grid">
            <div>
              <p className="v3-kicker">Open Volume Presents</p>
              <h2 className="v3-display v3-presents-title">The first productions are taking shape.</h2>
            </div>
            <div>
              <p className="v3-copy">Original electronic-music performances built around artists, place, cinematic capture and ambitious production.</p>
              <p className="v3-meta" style={{ marginTop: "1.7rem" }}>Recorded and live / Physical, virtual and hybrid / Revealed when ready</p>
              <p style={{ marginTop: "2rem" }}><ArrowLink href="/join">Be First to Know</ArrowLink></p>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-audience">
        <div className="v3-wrap v3-audience-grid">
          <div className="v3-audience-copy">
            <p className="v3-kicker">For the Audience</p>
            <h2 className="v3-display v3-audience-title">The music brings us together. What surrounds it gives us more to return to.</h2>
            <div className="v3-copy v3-audience-body">
              <p>We come for the performance, then follow the artists, places, ideas and creative decisions around it. Over time, Open Volume creates more ways to discover the work, experience it in person and stay connected between major releases.</p>
            </div>
            <p style={{ marginTop: "2.3rem" }}><ArrowLink href="/experiences">See What Is Taking Shape</ArrowLink></p>
          </div>
          <div className="v3-collage" aria-label="Electronic music culture and audience">
            <figure className="wide"><img className="v3-image" src={launchMedia.crowd} alt="Crowd gathered inside a contemporary electronic music venue" loading="eager" /></figure>
            <figure><img className="v3-image" src={launchMedia.club} alt="DJ performing close to an intimate club audience" loading="eager" /></figure>
            <figure><img className="v3-image" src={launchMedia.artist} alt="Electronic vocalist and producer performing live" loading="eager" /></figure>
          </div>
        </div>
      </section>

      <section className="v3-stories">
        <div className="v3-wrap">
          <div className="v3-stories-head">
            <div>
              <p className="v3-kicker">Stories</p>
              <h2 className="v3-display v3-stories-title">The performance is only part of the story.</h2>
            </div>
            <p className="v3-copy">Open Volume follows the artists, scenes, places, production craft and ideas shaping electronic music now—and where it may go next.</p>
          </div>
          <div className="v3-editorial">
            <article className="v3-editorial-feature">
              <img className="v3-image" src={launchMedia.club} alt="Intimate electronic music performance inside a club" loading="eager" />
              <div className="v3-editorial-feature-copy">
                <p className="v3-kicker">Inside the culture</p>
                <h3>Artists, scenes and the choices behind the work.</h3>
                <p>Follow releases, conversations, creative decisions and the people shaping what electronic music becomes next.</p>
              </div>
            </article>
            <div className="v3-editorial-list">
              <article className="v3-editorial-row"><span>01</span><div><h3>Artists</h3><p>Conversations, releases, perspectives and the people behind the work.</p></div></article>
              <article className="v3-editorial-row"><span>02</span><div><h3>Scenes + Places</h3><p>The venues, cities, destinations and communities where electronic music takes on a life of its own.</p></div></article>
              <article className="v3-editorial-row"><span>03</span><div><h3>Process</h3><p>Production design, performance craft, technology and the decisions behind the experience.</p></div></article>
            </div>
          </div>
          <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/stories">Explore Stories</ArrowLink></p>
        </div>
      </section>

      <section className="v3-partners">
        <div className="v3-wrap">
          <div className="v3-partners-top">
            <div>
              <p className="v3-kicker">Partners + Collaborators</p>
              <h2 className="v3-display v3-partners-title">The right partners become part of the work.</h2>
            </div>
            <div className="v3-partner-note v3-copy"><p>Open Volume works selectively with organizations and collaborators that can contribute something meaningful to the production, the audience or the culture around it.</p></div>
          </div>
          <div className="v3-partner-strip">
            <div className="v3-partner-cell"><h3>Venues + Destinations</h3><p>Exceptional places with the potential to become part of the creative idea—not simply a backdrop.</p></div>
            <div className="v3-partner-cell"><h3>Brands + Sponsors</h3><p>Selective cultural partnerships built around fit, access and creative contribution rather than commodity logo inventory.</p></div>
            <div className="v3-partner-cell"><h3>Creative Collaborators</h3><p>Directors, designers, filmmakers, architects, visual artists, musicians and technologists capable of elevating the work.</p></div>
          </div>
          <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/partners">Explore Partnership Opportunities</ArrowLink></p>
        </div>
      </section>

      <section className="v3-platform">
        <div className="v3-wrap">
          <p className="v3-kicker">The Platform</p>
          <h2 className="v3-platform-words" aria-label="Screen. Stage. Real life."><span>Screen.</span><span>Stage.</span><span>Real life.</span></h2>
          <p className="v3-copy v3-platform-copy">Open Volume begins with electronic music, but it is being built as something larger than a performance series: original productions, artist discovery, editorial, destinations, collaborations and live programming under one recognizable cultural point of view. <strong>The technology expands what is possible. The music remains the reason.</strong></p>
        </div>
      </section>

      <section className="v3-signup">
        <div className="v3-wrap v3-signup-grid">
          <div>
            <p className="v3-kicker">Stay Close</p>
            <h2 className="v3-display v3-signup-title">Know what is coming before it arrives.</h2>
          </div>
          <div className="v3-copy">
            <p>New productions. Artist stories. Premieres. Places. Collaborations. Live announcements.</p>
            <p><strong>No constant noise. Just the things worth following.</strong></p>
            <JoinForm source="homepage" />
          </div>
        </div>
      </section>
    </div>
  );
}
