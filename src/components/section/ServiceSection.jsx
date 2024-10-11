import React, { useRef, useEffect } from "react";
import img1 from "../../assets/image/section-image/service-1.webp";
import img2 from "../../assets/image/section-image/service-2.webp";
import img3 from "../../assets/image/section-image/service-3.webp";
import useServiceAnim from "../../hooks/useServiceAnim";
import ServiceContent from "../ui/ServiceContent";

const servicesData = [
  {
    id: 1,
    title: "DJ Nights",
    description: "At our vibrant DJ Nights, we bring the pulsating energy of the dance floor.",
    img: img1,
    points: [
      "Electrifying beats",
      "Unforgettable evenings",
      "Talented DJs",
    ],
  },
  {
    id: 2,
    title: "Music Events",
    description: "Join us for exhilarating music events that showcase talented artists.",
    img: img2,
    points: [
      "Diverse talent",
      "Live shows",
      "Memorable vibes",
    ],
  },
  {
    id: 3,
    title: "Corporate Events",
    description: "At our corporate events, we create an engaging atmosphere that fosters networking and collaboration.",
    img: img3,
    points: [
      "Networking opportunities",
      "Engaging workshops",
      "Inspiring presentations",
    ],
  },
];

export default function Services() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Remove unused refs for optimization
    serviceRefs.current = serviceRefs.current.slice(0, servicesData.length);
  }, [servicesData.length]);

  useServiceAnim(serviceRefs.current);

  return (
    <section className="services flex flex-col antialiased">
      <div className="container mx-auto p-6 antialiased">
        <div className="heading">
          <h2 className="text-center">
            All <span className="text-teal-200">Services</span>
          </h2>
        </div>
        <div className="section-space-inner"></div>
        {servicesData.map(({ id, title, description, img, points }, index) => (
          <div ref={(el) => (serviceRefs.current[index] = el)} key={id}>
            <ServiceContent
              title={title}
              description={description}
              img={img}
              points={points}
            />
          </div>
        ))}
      </div>
      <div className="section-space antialiased"></div>
    </section>
  );
}
