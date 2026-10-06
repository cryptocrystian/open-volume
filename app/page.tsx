import { JoinForm } from "@/components/join-form";
import { MediaFrame } from "@/components/media-frame";
import { ArrowLink, Section } from "@/components/section";

export default function HomePage() {
  return (
    <>
      <section className="section section--dark hero">
        <div className="section-inner">
          <p className="eyebrow">Open Volume / Electronic Music + Culture</p>
          <h1 className="display">Electronic music, without fixed boundaries.</h1>
          <p className="lede">
            Open Volume creates original electronic-music performances, films, live experiences and cultural programming across physical, virtual and hybrid spaces.
          </p>
          <p className="body-large" style={{ maxWidth: "54rem", marginTop: "1.5rem" }}>
            Built around artists. Produced with intent. Designed to move between screen, stage and real life.
          </p>
          <div className="hero-actions">
            <ArrowLink href="/experiences">Explore Experiences</ArrowLink>
            <ArrowLink href="/join">Follow Open Volume</ArrowLink>
          </div>
        </div>
      </section>

      <Section tone="light" eyebrow="What Open Volume Makes">
        <div className="split">
          <h2 className="display display--medium">The format changes. The production standard does not.</h2>
          <div className="stack body-large">
            <p>
              A cinematic performance. A destination session. A live or hybrid production. A collaboration that connects artists in different places. An original world that exists only because the music calls for it.
            </p>
            <p>
              Open Volume brings together creative direction, production design, performance technology, film, sound, place and distribution around one idea: make the music feel larger without making the technology the story.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="For Artists">
        <div className="split split--media">
          <div>
            <h2 className="display display--medium">Build a bigger world around the music.</h2>
            <div className="body-large">
              <p>
                Open Volume gives electronic artists a larger creative canvas: cinematic production, environments, collaborators, visual storytelling, live and hybrid formats, and media built to travel beyond the performance itself.
              </p>
              <p>
                The artist stays at the center. The production is shaped around the sound, identity and ambition of the work—not around a house template.
              </p>
            </div>
            <ArrowLink href="/partners">Create With Open Volume</ArrowLink>
          </div>
          <MediaFrame
            src="/media/ov-img-003-electronic-vocalist.webp"
            alt="Electronic vocalist performing under cobalt and violet stage light"
            ratio="portrait"
          />
        </div>
      </Section>

      <Section tone="light" eyebrow="For the Audience">
        <div className="split split--media split--media-reverse">
          <MediaFrame
            src="/media/ov-img-004-premium-club-crowd.webp"
            alt="Crowd inside a premium electronic music venue with layered blue and violet lighting"
            ratio="wide"
          />
          <div>
            <h2 className="display display--medium">Come for the music. Stay for what surrounds it.</h2>
            <p className="body-large">
              Open Volume is for people who want more from electronic music than another clip in the feed. We follow the artists, places, ideas and creative decisions around each production—and build more ways to experience them over time.
            </p>
            <div className="statement-lines">
              <p>We watch the performances.</p>
              <p>We discover the artists and stories around them.</p>
              <p>We show up when the experience moves into the real world.</p>
            </div>
            <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/experiences">See What Is Taking Shape</ArrowLink></p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Open Volume Presents">
        <div className="split split--media">
          <div>
            <h2 className="display display--medium">The first productions are taking shape.</h2>
            <p className="body-large">
              Original electronic-music performances built around artists, place, cinematic capture and ambitious production.
            </p>
            <div className="statement-lines">
              <p>Recorded and live.</p>
              <p>Physical, virtual and hybrid.</p>
              <p>Revealed when they are ready.</p>
            </div>
            <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/join">Be First to Know</ArrowLink></p>
          </div>
          <MediaFrame
            src="/media/ov-img-001-destination-reveal.webp"
            alt="Coastal destination electronic music gathering at sunset"
            ratio="cinematic"
            priority
          />
        </div>
      </Section>

      <Section tone="light" eyebrow="Stories">
        <div className="section-heading-row">
          <div>
            <h2 className="display display--medium">The performance is only part of the story.</h2>
            <p className="lede" style={{ marginLeft: 0 }}>
              Open Volume follows the artists, scenes, places, production craft and ideas shaping electronic music now—and where it may go next.
            </p>
          </div>
          <MediaFrame
            src="/media/ov-img-002-club-intimacy.webp"
            alt="DJ performing within arm's reach of a dense warehouse-club crowd"
            ratio="square"
          />
        </div>
        <div className="card-grid">
          <article className="card"><h3>Artists</h3><p>Conversations, releases, perspectives and the people behind the work.</p></article>
          <article className="card"><h3>Scenes + Places</h3><p>The venues, cities, destinations and communities where electronic music takes on a life of its own.</p></article>
          <article className="card"><h3>Process</h3><p>Production design, performance craft, technology and the decisions behind the experience.</p></article>
        </div>
        <p style={{ marginTop: "2rem" }}><ArrowLink href="/stories">Explore Stories</ArrowLink></p>
      </Section>

      <Section eyebrow="Partners + Collaborators">
        <h2 className="display display--medium">The right partners become part of the work.</h2>
        <p className="lede" style={{ marginLeft: 0 }}>
          Open Volume works selectively with venues, destinations, brands and creative collaborators that can contribute something meaningful to the production, the audience or the culture around it.
        </p>
        <div className="rule-list">
          <div className="rule-row"><p>Venues + Destinations</p><p>Exceptional places with the potential to become part of the creative idea—not simply a backdrop.</p></div>
          <div className="rule-row"><p>Brands + Sponsors</p><p>Selective cultural partnerships built around fit, access and creative contribution rather than commodity logo inventory.</p></div>
          <div className="rule-row"><p>Creative Collaborators</p><p>Directors, designers, filmmakers, architects, visual artists, musicians and technologists capable of elevating the work.</p></div>
        </div>
        <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/partners">Explore Partnership Opportunities</ArrowLink></p>
      </Section>

      <Section tone="mineral">
        <div className="split">
          <h2 className="display display--medium">A platform designed to move between screen, stage and real life.</h2>
          <div className="body-large">
            <p>
              Open Volume begins with electronic music, but it is being built as something larger than a performance series: original productions, artist discovery, editorial, destinations, collaborations and live programming under one recognizable cultural point of view.
            </p>
            <p><strong>The technology expands what is possible. The music remains the reason.</strong></p>
          </div>
        </div>
      </Section>

      <Section tone="light" eyebrow="Stay Close">
        <h2 className="display display--medium">Know what is coming before it arrives.</h2>
        <p className="body-large">New productions. Artist stories. Premieres. Places. Collaborations. Live announcements.</p>
        <p className="body-large">No constant noise. Just the things worth following.</p>
        <JoinForm source="homepage" />
      </Section>
    </>
  );
}
