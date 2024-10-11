import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import CircleType from "circletype";
import Lenis from "@studio-freight/lenis"; // Import Lenis

const CircleText = ({ text }) => {
    const circleTextRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 0.5, // Customize the scroll duration
            easing: (t) => t, // Customize the easing function
            smooth: true, // Enable smooth scrolling
        });

        const raf = (time) => {
            lenis.raf(time); // Call Lenis on each animation frame
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf); // Start the animation frame loop

        const circleTypeInstance = new CircleType(circleTextRef.current);

        // GSAP animation for rotating the text
        gsap.to(circleTextRef.current.closest(".circle-round"), {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
        });

        return () => {
            circleTypeInstance.destroy(); // Cleanup CircleType instance
            lenis.destroy(); // Cleanup Lenis instance on component unmount
        };
    }, []);

    return (
        <div className="circle-round" style={{ width: "150px", height: "150px" }}>
            <div
                id="circle-text"
                className="circle-round-text"
                ref={circleTextRef}
            >
                {text}
            </div>
        </div>
    );
};

CircleText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default CircleText;
