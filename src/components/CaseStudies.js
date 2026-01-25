import { Link } from "react-router-dom";

export default function CaseStudies() {
    const studies = [
        {
            brand: "Client 1",
            result: "3.2x ROAS in 30 days",
            desc: "New offer angle + creative testing system across Meta.",
            tags: ["Meta Ads", "Creative Testing", "Ecommerce"],
        },
        {
            brand: "Client 2",
            result: "-28% CAC in 6 weeks",
            desc: "Landing page rebuild + conversion audit + retargeting.",
            tags: ["CRO", "Funnels", "Retargeting"],
        },
        {
            brand: "Client 3",
            result: "2.1x leads, same spend",
            desc: "Repositioning + Google Search restructuring for intent.",
            tags: ["Google Ads", "Copy", "Lead Gen"],
        },
    ];

    return (
        <section className="stack">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "end" }}>
                <div>
                    <h2 style={{ margin: 0 }}>Case Studies</h2>
                    <p className="muted" style={{ marginTop: 8 }}>
                        Proof over promises — results from real campaigns.
                    </p>
                </div>
                <Link to="/contact" className="btn">Request Full Deck</Link>
            </div>

            <div className="grid3">
                {studies.map((s) => (
                    <div className="card" key={s.brand}>
                        <p className="pill" style={{ marginBottom: 10 }}>{s.brand}</p>
                        <h3 style={{ marginTop: 0 }}>{s.result}</h3>
                        <p className="muted">{s.desc}</p>
                        <div className="tagrow">
                            {s.tags.map((t) => (
                                <span className="tag" key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}