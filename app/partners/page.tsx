import { ArrowLink, Section } from "@/components/section";

export const metadata = { title: "Partners + Collaborators" };

export default function PartnersPage() {
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">Partners + Collaborators</p>
          <h1 className="display">Build something with a reason to exist.</h1>
          <p className="page-copy">Open Volume works with artists, venues, destinations, brands and creative partners when the collaboration makes the experience stronger.</p>
        </div>
      </section>
      <Section tone="light" eyebrow="Venues + Destinations">
        <h2 className="display display--medium">Make place part of the experience.</h2>
        <p className="body-large">Open Volume can collaborate around concerts, festivals, destinations and hybrid productions where the setting matters creatively.</p>
        <div className="format-strip"><span>Programming</span><span>Creative Direction</span><span>Production</span><span>Media</span><span>Storytelling</span></div>
        <ArrowLink href="mailto:hello@openvolume.example">Start a Conversation</ArrowLink>
      </Section>
      <Section eyebrow="Brands + Sponsors">
        <h2 className="display display--medium">Participate in culture with purpose.</h2>
        <p className="body-large">The strongest partnerships are built into the idea rather than added after it. Relationships can connect to performances, programming, places, artists and editorial properties—with the role shaped around fit.</p>
        <ArrowLink href="mailto:hello@openvolume.example">Partner With Open Volume</ArrowLink>
      </Section>
      <Section tone="light" eyebrow="Creative Collaborators">
        <h2 className="display display--medium">Bring the right people into the room.</h2>
        <p className="body-large">Directors. Designers. Filmmakers. Architects. Visual artists. Choreographers. Musicians. Producers. Technologists.</p>
        <p className="body-large">Open Volume creates a serious canvas for collaborative work—with defined creative authority, credit and standards.</p>
        <ArrowLink href="mailto:hello@openvolume.example">Create With Open Volume</ArrowLink>
      </Section>
    </>
  );
}
