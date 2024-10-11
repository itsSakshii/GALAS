import AboutContent from "../ui/AboutContent";
import img1 from "../../assets/image/section-image/about.webp";

export default function About() {
  const aboutContent = {
    heading: "Who We Are",
    subHeading: "Why Choose Us",
    description: "Transforming Visions into Unforgettable Experiences with blockbuster evenings and enthusiastic performances presented by famous faces.",
    subDescription: "We specialize in turning your event dreams into reality, from energetic DJ nights and music events to professional corporate gatherings.",
    linkUrl: "",
  };

  return (
    <>
      <div className="section-space"></div>
      <section className="about-section antialiased">
        <AboutContent
          content={aboutContent}
          image={img1}
          imageAlt="About Image"
        />
      </section>
      <div className="section-space"></div>
    </>
  );
}
