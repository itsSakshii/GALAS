import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis"; // Import Lenis

gsap.registerPlugin(ScrollTrigger);

const useMarqueeAnim = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Customize the scroll duration
      easing: (t) => t, // Customize the easing function
      smooth: true, // Enable smooth scrolling
    });

    const raf = (time) => {
      lenis.raf(time); // Call Lenis on each animation frame
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf); // Start the animation frame loop

    const animateChars = (chars, reverse = false) => {
      const staggerOptions = { each: 0.35, from: reverse ? "start" : "end", ease: "linear" };
      gsap.fromTo(
        chars,
        { fontWeight: 100 },
        {
          fontWeight: 900,
          duration: 1,
          ease: "none",
          stagger: staggerOptions,
          scrollTrigger: {
            trigger: chars[0].closest(".marquee-container"),
            start: "50% bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    };

    const marqueeContainers = document.querySelectorAll(".marquee-container");
    const marqueeOffsets = [
      { start: "0%", end: "-15%" },
      { start: "0%", end: "15%" },
      { start: "0%", end: "-15%" },
    ];

    marqueeContainers.forEach((container) => {
      const marquees = container.querySelectorAll(".marquee");
      marquees.forEach((marquee, i) => {
        const words = marquee?.querySelectorAll(".item h4");
        if (words.length > 0) {
          const { start, end } = marqueeOffsets[i % marqueeOffsets.length];
          gsap.fromTo(marquee, {
            x: start,
          }, {
            x: end,
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "150% top",
              scrub: true,
            },
          });
          words.forEach((word) => {
            const chars = new SplitType(word, { types: "chars" }).chars;
            if (chars.length) {
              animateChars(chars, i % 2 !== 0);
            }
          });
        }
      });
    });

    return () => {
      lenis.destroy(); // Cleanup Lenis on component unmount
    };
  }, []);
};

export default useMarqueeAnim;
