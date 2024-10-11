import { useEffect, useRef } from "react";
import gsap from "gsap";

const useMenuAnim = (isOpen) => {
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const menuElement = menuRef.current;
    const logoElement = logoRef.current;

  
    if (menuElement && logoElement) {
      gsap.to(menuElement, {
        y: isOpen ? "0%" : "-100%",
        opacity: isOpen ? 1 : 0,
        duration: isOpen ? 0.75 : 0.6,
        ease: isOpen ? "power4.out" : "power4.in",
        pointerEvents: isOpen ? "auto" : "none",
        delay: isOpen ? 0.8 : 0,
      });

   
    }

  }, [isOpen]);

  return [menuRef, logoRef];
};

export default useMenuAnim;
