import { useEffect, useState } from "react";
import { content } from "../content/content";
import serviceImg from "../assets/services_img.jpg";

export default function ServicesSection({active, setRef, index}) {
    // ✅ pull services from content.js
    const SERVICES = content.services.items;

    const [current, setCurrent] = useState(0);

    // ✅ Auto swipe every 3 seconds ONLY when section is active
    useEffect(() => {
        if (!active) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SERVICES.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [active, SERVICES.length]);

    return (
        <section
            id="services"
            className={`snap section ${active ? "is-active" : ""}`}
            ref={setRef}
            data-index={index}
        >
            <div className="video-box">
                <img
                    className="imgbox"
                    src={serviceImg}
                    alt="sevice collaboration" />
            </div>
            <div className="frame">

                <h2 className="title big">{content.services.title}</h2>

                {/* Auto Swiping Card */}
                <div className="service-card">
                    <h3 className="service-title">{SERVICES[current].title}</h3>
                    <p className="service-desc">{SERVICES[current].desc}</p>

                    {/* Dots indicator */}
                    <div className="dots">
                        {SERVICES.map((_, i) => (
                            <span
                                key={i}
                                className={`dot ${i === current ? "active" : ""}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
