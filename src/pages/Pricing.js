import { Link } from "react-router-dom";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "S$1,500/mo",
            desc: "For small brands testing performance ads.",
            items: ["1 channel", "Monthly reporting", "Creative guidance"],
        },
        {
            name: "Growth",
            price: "S$3,500/mo",
            desc: "For scaling brands that want consistent results.",
            items: ["2–3 channels", "Weekly reporting", "Creative testing system", "CRO review"],
            featured: true,
        },
        {
            name: "Scale",
            price: "Custom",
            desc: "For aggressive scaling + multi-market growth.",
            items: ["Full funnel", "Advanced tracking", "Creative production", "Dedicated team"],
        },
    ];

    return (
        <div className="stack">
            <h1>Pricing</h1>
            <p className="lead">Simple plans. Clear deliverables. No hidden fees.</p>

            <div className="grid3">
                {plans.map((p) => (
                    <div className={`card ${p.featured ? "featured" : ""}`} key={p.name}>
                        <h3>{p.name}</h3>
                        <p className="price">{p.price}</p>
                        <p className="muted">{p.desc}</p>
                        <ul>
                            {p.items.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                        <Link to="/contact" className="btn primary" style={{ marginTop: 12 }}>
                            Talk to Us
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}