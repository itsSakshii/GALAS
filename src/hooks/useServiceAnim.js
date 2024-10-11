import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // Import Lenis

gsap.registerPlugin(ScrollTrigger);

const useServiceAnim = (servicesRefs) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
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

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".imge");

          // Use gsap.fromTo with better parameters for smoother animation
          gsap.fromTo(imgContainer, { width: "30%" }, {
            width: "100%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              end: "bottom top",
              scrub: 1,
              once: true,
            },
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    servicesRefs.forEach((service) => {
      if (service) {
        observer.observe(service);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer
      lenis.destroy(); // Cleanup Lenis on component unmount
    };
  }, [servicesRefs]);
};

export default useServiceAnim;
