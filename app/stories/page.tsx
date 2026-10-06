import { Section } from "@/components/section";
import { StoryCard } from "@/components/story-card";
import { contentRepository } from "@/lib/content/repository";

export const metadata = { title: "Stories" };

export default async function StoriesPage() {
  const stories = await contentRepository.listStories();
  return (
    <>
      <section className="section section--dark page-hero">
        <div className="section-inner">
          <p className="eyebrow">Open Volume / Stories</p>
          <h1 className="display">The culture around electronic music is part of the platform.</h1>
          <p className="page-copy">
            Open Volume Stories follows the artists, scenes, places, production craft and ideas shaping how electronic music is made, performed and experienced.
          </p>
        </div>
      </section>

      <Section tone="light" eyebrow="Editorial">
        <div className="rule-list">
          <div className="rule-row"><p>Artists</p><p>Conversations with producers, DJs, vocalists, composers and collaborators about the work, the choices behind it and where they want to take it next.</p></div>
          <div className="rule-row"><p>Scenes + Places</p><p>Clubs, venues, cities, destinations and communities that give electronic music its local character and cultural weight.</p></div>
          <div className="rule-row"><p>Production</p><p>Performance design, visual systems, sound, film, spatial production and the craft required to turn an idea into something people can feel.</p></div>
          <div className="rule-row"><p>Perspective</p><p>Ideas about electronic music, culture, technology and the changing relationship between artists, audiences and place.</p></div>
          <div className="rule-row"><p>Discovery</p><p>Artists, records, sounds and creative work worth paying attention to—selected for taste, not volume.</p></div>
        </div>
      </Section>

      <Section eyebrow="Why Editorial Matters">
        <div className="split">
          <h2 className="display display--medium">A performance can create a moment. Culture gives people a reason to come back.</h2>
          <div className="body-large">
            <p>
              Open Volume is not trying to become a high-volume music publication. Stories exist to deepen the relationship between productions: to introduce artists, reveal process, document scenes and make the world around the performance more legible.
            </p>
            <p>
              The result should feel curated, useful and worth following even when there is no major release that week.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" eyebrow="In Development">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">First Editorial Concepts</p>
            <h2 className="display display--small">Taste over volume.</h2>
          </div>
          <p className="body-large">
            The first editorial concepts are being developed alongside the initial Open Volume productions so the performance and the cultural story can reinforce one another from the beginning.
          </p>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <StoryCard key={story.slug} story={story} featured={index === 0} />
          ))}
        </div>
      </Section>
    </>
  );
}
