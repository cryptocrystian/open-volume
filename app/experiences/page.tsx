import Link from "next/link";
import { ArrowLink } from "@/components/section";
import { contentRepository } from "@/lib/content/repository";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "Experiences" };

export default async function ExperiencesPage() {
  const experiences = await contentRepository.listExperiences();
  return (
    <div className="v3-page">
      <header className="v3-hero">
        <p className="v3-kicker">Open Volume / Experiences</p>
        <h1>Electronic music can occupy more than one kind of stage.</h1>
        <p className="v3-hero-copy">Open Volume develops original productions around artists, performance, place and cinematic storytelling. Recorded, live, physical, virtual or hybrid—the music remains the center of gravity.</p>
      </header>

      <section className="v3-media-card">
        <img src={launchMedia.destination} alt="Electronic music production overlooking the sea at sunset" fetchPriority="high" />
        <div className="v3-overlay">
          <div><p className="v3-kicker">The Standard</p><h2>A format should earn its reason to exist.</h2></div>
          <p>Artist fit, music, environment, production design, performance technology, film language and release strategy are developed as one idea. Technology is used when it creates a better performance—not when novelty is the product.</p>
        </div>
      </section>

      <section className="v3-light">
        <div className="v3-wrap">
          <p className="v3-kicker">Production Formats</p>
          <h2 className="v3-big">One platform. Different ways for the music to become present.</h2>
          <div className="v3-index">
            <div className="v3-index-row"><span>01</span><h3>Flagship Performances</h3><p>Artist-led productions where performance, environment, visual direction, capture and release are treated as one work.</p></div>
            <div className="v3-index-row"><span>02</span><h3>Sessions</h3><p>More intimate formats for discovery, experimentation, collaboration and repeat programming.</p></div>
            <div className="v3-index-row"><span>03</span><h3>Live + Hybrid</h3><p>Concerts, venue collaborations and future festival-scale programming that can connect physical audiences with digital and spatial layers.</p></div>
            <div className="v3-index-row"><span>04</span><h3>Destination Productions</h3><p>Performances built around places with enough identity to become part of the creative concept—not simply scenery.</p></div>
            <div className="v3-index-row"><span>05</span><h3>Distributed Performance</h3><p>Artists, vocalists or ensembles performing across one or more locations when the creative concept benefits from it.</p></div>
            <div className="v3-index-row"><span>06</span><h3>Open Volume Worlds</h3><p>Reusable creative environments that can evolve across artists and productions without turning the platform into a virtual-world proposition.</p></div>
          </div>
        </div>
      </section>

      <section className="v3-dark">
        <div className="v3-wrap">
          <div className="v3-two">
            <div><p className="v3-kicker">Initial Slate</p><h2 className="v3-quote">The first productions are in development.</h2></div>
            <div className="v3-aside v3-copy"><p>The initial slate is built to prove range: different artists, environments and production formats held to one creative standard. Specifics are revealed when the work is ready.</p><ArrowLink href="/join">Follow the First Releases</ArrowLink></div>
          </div>
          {experiences.length ? (
            <div className="v3-index">
              {experiences.map((experience, index) => {
                const href = experience.status === "development" ? "/join" : `/experiences/${experience.slug}`;
                return <Link href={href} key={experience.slug} className="v3-index-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.summary}</p>
                </Link>;
              })}
            </div>
          ) : null}
        </div>
      </section>

      <section className="v3-photo-strip"><img src={launchMedia.crowd} alt="Audience gathered inside a large electronic music production at night" loading="eager" /></section>
    </div>
  );
}
