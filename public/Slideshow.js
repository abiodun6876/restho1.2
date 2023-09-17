'use client'
import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for styling

const slidesData = [
  {
    imageSrc: 'image1.jpg',
    title: 'Food 1',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    imageSrc: 'image2.jpg',
    title: 'Food 2',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    imageSrc: 'image3.jpg',
    title: 'Food 3',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
  {
    imageSrc: 'image4.jpg',
    title: 'Food 4',
    description: 'Lorem ipsum dolor sit amet consectet.',
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-content">
              <img
                src={slide.imageSrc}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
              <div className="info">
                <h2 className="product-title">{slide.title}</h2>
                <p className="product-description">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-circles">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`slider-circle ${index === currentSlide ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
