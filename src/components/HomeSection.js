import { content } from "../content/content";
import video from "../assets/campaign.mp4";

export default function HomeSection({ active, setRef, index, onGetStarted  }) {
    const c = content.home;

    return (
        <section
            id="home"
            className={`snap section ${active ? "is-active" : ""}`}
            ref={setRef}
            data-index={index}
        >
            <div className="frame-home">
                <div className="banner">
                    <h1 className="banner-title" style={{ whiteSpace: "pre-line" }}>
                        {c.heroTitle}
                    </h1>
                    <p className="banner-subtitle">{c.heroSubtitle}</p>
                    <button className="banner-cta" type="button" onClick={ onGetStarted}>
                        {c.heroCta}
                    </button>
                </div>

                <div className="innovative">
                    <div className="innovative-left">
                        <h2 className="title" style={{ whiteSpace: "pre-line" }}>
                            {c.innovative.title}
                        </h2>
                        <p className="innovative-body">{c.innovative.body}</p>
                    </div>

                    <div className="innovative-right">
                    </div>
                </div>
            </div>
            <div className="video-box">
                <video
                    className="fill-video"
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </section>
    );
}
