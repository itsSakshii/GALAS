import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const usePreloaderAnimation = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const counterElement = document.querySelector(".counter-number");
        const preloaderElement = document.querySelector(".preloader");
        const loadervdos = document.querySelectorAll(".vdoData");
        const contentElements = document.querySelectorAll(".content, .counter-number");
        const loadingPoints = [5, 30, 60, 90];

        let currentValue = 0;

        const updateCounter = () => {
           
            if (currentValue < 100) {
                currentValue++;
                counterElement.textContent = currentValue;
                loadingPoints.forEach((point, index) => {
                    if (currentValue === point) {
                        gsap.to(loadervdos[index], { opacity: 1, duration: 0.5, ease: "power2.inOut" });
                    }
                });

                requestAnimationFrame(updateCounter);
            } else {
              
                gsap.timeline({
                    onComplete: () => {
                        preloaderElement.style.display = "none";
                        setIsLoaded(true);
                    },
                })
                .to(loadervdos, { scale: 1.1, duration: 1, ease: "power2.inOut", stagger: 0.2 })
                .to(contentElements, { opacity: 0, duration: 1, ease: "power2.inOut" })
                .to(".preloader-inner", { opacity: 0, duration: 1 });
            }
        };

        const startDelay = 2000;
        const timerId = setTimeout(() => {
            requestAnimationFrame(updateCounter);
        }, startDelay);

        return () => clearTimeout(timerId);
    }, []);

    return isLoaded;
};

export default usePreloaderAnimation;
