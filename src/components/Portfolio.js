import React from "react";

const items = [
    { title: "Launch Strategy", tag: "Concept → Execution", desc: "A full-funnel campaign built for measurable lift." },
    { title: "Brand Refresh", tag: "Identity + Ads", desc: "Repositioning + creative system for modern audiences." },
    { title: "Performance Creative", tag: "Test & Learn", desc: "Iterative creatives designed to scale conversions." },
];

export default function Portfolio() {
    return (
        <section className="section" id="portfolio">
            <div className="container">
                <div className="sectionHead">
                    <h2 className="sectionTitle">INNOVATIVE CAMPAIGNS</h2>
                    <p className="muted">
                        A snapshot of work designed to elevate brands and engage audiences effectively.
                    </p>
                </div>

                <div className="grid3">
                    {items.map((it) => (
                        <article key={it.title} className="card">
                            <div className="card__tag">{it.tag}</div>
                            <h3 className="card__title">{it.title}</h3>
                            <p className="muted">{it.desc}</p>
                            <div className="card__bar" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
