import {content} from "../content/content";
import logo from "../assets/logos/blackBg.png";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Brand */}
                <div className="footer-brand">
                    <h2 className="brand-name">{content.brandName}</h2>
                    <p className="brand-tagline">
                        {content.tagline}
                    </p>

                    <img src={logo} alt="AdWork Logo" className="footer-brand-logo" />

                </div>


                {/* Copyright */}
                <h6 className="footer-copy">
                    {content.trademark}
                </h6>
            </div>
        </footer>
    );
}
