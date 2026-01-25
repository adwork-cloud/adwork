export default function Services() {
    const services = [
        { title: "Paid Social", desc: "Meta & TikTok ads, targeting, testing frameworks." },
        { title: "Google Ads", desc: "Search, PMax, YouTube — intent-based growth." },
        { title: "Creative Production", desc: "UGC briefs, editing, ad creatives, hooks & angles." },
        { title: "Landing Pages + CRO", desc: "Wireframes, copy, A/B tests, conversion audits." },
        { title: "Analytics + Tracking", desc: "Pixel/CAPI setup, GA4, events, attribution." },
        { title: "Strategy & Consulting", desc: "Positioning, offers, funnels, launch plans." },
    ];

    return (
        <div className="stack">
            <h1>Services</h1>
            <p className="lead">Everything you need to launch, optimize, and scale.</p>

            <div className="grid3">
                {services.map((s) => (
                    <div className="card" key={s.title}>
                        <h3>{s.title}</h3>
                        <p className="muted">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}