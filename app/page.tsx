import { JoinForm } from "@/components/join-form";
import { MediaFrame } from "@/components/media-frame";
import { ArrowLink } from "@/components/section";
import styles from "./home-v2.module.css";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/media/ov-img-001-destination-reveal.webp" alt="" />
        </div>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Open Volume / Electronic Music + Culture</p>
          <h1 className={styles.heroTitle}>Electronic music, without fixed boundaries.</h1>
          <div className={styles.heroBottom}>
            <p className={styles.heroMeta}>Recorded / Live / Physical / Virtual / Hybrid</p>
            <div>
              <p className={styles.heroCopy}>
                Open Volume creates original electronic-music performances, films, live experiences and cultural programming across physical, virtual and hybrid spaces.
              </p>
              <div className={styles.heroActions}>
                <ArrowLink href="/experiences">Explore Experiences</ArrowLink>
                <ArrowLink href="/join">Follow Open Volume</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>What Open Volume Makes</p>
          <div className={styles.thesisGrid}>
            <h2 className={styles.thesisTitle}>The format changes. The production standard does not.</h2>
            <div className={styles.thesisCopy}>
              <div className={styles.thesisRule} />
              <p>
                A cinematic performance. A destination session. A live or hybrid production. A collaboration connecting artists in different places. An original world that exists only because the music calls for it.
              </p>
              <p>
                Creative direction, production design, performance technology, film, sound, place and distribution come together around one idea: make the music feel larger without making the technology the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.sectionInner}>
          <div className={styles.artistGrid}>
            <div className={styles.artistMedia}>
              <MediaFrame
                src="/media/ov-img-003-electronic-vocalist.webp"
                alt="Electronic vocalist performing under cobalt and violet stage light"
                ratio="portrait"
              />
            </div>
            <div className={styles.artistCopy}>
              <p className={styles.sectionEyebrow}>For Artists</p>
              <h2 className={styles.featureTitle}>Build a bigger world around the music.</h2>
              <div className={styles.featureCopy}>
                <p>
                  Open Volume gives electronic artists a larger creative canvas: cinematic production, environments, collaborators, visual storytelling, live and hybrid formats, and media built to travel beyond the performance itself.
                </p>
                <p>
                  The artist stays at the center. The production is shaped around the sound, identity and ambition of the work—not around a house template.
                </p>
              </div>
              <p style={{ marginTop: "2.25rem" }}><ArrowLink href="/partners">Create With Open Volume</ArrowLink></p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.sectionInner}>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCopy}>
              <p className={styles.sectionEyebrow}>For the Audience</p>
              <h2 className={styles.featureTitle}>Come for the music. Stay for what surrounds it.</h2>
              <p className={styles.featureCopy}>
                Open Volume is for people who want more from electronic music than another clip in the feed. We follow the artists, places, ideas and creative decisions around each production—and build more ways to experience them over time.
              </p>
              <div className={styles.audienceLines}>
                <p>We watch the performances.</p>
                <p>We discover the artists and stories around them.</p>
                <p>We show up when the experience moves into the real world.</p>
              </div>
              <p style={{ marginTop: "2.25rem" }}><ArrowLink href="/experiences">See What Is Taking Shape</ArrowLink></p>
            </div>
            <div className={styles.audienceMedia}>
              <MediaFrame
                src="/media/ov-img-004-premium-club-crowd.webp"
                alt="Crowd inside a premium electronic music venue with layered blue and violet lighting"
                ratio="portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.presents}>
        <div className={styles.presentsMedia} aria-hidden="true">
          <MediaFrame
            src="/media/ov-img-001-destination-reveal.webp"
            alt=""
            ratio="cinematic"
            priority
          />
        </div>
        <div className={styles.presentsInner}>
          <p className={styles.heroEyebrow}>Open Volume Presents</p>
          <div className={styles.presentsRow}>
            <h2 className={styles.presentsTitle}>The first productions are taking shape.</h2>
            <div>
              <p className={styles.presentsCopy}>
                Original electronic-music performances built around artists, place, cinematic capture and ambitious production.
              </p>
              <p className={styles.presentsMeta}>Recorded and live / Physical, virtual and hybrid / Revealed when they are ready</p>
              <p style={{ marginTop: "2rem" }}><ArrowLink href="/join">Be First to Know</ArrowLink></p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>Stories</p>
          <div className={styles.storiesHeading}>
            <h2 className={styles.storyTitle}>The performance is only part of the story.</h2>
            <p className={styles.storiesIntro}>
              Open Volume follows the artists, scenes, places, production craft and ideas shaping electronic music now—and where it may go next.
            </p>
          </div>
          <div className={styles.editorialGrid}>
            <article className={styles.editorialFeature}>
              <div className={styles.editorialFeatureMedia}>
                <MediaFrame
                  src="/media/ov-img-002-club-intimacy.webp"
                  alt="DJ performing within arm's reach of a dense warehouse-club crowd"
                  ratio="cinematic"
                />
              </div>
              <p className={styles.editorialKicker}>Inside the culture</p>
              <h3>Artists, scenes and the choices behind the work.</h3>
              <p>Follow releases, conversations, creative decisions and the people shaping what electronic music becomes next.</p>
            </article>
            <div className={styles.editorialStack}>
              <article className={styles.editorialItem}>
                <div>
                  <p className={styles.editorialKicker}>01</p>
                  <h3>Artists</h3>
                </div>
                <p>Conversations, releases, perspectives and the people behind the work.</p>
              </article>
              <article className={styles.editorialItem}>
                <div>
                  <p className={styles.editorialKicker}>02</p>
                  <h3>Scenes + Places</h3>
                </div>
                <p>The venues, cities, destinations and communities where electronic music takes on a life of its own.</p>
              </article>
              <article className={styles.editorialItem}>
                <div>
                  <p className={styles.editorialKicker}>03</p>
                  <h3>Process</h3>
                </div>
                <p>Production design, performance craft, technology and the decisions behind the experience.</p>
              </article>
            </div>
          </div>
          <p style={{ marginTop: "2.25rem" }}><ArrowLink href="/stories">Explore Stories</ArrowLink></p>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>Partners + Collaborators</p>
          <div className={styles.partnerIntro}>
            <h2 className={styles.partnerTitle}>The right partners become part of the work.</h2>
            <div className={styles.partnerSide}>
              <p>Open Volume works selectively with organizations and collaborators that can contribute something meaningful to the production, the audience or the culture around it.</p>
            </div>
          </div>
          <div className={styles.partnerRows}>
            <div className={styles.partnerRow}>
              <h3>Venues + Destinations</h3>
              <p>Exceptional places with the potential to become part of the creative idea—not simply a backdrop.</p>
            </div>
            <div className={styles.partnerRow}>
              <h3>Brands + Sponsors</h3>
              <p>Selective cultural partnerships built around fit, access and creative contribution rather than commodity logo inventory.</p>
            </div>
            <div className={styles.partnerRow}>
              <h3>Creative Collaborators</h3>
              <p>Directors, designers, filmmakers, architects, visual artists, musicians and technologists capable of elevating the work.</p>
            </div>
          </div>
          <p className={styles.partnerAction}><ArrowLink href="/partners">Explore Partnership Opportunities</ArrowLink></p>
        </div>
      </section>

      <section className={styles.mineralSection}>
        <div className={styles.sectionInner}>
          <div className={styles.platformStatement}>
            <p className={styles.sectionEyebrow}>The Platform</p>
            <h2 className={styles.platformWords} aria-label="Screen. Stage. Real life.">
              <span>Screen.</span>
              <span>Stage.</span>
              <span>Real life.</span>
            </h2>
            <p className={styles.platformCopy}>
              Open Volume begins with electronic music, but it is being built as something larger than a performance series: original productions, artist discovery, editorial, destinations, collaborations and live programming under one recognizable cultural point of view. <strong>The technology expands what is possible. The music remains the reason.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.sectionInner}>
          <div className={styles.signupGrid}>
            <div>
              <p className={styles.sectionEyebrow}>Stay Close</p>
              <h2 className={styles.signupTitle}>Know what is coming before it arrives.</h2>
            </div>
            <div className={styles.signupCopy}>
              <p>New productions. Artist stories. Premieres. Places. Collaborations. Live announcements.</p>
              <p><strong>No constant noise. Just the things worth following.</strong></p>
              <JoinForm source="homepage" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
