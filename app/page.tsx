import { JoinForm } from "@/components/join-form";
import { ArrowLink } from "@/components/section";
import { launchMedia } from "@/lib/launch-media";
import styles from "./home-v3.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroPhoto} aria-hidden="true">
          <img src={launchMedia.destination} alt="" fetchPriority="high" />
        </div>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Open Volume / Electronic Music + Culture</p>
          <h1 className={styles.heroTitle}>Electronic music, without fixed boundaries.</h1>
          <div className={styles.heroFooter}>
            <p className={styles.meta}>Recorded / Live / Physical / Virtual / Hybrid</p>
            <div>
              <p className={styles.heroCopy}>Open Volume creates original electronic-music performances, films, live experiences and cultural programming across physical, virtual and hybrid spaces.</p>
              <div className={styles.actions}>
                <ArrowLink href="/experiences">Explore Experiences</ArrowLink>
                <ArrowLink href="/join">Follow Open Volume</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.thesis}>
        <div className={styles.thesisInner}>
          <p className={styles.eyebrow}>What Open Volume Makes</p>
          <h2 className={styles.thesisLine}>The music sets the premise. Everything else follows.</h2>
          <div className={styles.thesisFoot}>
            <p className={styles.meta}>Artist / Place / Production / Film / Audience</p>
            <p>A cinematic performance. A destination session. A live or hybrid production. An original environment. The format changes; the creative standard does not.</p>
          </div>
        </div>
      </section>

      <section className={styles.feature}>
        <div className={styles.featureImage} aria-hidden="true">
          <img src={launchMedia.artist} alt="" loading="eager" />
        </div>
        <div className={styles.featureCopy}>
          <div className={styles.featurePanel}>
            <p className={styles.eyebrow}>For Artists</p>
            <h2>Build a bigger world around the music.</h2>
            <p>Open Volume gives electronic artists a larger creative canvas: cinematic production, environments, collaborators, visual storytelling, live and hybrid formats, and media built to travel beyond the performance itself.</p>
            <p><strong>The artist stays at the center.</strong></p>
            <div className={styles.actions}><ArrowLink href="/partners">Create With Open Volume</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className={styles.pulse}>
        <div className={styles.pulseInner}>
          <div className={styles.pulsePhoto}>
            <img src={launchMedia.crowd} alt="Electronic music audience gathered inside a contemporary club" loading="eager" />
          </div>
          <div className={styles.pulseText}>
            <p className={styles.eyebrow}>For the Audience</p>
            <h2>The music brings us together. The world around it gives us more to return to.</h2>
            <div className={styles.pulseLines}>
              <p>We watch the performances.</p>
              <p>We discover the artists and stories around them.</p>
              <p>We show up when the experience moves into the real world.</p>
            </div>
            <div className={styles.actions}><ArrowLink href="/experiences">See What Is Taking Shape</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className={styles.presents}>
        <img src={launchMedia.destination} alt="" aria-hidden="true" loading="eager" />
        <div className={styles.presentsInner}>
          <p className={styles.eyebrow}>Open Volume Presents</p>
          <div className={styles.presentsGrid}>
            <h2>The first productions are taking shape.</h2>
            <div className={styles.presentsSide}>
              <p>Original electronic-music performances built around artists, place, cinematic capture and ambitious production.</p>
              <p className={styles.meta}>Recorded and live / Physical, virtual and hybrid / Revealed when ready</p>
              <div className={styles.actions}><ArrowLink href="/join">Be First to Know</ArrowLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stories}>
        <div className={styles.storiesInner}>
          <div className={styles.storiesHeader}>
            <div>
              <p className={styles.eyebrow}>Stories / Perspective</p>
              <h2>The performance is only part of the story.</h2>
            </div>
            <p>Open Volume follows the artists, scenes, places, production craft and ideas shaping electronic music now—and where it may go next.</p>
          </div>
          <div className={styles.storyLayout}>
            <article className={styles.storyFeature}>
              <div className={styles.storyPhoto}><img src={launchMedia.club} alt="DJ performing within arm's reach of an intimate electronic music crowd" loading="eager" /></div>
              <h3>Artists, scenes and the choices behind the work.</h3>
              <p>Follow releases, conversations, creative decisions and the people shaping what electronic music becomes next.</p>
            </article>
            <div className={styles.storyRail}>
              <article><div><p className={styles.eyebrow}>01</p><h3>Artists</h3></div><p>Conversations, releases, perspectives and the people behind the work.</p></article>
              <article><div><p className={styles.eyebrow}>02</p><h3>Scenes + Places</h3></div><p>The venues, cities, destinations and communities where electronic music takes on a life of its own.</p></article>
              <article><div><p className={styles.eyebrow}>03</p><h3>Process</h3></div><p>Production design, performance craft, technology and the decisions behind the experience.</p></article>
            </div>
          </div>
          <div className={styles.actions}><ArrowLink href="/stories">Explore Stories</ArrowLink></div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.partnersInner}>
          <div className={styles.partnerTop}>
            <div><p className={styles.eyebrow}>Partners + Collaborators</p><h2>The right partners become part of the work.</h2></div>
            <p>Open Volume works selectively with organizations and collaborators that can contribute something meaningful to the production, the audience or the culture around it.</p>
          </div>
          <div className={styles.partnerList}>
            <article><h3>Venues + Destinations</h3><p>Turn a distinctive place into part of the creative idea.</p><ArrowLink href="/partners">Explore</ArrowLink></article>
            <article><h3>Brands + Sponsors</h3><p>Earn cultural presence by contributing to the work.</p><ArrowLink href="/partners">Explore</ArrowLink></article>
            <article><h3>Creative Collaborators</h3><p>Bring a point of view capable of changing the outcome.</p><ArrowLink href="/partners">Explore</ArrowLink></article>
          </div>
        </div>
      </section>

      <section className={styles.close}>
        <div className={styles.closeInner}>
          <p className={styles.eyebrow}>The Platform</p>
          <h2 className={styles.closeWords}><span>Screen.</span><span>Stage.</span><span>Real life.</span></h2>
          <div className={styles.signup}>
            <div><p className={styles.eyebrow}>Stay Close</p><h2>Know what is coming before it arrives.</h2></div>
            <div className={styles.signupCopy}><p>New productions. Artist stories. Premieres. Places. Collaborations. Live announcements.</p><p><strong>No constant noise. Just the things worth following.</strong></p><JoinForm source="homepage" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
