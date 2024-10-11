import img1 from "../../assets/image/section-image/img-1.webp";
import img2 from "../../assets/image/section-image/img-2.webp";
import img3 from "../../assets/image/section-image/img-3.webp";
import img4 from "../../assets/image/section-image/img-4.webp";
import img5 from "../../assets/image/section-image/img-5.webp";
import img6 from "../../assets/image/section-image/img-6.webp";
import img8 from "../../assets/image/section-image/img-8.webp";
import img9 from "../../assets/image/section-image/img-9.webp";
import img10 from "../../assets/image/section-image/img-10.webp";
import img11 from "../../assets/image/section-image/img-11.webp";
import img12 from "../../assets/image/section-image/img-12.webp";
import EventContent from "../ui/EventContent";

const eventContent = [
  {
    items: [
      { type: "image", src: img1, alt: "Image 1" },
      { type: "text", text: "Upcoming" },
      { type: "image", src: img2, alt: "Image 2" },
      { type: "image", src: img3, alt: "Image 3" },
      { type: "image", src: img4, alt: "Image 4" },
    ],
  },
  {
    items: [
      { type: "image", src: img5, alt: "Image 3" },
      { type: "image", src: img6, alt: "Image 4" },
      { type: "image", src: img9, alt: "Image 1" },
      { type: "text", text: "Events" },
      { type: "image", src: img8, alt: "Image 2" },
    ],
  },
  {
    items: [
      { type: "image", src: img9, alt: "Image 2" },
      { type: "text", text: "2024" },
      { type: "image", src: img10, alt: "Image 3" },
      { type: "image", src: img11, alt: "Image 4" },
      { type: "image", src: img12, alt: "Image 1" },
    ],
  },
];

const Events = () => {
  return (
    <>
            <div className="section-space antialiased"></div>
      <section className="marquee-container   text-white antialiased" id="marqu">
    <EventContent eventContent={eventContent} />
    </section>
    <div className="section-space antialiased"></div>
</>

  )
  

};

export default Events;