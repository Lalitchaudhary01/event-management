import React, { useState, useEffect } from "react";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds (10,000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={prevImage}
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-l-lg"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-r-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
