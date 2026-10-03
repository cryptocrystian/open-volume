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
          <h1 className="display">Follow the ideas around the music.</h1>
          <p className="page-copy">
            Open Volume Stories explores the people, places, processes and perspectives shaping how music is experienced. Not everything meaningful happens on stage.
          </p>
        </div>
      </section>

      <Section tone="light" eyebrow="Editorial">
        <div className="rule-list">
          <div className="rule-row"><p>Artists</p><p>Conversations with artists, producers, vocalists and collaborators about the work, the choices behind it and where they want to take it next.</p></div>
          <div className="rule-row"><p>Places</p><p>Venues, cities, destinations and environments that change how music feels.</p></div>
          <div className="rule-row"><p>Process</p><p>Creative direction, production craft, visual systems, performance design and the decisions that turn an idea into an experience.</p></div>
          <div className="rule-row"><p>Perspective</p><p>Ideas about music, culture, technology and the changing relationship between artists, audiences and place.</p></div>
          <div className="rule-row"><p>Discovery</p><p>Artists, sounds, scenes and creative work worth paying attention to.</p></div>
        </div>
      </Section>

      <Section eyebrow="In development">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">First editorial concepts</p>
            <h2 className="display display--small">A publishing system built around taste, not volume.</h2>
          </div>
          <p className="body-large">
            These concepts validate the editorial system while the first commissioned stories, artists and production imagery are being developed.
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
