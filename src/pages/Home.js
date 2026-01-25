import { Link } from "react-router-dom";
import CaseStudies from "../components/CaseStudies";
import heroBg from "./../assets/logos/webBg.png";

export default function Home() {
    return (
        <div className="stack">
            <section className="hero" style={{
                backgroundImage: `url(${heroBg})`,
            }}>
                <div className="hero-left">
                    <p className="pill">Performance • Creative • Strategy</p>
                    <h1>We help brands grow with ads that convert.</h1>
                    <p className="lead">
                        Full-service advertising agency for modern brands — from paid social to
                        creative production and landing page optimization.
                    </p>

                    <div className="row">
                        <Link to="/contact" className="btn primary">Get a Proposal</Link>
                        <Link to="/services" className="btn">View Services</Link>
                    </div>

                    <div className="trust">
                        <span className="muted">Trusted by</span>
                        <div className="logos">
                            <div className="logo">Brand A</div>
                            <div className="logo">Brand B</div>
                            <div className="logo">Brand C</div>
                            <div className="logo">Brand D</div>
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="card">
                        <h3>What we do</h3>
                        <ul>
                            <li>Paid Ads: Meta, Google, TikTok</li>
                            <li>Creative: UGC, shoots, editing</li>
                            <li>Strategy: funnels, positioning</li>
                            <li>Optimization: CRO + tracking</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="grid3">
                <div className="card">
                    <h3>Performance-first</h3>
                    <p>We build campaigns around CAC, ROAS, and pipeline — not vanity metrics.</p>
                </div>
                <div className="card">
                    <h3>Creative that sells</h3>
                    <p>Iterative testing system to find winning hooks, angles, and offers.</p>
                </div>
                <div className="card">
                    <h3>Transparent reporting</h3>
                    <p>Weekly updates + dashboard so you always know what’s working.</p>
                </div>
            </section>
            <CaseStudies />
            <section className="cta-banner">
                <h2>Ready to scale your next campaign?</h2>
                <p className="muted">Tell us your goals — we’ll reply within 24 hours.</p>
                <Link to="/contact" className="btn primary">Contact Us</Link>
            </section>
        </div>
    );
}