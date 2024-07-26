import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import banner from "../assets/images/banner.jpg";
import heroBackground from "../assets/images/heroBackground.png";

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

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const fullScreenHandlers = useSwipeable({
    onSwipedLeft: () => nextFullScreenSlide(),
    onSwipedRight: () => prevFullScreenSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Define images for each slide
  const images = [
    banner,
    heroBackground,
    banner,
    heroBackground,
    banner,
    heroBackground,
    banner,
    heroBackground,
    banner,
    heroBackground,
    banner,
    heroBackground,
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

      <div className="flex justify-center items-center relative w-full py-5 sm:p-5">
        <button
          onClick={prevSlide}
          className="bg-[#EFE1D1] dark:bg-[#334756] text-black dark:text-white p-[0.3rem] sm:p-2 rounded-full shadow-lg"
        >
          <FaAngleLeft />
        </button>

        <div
          {...handlers}
          className="relative overflow-hidden w-full mx-3 sm:mx-10"
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-[300px] sm:h-[600px]"
              >
                <a
                  onClick={() => openFullScreen(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={src}
                    alt={`photo ${index + 1}`}
                    className="w-[100%] h-[100%] object-cover"
                    width={1000}
                    height={600}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-[0.3rem] sm:p-2 rounded-full shadow-lg bg-[#EFE1D1] dark:bg-[#334756] text-black dark:text-white"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* Full Screen Mode */}
      {fullScreenMode && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeFullScreen}
        >
          <div
            {...fullScreenHandlers}
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={images[currentFullScreenSlide]}
                alt={`full-screen photo ${currentFullScreenSlide + 1}`}
                className="max-h-[800px] object-contain"
                width={1600}
                height={900}
              />
              <button
                onClick={closeFullScreen}
                className="absolute top-[-32px] right-[1px] text-white"
              >
                <ImCross className="m-2" />
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevFullScreenSlide();
              }}
              className="absolute left-4 text-white text-3xl font-bold"
            >
              <FaAngleLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextFullScreenSlide();
              }}
              className="absolute right-4 text-white text-3xl font-bold"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
