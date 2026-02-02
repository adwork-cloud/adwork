import {content} from "../content/content";
import handshakeImg from "../assets/handshake.jpg";

export default function TestimonialsSection({ active, setRef, index }) {
    return (
        <section
            id="testimonials"
            className={`snap section ${active ? "is-active" : ""}`}
            ref={setRef}
            data-index={index}
        >
            <div className="frame">
                <h2 className="title big">
                    {content.testimonials.title}
                </h2>

                <div className="two-row">
                    <div className="quote">
                        <p className="quote-text">
                            {content.testimonials.testimonials[0].text}
                        </p>
                        <p className="quote-author"> {content.testimonials.testimonials[0].client}</p>
                    </div>

                    <div className="quote">
                        <p className="quote-text">
                            {content.testimonials.testimonials[1].text}
                        </p>
                        <p className="quote-author"> {content.testimonials.testimonials[1].client}</p>
                    </div>
                </div>
            </div>
            <div className="video-box">
                <img
                    className="imgbox"
                    src={handshakeImg}
                    alt="sevice collaboration" />
            </div>
        </section>
    );
}
