import { JoinForm } from "@/components/join-form";
import { launchMedia } from "@/lib/launch-media";

export const metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <div className="v3-page">
      <section className="v3-editorial-hero">
        <div className="v3-editorial-photo"><img src={launchMedia.crowd} alt="Electronic music audience gathered inside a contemporary venue" fetchPriority="high" /></div>
        <div className="v3-editorial-copy">
          <p className="v3-kicker">Follow Open Volume</p>
          <h1>Come with us from the beginning.</h1>
          <p>Open Volume is building a new electronic-music and culture platform around original performances, artists, places, stories and live experiences.</p>
        </div>
      </section>

      <section className="v3-light">
        <div className="v3-wrap">
          <div className="v3-two">
            <div>
              <p className="v3-kicker">Stay Close</p>
              <h2 className="v3-big">First looks. New productions. The things worth following.</h2>
            </div>
            <div className="v3-aside v3-copy">
              <p>Join for premieres, artist stories, destination reveals, live announcements and the work taking shape behind the scenes.</p>
              <JoinForm source="join-page" />
              <p style={{marginTop:"2rem"}}><strong>No constant noise. Just the things worth following.</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
