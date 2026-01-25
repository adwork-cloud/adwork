export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>© {new Date().getFullYear()} Adwork Inc. All rights reserved.</p>
                <p className="muted">Singapore • hello@adwork.com</p>
            </div>
        </footer>
    );
}
