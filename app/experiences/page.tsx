import { ArrowLink, Section } from "@/components/section";
import { ExperienceCard } from "@/components/experience-card";
import { contentRepository } from "@/lib/content/repository";

export const metadata = { title: "Experiences" };

export default async function ExperiencesPage() {
  const experiences = await contentRepository.listExperiences();
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">Open Volume / Experiences</p>
          <h1 className="display">Electronic music can occupy more than one kind of stage.</h1>
          <p className="page-copy">
            Open Volume develops original productions around artists, performance, place and cinematic storytelling. The format can be recorded, live, physical, virtual or hybrid—but the music remains the center of gravity.
          </p>
        </div>
      </section>

      <Section tone="light" eyebrow="Formats">
        <div className="rule-list">
          <div className="rule-row"><p>Flagship Performances</p><p>Artist-led productions with a complete creative premise: performance, environment, visual direction, capture and release treated as one work.</p></div>
          <div className="rule-row"><p>Sessions</p><p>More intimate electronic-music formats for discovery, experimentation, collaboration and repeat programming.</p></div>
          <div className="rule-row"><p>Live + Hybrid</p><p>Concerts, venue collaborations and future festival-scale programming that can connect physical audiences with digital and spatial layers when the idea earns it.</p></div>
          <div className="rule-row"><p>Destination Productions</p><p>Performances built around places with enough identity to become part of the creative concept, not simply scenery.</p></div>
          <div className="rule-row"><p>Distributed Performance</p><p>Multiple artists, vocalists or ensembles performing together across one or more locations when the creative concept benefits from it.</p></div>
          <div className="rule-row"><p>Open Volume Worlds</p><p>Reusable creative environments and performance properties that can evolve across artists and productions without turning the platform into a virtual-world proposition.</p></div>
        </div>
      </Section>

      <Section eyebrow="The Standard">
        <div className="split">
          <h2 className="display display--medium">A different format should still feel unmistakably Open Volume.</h2>
          <div className="body-large">
            <p>
              Every production begins with a reason to exist. Artist fit, music, environment, production design, performance technology, film language and release strategy are developed around that premise.
            </p>
            <p>
              New technology is used when it creates a better performance or a new form of presence—not because novelty is the product.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" eyebrow="Current Programming">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Initial Slate</p>
            <h2 className="display display--small">The first productions are in development.</h2>
          </div>
          <div>
            <p className="body-large">
              The initial slate is being built to prove the range of the platform: different artists, different environments and different production formats held to one creative standard. Specifics will be revealed when the work is ready.
            </p>
            <ArrowLink href="/join">Follow the First Releases</ArrowLink>
          </div>
        </div>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </Section>
    </>
  );
}
