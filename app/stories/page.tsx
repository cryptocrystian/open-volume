import Link from "next/link";
import { contentRepository } from "@/lib/content/repository";

export const metadata = { title: "Stories" };

export default async function StoriesPage() {
  const stories = await contentRepository.listStories();
  const featured = stories[0];
  return (
    <div className="v3-page">
      <section className="v3-editorial-hero">
        <div className="v3-editorial-photo"><img src="/media/ov-v3-night-crowd.webp" alt="Electronic music crowd gathered close to a night performance" fetchPriority="high" /></div>
        <div className="v3-editorial-copy">
          <p className="v3-kicker">Open Volume / Stories</p>
          <h1>The culture around the performance matters too.</h1>
          <p>Artists, scenes, places, production craft and ideas shaping how electronic music is made, performed and experienced.</p>
        </div>
      </section>

      <nav className="v3-category-bar" aria-label="Story categories"><span>Artists</span><span>Scenes + Places</span><span>Production</span><span>Perspective</span><span>Discovery</span></nav>

      <section className="v3-light">
        <div className="v3-wrap">
          <p className="v3-kicker">Editorial</p>
          <h2 className="v3-big">Taste over volume.</h2>
          <div className="v3-story-list">
            <article className="v3-story-main">
              <div className="v3-story-image"><img src="/media/ov-v3-hero.webp" alt="Electronic music event set against a coastal sunset" /></div>
              <p className="v3-kicker" style={{marginTop:"1.5rem"}}>Perspective</p>
              <h2>{featured?.title ?? "What makes a music experience worth remembering?"}</h2>
              <p className="v3-copy">{featured?.excerpt ?? "A look at the decisions, environments and shared moments that turn a performance into something people carry with them."}</p>
              {featured ? <Link className="text-link" href={`/stories/${featured.slug}`}>Read the story <span aria-hidden="true">↗</span></Link> : null}
            </article>
            <div className="v3-story-side">
              <article><p className="v3-kicker">Artists</p><h3>The people behind the work.</h3><p>Conversations with producers, DJs, vocalists, composers and collaborators about choices, process and ambition.</p></article>
              <article><p className="v3-kicker">Scenes + Places</p><h3>Where culture becomes local.</h3><p>Clubs, venues, cities, destinations and communities that give electronic music its character and weight.</p></article>
              <article><p className="v3-kicker">Process</p><h3>How the experience gets made.</h3><p>Performance design, visual systems, sound, film, spatial production and the craft behind the finished moment.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-dark">
        <div className="v3-wrap">
          <div className="v3-two">
            <div><p className="v3-kicker">Why Editorial Matters</p><h2 className="v3-quote">A performance creates a moment. Culture gives us a reason to come back.</h2></div>
            <div className="v3-aside v3-copy"><p>Open Volume is not trying to become a high-volume music publication. Stories deepen the relationship between productions: introducing artists, revealing process, documenting scenes and making the world around the performance more legible.</p><p>The result should feel curated, useful and worth following even when there is no major release that week.</p></div>
          </div>
        </div>
      </section>

      <section className="v3-photo-strip"><img src="/media/ov-v3-night-crowd.webp" alt="Nighttime electronic music audience and production environment" /></section>
    </div>
  );
}
