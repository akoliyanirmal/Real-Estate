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
            Checkout our Photos
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
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-1">
                <Image
                  src={banner}
                  alt="photo 1"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-2">
                <Image
                  src={banner}
                  alt="photo 2"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-3">
                <Image
                  src={banner}
                  alt="photo 3"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-4">
                <Image
                  src={banner}
                  alt="photo 4"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-5">
                <Image
                  src={banner}
                  alt="photo 5"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-6">
                <Image
                  src={banner}
                  alt="photo 6"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-7">
                <Image
                  src={banner}
                  alt="photo 7"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-8">
                <Image
                  src={banner}
                  alt="photo 8"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-9">
                <Image
                  src={banner}
                  alt="photo 9"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-10">
                <Image
                  src={banner}
                  alt="photo 10"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-11">
                <Image
                  src={banner}
                  alt="photo 11"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full">
              <a href="link-to-page-12">
                <Image
                  src={banner}
                  alt="photo 12"
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                  width={1000}
                  height={600}
                />
              </a>
            </div>
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
