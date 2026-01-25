import { NavLink, Link } from "react-router-dom";
import brandLogo from "./../assets/logos/blackBg.png";

export default function Navbar() {
    return (
        <header className="nav">
            <div className="nav-inner">
                <Link to="/" className="brand">
                    <img src={brandLogo} alt="Adwork Inc Logo" className="brand-logo" />
                </Link>

                <nav className="nav-links">
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact" className="cta">
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}