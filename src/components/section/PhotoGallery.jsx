import React, { useState, useRef, useEffect } from "react";
import PhotoGalleryContent from "../ui/PhotoGalleryContent"; 
import img1 from "../../assets/image/photogallery/img-1.webp";
import img2 from "../../assets/image/photogallery/img-2.webp";
import img3 from "../../assets/image/photogallery/img-3.webp";
import img4 from "../../assets/image/photogallery/img-4.webp";
import img5 from "../../assets/image/photogallery/img-5.webp";
import img6 from "../../assets/image/photogallery/img-6.webp";
import img7 from "../../assets/image/photogallery/img-7.webp";
import img8 from "../../assets/image/photogallery/img-8.webp";
import img9 from "../../assets/image/photogallery/img-9.webp";

export default function PhotoGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const images = [img1, img9, img7, img4, img2, img3, img5, img6, img8];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const carouselInner = carouselRef.current;
    if (carouselInner) {
      if (isPaused) {
        const computedStyle = window.getComputedStyle(carouselInner);
        const matrix = new WebKitCSSMatrix(computedStyle.transform);
        carouselInner.style.transform = `translateX(${matrix.m41}px)`;
      }
    }
  }, [isPaused]);

  return (
    <section className="carousel-wrapper overflow-hidden relative antialiased">
      <div className="section-space-inner"></div>
      <div 
        ref={carouselRef}
        className={`carousel-inner flex gap-4 container mx-auto px-6 antialiased ${isPaused ? 'paused' : ''}`}
      >
        {images.map((image, index) => (
          <PhotoGalleryContent 
            image={image} 
            index={index} 
            key={index} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="section-space-inner"></div>
    </section>
  ); 
}
