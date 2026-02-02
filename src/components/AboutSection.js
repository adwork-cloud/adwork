import { useState } from "react";
import { content } from "../content/content";
import aboutImg from "../assets/about.jpg";

export default function AboutSection({ active, setRef, index }) {
    const about = content.about;

    const [open, setOpen] = useState({ who: true, why: false });

    const toggle = (key) => {
        setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section
            id="about"
            className={`snap section ${active ? "is-active" : ""}`}
            ref={setRef}
            data-index={index}
        >
            <div className="video-box">
                <img className="about-imgbox" src={aboutImg} alt="service collaboration" />
            </div>

            <div className="frame">
                <h2 className="title big about">{about.title}</h2>

                <div className="about-block">
                    {/* Who We Are */}
                    <button
                        type="button"
                        className={`about-row interactive ${open.who ? "open" : ""}`}
                        onClick={() => toggle("who")}
                    >
                        <div className="about-head">
                            <h3 className="about-heading">{about.whoHeading}</h3>
                            <span className="about-icon">{open.who ? "—" : "+"}</span>
                        </div>

                        <div className="about-body">
                            {(about.whoText || []).map((t, i) => (
                                <p key={i} className="about-text">
                                    {t}
                                </p>
                            ))}
                        </div>
                    </button>

                    {/* Why We Exist */}
                    <button
                        type="button"
                        className={`about-row interactive ${open.why ? "open" : ""}`}
                        onClick={() => toggle("why")}
                    >
                        <div className="about-head">
                            <h3 className="about-heading">{about.whyHeading}</h3>
                            <span className="about-icon">{open.why ? "—" : "+"}</span>
                        </div>

                        <div className="about-body">
                            {(about.whyText || []).map((t, i) => (
                                <p key={i} className="about-text">
                                    {t}
                                </p>
                            ))}
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
