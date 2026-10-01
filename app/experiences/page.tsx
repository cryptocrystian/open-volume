import { ArrowLink, Section } from "@/components/section";
import { ExperienceCard } from "@/components/experience-card";
import { launchExperienceConcepts } from "@/lib/launch-content";

export const metadata = { title: "Experiences" };

export default function ExperiencesPage() {
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">Open Volume / Experiences</p>
          <h1 className="display">Music, without a fixed container.</h1>
          <p className="page-copy">
            Open Volume creates and curates performances and experiences across physical, virtual and hybrid spaces. The music determines what the experience becomes.
          </p>
        </div>
      </section>

      <Section tone="light" eyebrow="What can live here">
        <div className="rule-list">
          <div className="rule-row"><p>Performances</p><p>Artist-led productions built around music, presence and creative direction.</p></div>
          <div className="rule-row"><p>Sessions</p><p>More intimate formats designed for discovery, experimentation and repeat programming.</p></div>
          <div className="rule-row"><p>Live + Hybrid</p><p>Concerts, festivals, venue collaborations and productions connecting physical and digital environments when the concept calls for it.</p></div>
          <div className="rule-row"><p>Destinations</p><p>Experiences shaped around places with their own identity, atmosphere and cultural weight.</p></div>
          <div className="rule-row"><p>Worlds</p><p>Original Open Volume creative properties that can support recurring performances and visual languages without defining the platform as a whole.</p></div>
        </div>
      </Section>

      <Section eyebrow="Current programming">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Initial slate</p>
            <h2 className="display display--small">First experiences coming soon.</h2>
          </div>
          <div>
            <p className="body-large">
              Open Volume is developing its initial slate of performances, places and collaborations. We will reveal specifics when they are creatively and operationally ready.
            </p>
            <ArrowLink href="/join">Get Updates</ArrowLink>
          </div>
        </div>
        <div className="experience-grid">
          {launchExperienceConcepts.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </Section>
    </>
  );
}
