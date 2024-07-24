import React, { useState } from "react";
import Image from "next/image";
import banner from "../assets/images/banner.jpg";

const Photos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12; // Number of images

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

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
            checkout our Photos
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center relative max-w-[1300px] w-full p-5">
        {/* Navigation buttons */}
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
            {[...Array(12).keys()].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <Image
                  src={banner}
                  alt={`photo ${index + 1}`}
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
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
    </div>
  );
};

export default Photos;
