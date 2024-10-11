import herovdo from "../../assets/videos/herovdo.mp4";


export default function HeroSection() {
  
  
  return (
    <>
      {/* Preload the LCP image */}
      <section className="hero-section relative antialiased">
        <div className="container mx-auto  antialiased">
          <div className="hero-section-banner antialiased">
            <div id="scene">
              <div className="w-full lg:h-[80vh]">
                <video
                  className="hero-banner w-full h-full object-cover rounded-lg antialiased"
                  autoPlay
                  loop
                  muted
                  playsInline
                 
                >
                  <source src={herovdo} type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-space-inner antialiased"></div>
    </>
  );
}
