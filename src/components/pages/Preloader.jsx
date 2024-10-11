import React, { useEffect, useState } from "react";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import PreloaderContent from "../ui/PreloaderContent";
import usePreloaderAnimation from "../../hooks/usePreloaderAnimation";
import Home from "./Home";
import PageTransition from "../ui/PageTransition";

const Preloader = () => {
  const isLoaded = usePreloaderAnimation();
  const [showTransition, setShowTransition] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const vdoData = {
    vdoData1: { src: video1, alt: "Loader 1" },
    vdoData2: { src: video2, alt: "Loader 2" },
    vdoData3: { src: video3, alt: "Loader 3" },
    vdoData4: { src: video4, alt: "Loader 4" },
  };

  const textData = {
    number: "0",
    message: "Get ready for your\nUnforgettable Experience",
  };

  useEffect(() => {
    if (isLoaded) {
      // Show PageTransition first
      setShowTransition(true);

      // Delay showing Home section after the page transition finishes
      const transitionTimeout = setTimeout(() => {
        setShowHome(true);
      }, 1800); // Adjust this timing to match the animation in the PageTransition

      // Clear the timeout if the component unmounts
      return () => clearTimeout(transitionTimeout);
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && (
        <section className="preloader container mx-auto px-8 flex flex-col items-center justify-center h-screen relative">
          <div className="preloader-inner sm:px-6 lg:px-10 w-full max-w-full lg:max-w-6xl z-20">
            <div className="preloader-inner-content grid grid-cols-[1.5fr_1fr_1.5fr] gap-4 grid-rows-[1fr_auto_1fr] h-screen rounded-lg py-4 transition-all duration-500 ease-in-out">
              <PreloaderContent
                vdoContent={vdoData.vdoData1}
                alignment="items-end flex-row-reverse"
              />
              <div className="inner-content-2 h-44 w-1/2 "></div>
              <PreloaderContent
                vdoContent={vdoData.vdoData2}
                alignment="items-start"
              />
              <div className="inner-content-4 col-span-3 flex flex-col justify-center items-center h-30">
                <div className="content flex justify-center gap-2 transition-transform duration-300 ease-in-out">
                  <span className="counter-number w-12 text-right ">{textData.number}</span>
                  <span className="border-l border-teal-400 pl-2">
                    {textData.message.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== textData.message.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
              <PreloaderContent
                vdoContent={vdoData.vdoData3}
                alignment="items-start flex-row-reverse"
              />
              <div className="inner-content-6 h-44"></div>
              <PreloaderContent
                vdoContent={vdoData.vdoData4}
                alignment="items-end"
              />
            </div>
          </div>
        </section>
      )}

      {/* Show PageTransition and Home when ready */}
      {showTransition && (
        <PageTransition>
          {showHome && <Home />}
        </PageTransition>
      )}
    </>
  );
};

export default Preloader;
