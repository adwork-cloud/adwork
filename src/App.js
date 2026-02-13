import { useEffect, useRef, useState } from "react";
import "./App.css";

import TopNav from "./components/TopNav";
import HomeSection from "./components/HomeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";



export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const els = sectionRefs.current.filter(Boolean);
        if (!els.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (!visible) return;
                const idx = Number(visible.target.dataset.index);
                if (!Number.isNaN(idx)) setActiveIndex(idx);
            },
            { root: null,
                threshold: [0.35, 0.5, 0.65],
                rootMargin: "-80px 0px 0px 0px" // navbar height
            }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const goTo = (idx) => {
        const el = sectionRefs.current[idx];
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // helper to set refs by index
    const setSectionRef = (idx) => (el) => {
        sectionRefs.current[idx] = el;
    };

    return (
        <>
            <TopNav activeIndex={activeIndex} onGoTo={goTo} />
            {activeIndex !== 4 && (
                <FloatingContact onClick={() => goTo(4)} />
            )}
            <main className="page">
                <HomeSection
                    active={activeIndex === 0}
                    index={0}
                    setRef={setSectionRef(0)}
                    onGetStarted={() => goTo(4)}
                />
                <ServicesSection
                    active={activeIndex === 1}
                    index={1}
                    setRef={setSectionRef(1)}
                />
                <TestimonialsSection
                    active={activeIndex === 2}
                    index={2}
                    setRef={setSectionRef(2)}
                />

                <AboutSection
                    active={activeIndex === 3}
                    index={3}
                    setRef={setSectionRef(3)}
                />
                <ContactSection
                    active={activeIndex === 4}
                    index={4}
                    setRef={setSectionRef(4)}
                />
            </main>


        </>
    );
}
