export default function About() {
    return (
        <div className="stack">
            <h1>About</h1>
            <p className="lead">
                We’re a modern advertising agency blending creative + performance marketing.
            </p>

            <div className="card">
                <h3>Our approach</h3>
                <p className="muted">
                    We start with positioning and offer clarity, then build a repeatable creative
                    testing engine across channels. Results come from iteration, not guesses.
                </p>
            </div>

            <div className="grid3">
                <div className="card">
                    <h3>Strategy</h3>
                    <p className="muted">Funnels, messaging, and growth plans.</p>
                </div>
                <div className="card">
                    <h3>Execution</h3>
                    <p className="muted">Ads, creatives, landing pages, optimization.</p>
                </div>
                <div className="card">
                    <h3>Scale</h3>
                    <p className="muted">Increase budget safely with better data.</p>
                </div>
            </div>
        </div>
    );
}