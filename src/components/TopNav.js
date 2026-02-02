import { content } from "../content/content";
import logo from "../assets/logos/blackBg.png";
const SECTIONS = [
    { id: "home", label: content.nav.home },
    { id: "services", label: content.nav.services },
    { id: "testimonials", label: content.nav.testimonials },
    { id: "about", label: content.nav.about },
];

export default function TopNav({ activeIndex, onGoTo }) {
    return (
        <nav className="topnav">
            <div className="brand">
                <img src={logo} alt="Adwork Logo" className="nav-logo" />
            </div>
            <div className="navlinks">
                {SECTIONS.map((s, idx) => (
                    <button
                        key={s.id}
                        className={`navbtn ${idx === activeIndex ? "active" : ""}`}
                        onClick={() => onGoTo(idx)}
                        type="button"
                    >
                        {s.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
