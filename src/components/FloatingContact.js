import { createPortal } from "react-dom";
import { PhoneCall } from "lucide-react";

export default function FloatingContact({ onClick, hidden }) {
    return (
        <button
            className={`floating-contact ${hidden ? "hide" : ""}`}
            onClick={onClick}
            type="button"
        >
            <PhoneCall size={18} />
            Contact Us
        </button>
    );
}

