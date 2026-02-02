import { useState } from "react";
import Footer from "../components/Footer";

export default function ContactSection({ active, setRef, index }) {
    const [mode, setMode] = useState(null); // null | "email"

    const whatsappLink = "https://wa.me/6591234567";

    return (
        <section
            id="contact"
            className={`snap section ${active ? "is-active" : ""}`}
            ref={setRef}
            data-index={index}
        >
            <div className="frame">
                <h2 className="title big">CONTACT US</h2>

                {/* Step 1: Show options first */}
                {mode === null && (
                    <div className="contact-options">
                        <button
                            className="contact-choice"
                            onClick={() => window.open(whatsappLink, "_blank")}
                            type="button"
                        >
                            📱 WhatsApp Us
                        </button>

                        <button
                            className="contact-choice"
                            onClick={() => setMode("email")}
                            type="button"
                        >
                            ✉️ Email Us
                        </button>
                    </div>
                )}

                {/* Step 2: If Email selected, show form */}
                {mode === "email" && (
                    <form
                        className="form"
                        action="https://formspree.io/f/mkojleqz"
                        method="POST"
                    >
                        {/* Back button */}
                        <button
                            type="button"
                            className="back-btn"
                            onClick={() => setMode(null)}
                        >
                            ← Back
                        </button>

                        <label className="field">
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@email.com"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>Message</span>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell us what you need..."
                                required
                            />
                        </label>

                        <button className="submit" type="submit">
                            SEND
                        </button>
                    </form>
                )}
            </div>

            <Footer />
        </section>
    );
}
