import { JoinForm } from "@/components/join-form";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <div className="v3-page">
      <section className="v3-stories-cover">
        <div className="v3-stories-cover-media"><img className="v3-image" src={launchMedia.crowd} alt="Electronic music audience gathered inside a live venue" fetchPriority="high" /></div>
        <div className="v3-stories-cover-copy">
          <p className="v3-kicker">Follow Open Volume</p>
          <h1>Come with us from the beginning.</h1>
          <div className="v3-copy">
            <p>Open Volume is building a new electronic-music and culture platform around original performances, artists, places, stories and live experiences.</p>
            <p>Join for first looks at new productions, premieres, artist stories, destination reveals, live announcements and the work taking shape behind the scenes.</p>
          </div>
          <JoinForm source="join-page" />
          <p className="v3-meta" style={{ marginTop: "2rem" }}>No constant noise. Just the things worth following.</p>
        </div>
      </section>
    </div>
  );
}
