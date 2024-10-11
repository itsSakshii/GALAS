import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const loaderBgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation for page entry
    tl.to(loaderBgRef.current, {
      height: "100%",
      opacity: 1,
      duration: 1.5,
      ease: "power4.inOut",
    })
      .to(loaderBgRef.current, {
        height: "0%",
        opacity: 0,
        duration: 1.5,
        ease: "power4.inOut",
        delay: 0.3, // Delay before the loader goes back up
      })
      .fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
      );

    return () => {
      const exitTl = gsap.timeline();

      // Animation for page exit
      exitTl.to(containerRef.current, {
        opacity: 0,
        y: 20, // Keep the exit down movement minimal
        duration: 0.5,
        ease: "power4.inOut",
      })
      .to(loaderBgRef.current, {
        height: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power4.inOut",
      })
      .to(loaderBgRef.current, {
        height: "0%",
        opacity: 0,
        duration: 1.5,
        ease: "power4.inOut",
        delay: 0.3,
      });
    };
  }, [location.pathname]);

  return (
    <>
      <div
        className="loader-bg fixed inset-0 bg-teal-200 z-30 top-0"
        style={{ height: "0%", opacity: 0 }}
        ref={loaderBgRef}
      ></div>
      <div ref={containerRef} style={{ willChange: "opacity, transform" }}>
        {children}
      </div>
    </>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
