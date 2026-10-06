import { ArrowLink, Section } from "@/components/section";

export const metadata = { title: "Partners + Collaborators" };

export default function PartnersPage() {
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">Partners + Collaborators</p>
          <h1 className="display">Not every partnership belongs inside Open Volume.</h1>
          <p className="page-copy">
            Open Volume works selectively with artists, venues, destinations, brands and creative collaborators that can add something real to the production, the audience or the culture around it.
          </p>
          <p className="body-large" style={{ maxWidth: "54rem", marginTop: "1.5rem" }}>
            The standard is not visibility. It is fit.
          </p>
        </div>
      </section>

      <Section tone="light" eyebrow="Venues + Destinations">
        <h2 className="display display--medium">Some places deserve more than a booking.</h2>
        <p className="body-large">
          Open Volume collaborates with distinctive venues and destinations to create electronic-music productions in which the setting becomes part of the creative idea.
        </p>
        <p className="body-large">
          Artist programming, creative direction, production design, film, distribution and storytelling can come together around a place in a way that creates cultural value long after the performance ends.
        </p>
        <div className="format-strip"><span>Programming</span><span>Creative Direction</span><span>Production</span><span>Film + Media</span><span>Distribution</span></div>
        <p className="body-large"><strong>We are interested in places with something distinctive to contribute.</strong></p>
        <ArrowLink href="mailto:hello@openvolume.world">Bring Us a Place</ArrowLink>
      </Section>

      <Section eyebrow="Brands + Sponsors">
        <h2 className="display display--medium">Presence has to be earned.</h2>
        <p className="body-large">
          Open Volume is not built around conventional sponsorship inventory. Brand participation is developed around genuine creative and cultural alignment—with a limited number of partners whose role can extend beyond exposure.
        </p>
        <p className="body-large">
          Partnerships may connect to original productions, artist collaborations, physical experiences, films, editorial properties, commissioned work and longer-term platform relationships. When a brand belongs in the idea, its presence should make the work stronger.
        </p>
        <div className="rule-list">
          <div className="rule-row"><p>Platform Partners</p><p>Selective long-term relationships with meaningful alignment to Open Volume's audience, production model and growth.</p></div>
          <div className="rule-row"><p>Production Partners</p><p>Integrated participation around a specific performance, format, place or original program.</p></div>
          <div className="rule-row"><p>Creative Commissions</p><p>Original work developed when the brand has a credible reason to participate in the cultural idea.</p></div>
        </div>
        <p className="body-large"><strong>Category exclusivity may be available where the partnership justifies it.</strong></p>
        <ArrowLink href="mailto:hello@openvolume.world">Explore a Partnership</ArrowLink>
      </Section>

      <Section tone="light" eyebrow="Artists">
        <h2 className="display display--medium">The artist is not inventory.</h2>
        <p className="body-large">
          Open Volume is built around artists with a point of view. We look for music, identity and ambition that can support a production worth making—and give the artist a larger canvas without forcing the work into a fixed house format.
        </p>
        <p className="body-large">
          Depending on the project, that can include creative direction, production design, cinematic capture, live and hybrid performance, original environments, collaborators, launch media and editorial support.
        </p>
        <ArrowLink href="mailto:hello@openvolume.world">Propose an Artist Collaboration</ArrowLink>
      </Section>

      <Section eyebrow="Creative Collaborators">
        <h2 className="display display--medium">A serious canvas for people who can elevate the work.</h2>
        <p className="body-large">Directors. Designers. Filmmakers. Architects. Visual artists. Choreographers. Musicians. Producers. Technologists.</p>
        <p className="body-large">
          Open Volume brings collaborators into productions when their contribution can materially change the outcome. Roles, creative authority, credit and standards are defined around the work—not around a generic vendor roster.
        </p>
        <ArrowLink href="mailto:hello@openvolume.world">Introduce Your Work</ArrowLink>
      </Section>

      <Section tone="mineral" eyebrow="Fit Matters">
        <h2 className="display display--medium">We would rather build fewer partnerships that matter.</h2>
        <p className="body-large">
          Open Volume is designed to remain curated. The strongest opportunities are the ones where artist, audience, place, partner and production all benefit from the relationship.
        </p>
      </Section>
    </>
  );
}
