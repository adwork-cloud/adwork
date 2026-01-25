import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    function onChange(e) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        // Replace with your backend/email service later (Formspree, Resend, etc.)
        setSent(true);
    }

    return (
        <div className="stack">
            <h1>Contact</h1>
            <p className="lead">Tell us what you’re trying to achieve. We’ll reply within 24 hours.</p>

            <div className="grid2">
                <form className="card" onSubmit={async function onSubmit(e) {
                    e.preventDefault();
                    setSent(false);

                    try {
                        const res = await fetch("https://formspree.io/f/mkojleqz", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", "Accept": "application/json" },
                            body: JSON.stringify(form),
                        });

                        if (!res.ok) throw new Error("Failed");
                        setSent(true);
                        setForm({ name: "", email: "", message: "" });
                    } catch (err) {
                        alert("Something went wrong. Please email us directly.");
                    }
                }}>
                    <label>
                        Name
                        <input name="name" value={form.name} onChange={onChange} required />
                    </label>

                    <label>
                        Email
                        <input name="email" type="email" value={form.email} onChange={onChange} required />
                    </label>

                    <label>
                        Message
                        <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
                    </label>

                    <button className="btn primary" type="submit">Send</button>
                    {sent && <p className="muted" style={{ marginTop: 10 }}>Sent! We’ll get back to you soon.</p>}
                </form>

                <div className="card">
                    <h3>Details</h3>
                    <p className="muted">
                        Email: hello@momentumagency.com<br />
                        Location: Singapore<br />
                        Hours: Mon–Fri, 9am–6pm
                    </p>

                    <div className="divider" />

                    <h3>What to include</h3>
                    <ul>
                        <li>Your product/service</li>
                        <li>Monthly ad spend</li>
                        <li>Main goal (leads / sales / awareness)</li>
                        <li>Timeline</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}