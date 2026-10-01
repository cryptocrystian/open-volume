import { JoinForm } from "@/components/join-form";
import { ArrowLink, MediaPlaceholder, Section } from "@/components/section";

export default function HomePage() {
  return (
    <>
      <section className="section section--dark hero">
        <div className="section-inner">
          <p className="eyebrow">Open Volume / Music + Culture</p>
          <h1 className="display">Expand the space music can occupy.</h1>
          <p className="lede">
            Open Volume creates and curates original performances, experiences and collaborations across physical, virtual and hybrid spaces.
          </p>
          <div className="hero-actions">
            <ArrowLink href="/experiences">Explore Open Volume</ArrowLink>
            <ArrowLink href="/join">Get Updates</ArrowLink>
          </div>
        </div>
      </section>

      <Section tone="light" eyebrow="Recorded / Live / Physical / Virtual / Hybrid">
        <div className="split">
          <h2 className="display display--medium">Different formats. One creative standard.</h2>
          <div className="stack body-large">
            <p>Open Volume brings artists, places, collaborators and technology together to create performances and experiences around the music.</p>
            <p>Some are watched. Some are attended. Some unfold across multiple places. Some may exist only because new tools make them possible.</p>
            <p><strong>The format changes. The standard does not.</strong></p>
          </div>
        </div>
      </Section>

      <Section eyebrow="For Artists">
        <div className="split">
          <h2 className="display display--medium">The artist leads. The format follows.</h2>
          <div>
            <p className="body-large">
              Every Open Volume production begins with the music and the person behind it. Creative direction, environment, collaborators and technology are shaped around the artist—not the other way around.
            </p>
            <p className="body-large">
              The goal is not to place artists inside an Open Volume template. It is to give them more room to create something worth remembering.
            </p>
            <ArrowLink href="/partners">Create With Open Volume</ArrowLink>
          </div>
        </div>
      </Section>

      <Section tone="light" eyebrow="For the Audience">
        <div className="split">
          <h2 className="display display--medium">More than something to watch.</h2>
          <div>
            <p className="body-large">
              Open Volume creates performances and experiences designed to hold attention, create anticipation and stay with people after they end.
            </p>
            <div className="statement-lines">
              <p>Come for the music.</p>
              <p>Discover the artists, places, ideas and collaborations around it.</p>
              <p>Return because Open Volume itself becomes something worth following.</p>
            </div>
            <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/experiences">Explore Experiences</ArrowLink></p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Open Volume Presents">
        <div className="split">
          <div>
            <h2 className="display display--medium">Something is taking shape.</h2>
            <p className="body-large">A new Open Volume experience is in development.</p>
            <div className="statement-lines">
              <p>Music. Place. Light.</p>
              <p>Movement. Collaboration.</p>
            </div>
            <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/join">Be First to Know</ArrowLink></p>
          </div>
          <div>
            <MediaPlaceholder label="Controlled production fragment — production imagery pending art-direction pass" />
            <p className="placeholder-note">Temporary media field. Do not treat this as World 01 art direction.</p>
          </div>
        </div>
      </Section>

      <Section tone="light" eyebrow="Stories">
        <h2 className="display display--medium">The culture around the performance matters too.</h2>
        <p className="lede" style={{ marginLeft: 0 }}>
          Open Volume follows the artists, places, creative decisions and ideas shaping how music is experienced.
        </p>
        <div className="card-grid">
          <article className="card"><h3>Artists</h3><p>Conversations, perspectives and the people behind the work.</p></article>
          <article className="card"><h3>Places</h3><p>Venues, destinations and environments that change what a performance can become.</p></article>
          <article className="card"><h3>Process</h3><p>Creative direction, production craft and the decisions behind the experience.</p></article>
        </div>
        <p style={{ marginTop: "2rem" }}><ArrowLink href="/stories">Explore Stories</ArrowLink></p>
      </Section>

      <Section eyebrow="Collaborate">
        <h2 className="display display--medium">Create something with a reason to exist.</h2>
        <p className="lede" style={{ marginLeft: 0 }}>
          Open Volume works with artists, venues, destinations, brands and creative partners when the collaboration adds real value to the experience.
        </p>
        <div className="rule-list">
          <div className="rule-row"><p>Venues + Destinations</p><p>Turn place into part of the experience through distinctive programming, creative direction and production.</p></div>
          <div className="rule-row"><p>Brands + Partners</p><p>Participate in culture with purpose, with integration shaped by fit rather than commodity exposure.</p></div>
          <div className="rule-row"><p>Creative Collaborators</p><p>A serious canvas for directors, designers, filmmakers, architects, visual artists, musicians and technologists.</p></div>
        </div>
        <p style={{ marginTop: "2.5rem" }}><ArrowLink href="/partners">Partner With Open Volume</ArrowLink></p>
      </Section>

      <Section tone="mineral">
        <div className="split">
          <h2 className="display display--medium">Open Volume is built for possibility.</h2>
          <div className="body-large">
            <p>Music can live on a stage. Inside a film. Across a city. Within a destination. Between physical and virtual spaces.</p>
            <p>Alongside new forms of performance that have not yet become conventional.</p>
            <p><strong>Open Volume exists to keep that possibility open.</strong></p>
          </div>
        </div>
      </Section>

      <Section tone="light" eyebrow="Stay Close">
        <h2 className="display display--medium">Be there before it happens.</h2>
        <p className="body-large">New performances. Artist stories. Premieres. Places. Collaborations. Open Volume announcements.</p>
        <p className="body-large">Shared when there is something worth sharing.</p>
        <JoinForm source="homepage" />
      </Section>
    </>
  );
}
