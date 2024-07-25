import React, { useState } from "react";
import Image from "next/image";
import banner from "../assets/images/banner.jpg";
// import banner2 from "../assets/images/banner2.jpg";
// import banner3 from "../assets/images/banner3.jpg";
// import banner4 from "../assets/images/banner4.jpg";
// import banner5 from "../assets/images/banner5.jpg";
// import banner6 from "../assets/images/banner6.jpg";
// import banner7 from "../assets/images/banner7.jpg";
// import banner8 from "../assets/images/banner8.jpg";
// import banner9 from "../assets/images/banner9.jpg";
// import banner10 from "../assets/images/banner10.jpg";
// import banner11 from "../assets/images/banner11.jpg";
// import banner12 from "../assets/images/banner12.jpg";

const Photos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [currentFullScreenSlide, setCurrentFullScreenSlide] = useState(0);

  const totalSlides = 12; // Number of images

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const openFullScreen = (index) => {
    setFullScreenMode(true);
    setCurrentFullScreenSlide(index);
    document.body.style.overflow = "hidden"; // Prevent body scroll
  };

  const closeFullScreen = () => {
    setFullScreenMode(false);
    document.body.style.overflow = "auto"; // Allow body scroll
  };

  const nextFullScreenSlide = () => {
    setCurrentFullScreenSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevFullScreenSlide = () => {
    setCurrentFullScreenSlide(
      (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
    );
  };

  // Define images for each slide
  const images = [
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
    banner,
  ];

  return (
    <div className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-10 mb-4 bg-[#EFE1D1] dark:bg-[#334756] text-black dark:text-white px-4 py-1 rounded-2xl h-8 w-28 font-black text-xs uppercase cursor-pointer">
          Photos
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-14 dark:text-gray-300">
            Checkout our Photos
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center relative max-w-[1300px] w-full p-5">
        <button
          onClick={prevSlide}
          className="bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-400"
        >
          &#10094;
        </button>

        <div className="relative overflow-hidden w-full mx-2">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <a
                  onClick={() => openFullScreen(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={src}
                    alt={`photo ${index + 1}`}
                    className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                    width={1000}
                    height={600}
                    // Adjust sizes for different screen sizes
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-400"
        >
          &#10095;
        </button>
      </div>

      {/* Full Screen Mode */}
      {fullScreenMode && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={prevFullScreenSlide}
            className="absolute left-4 text-white text-3xl font-bold"
          >
            &#10094;
          </button>

          <button
            onClick={nextFullScreenSlide}
            className="absolute right-4 text-white text-3xl font-bold"
          >
            &#10095;
          </button>

          <Image
            src={images[currentFullScreenSlide]}
            alt={`full-screen photo ${currentFullScreenSlide + 1}`}
            className="w-auto h-auto max-h-full object-contain"
            width={1600}
            height={900}
          />
        </div>
      )}
    </div>
  );
};

export default Photos;
