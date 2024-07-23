import React from "react";
import Image from "next/image";
import banner from "../assets/images/banner.jpg";

const Photos = () => {
  return (
    <div className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-10 mb-4 bg-orange-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-black h-8 w-28 font-black text-xs uppercase cursor-pointer">
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

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5 mt-10 max-w-[1300px]">
          <Image
            src={banner}
            alt="photo 1"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 2"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 3"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 4"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 5"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 6"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 7"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 8"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 9"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 10"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 11"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={banner}
            alt="photo 12"
            className="w-[300px] h-[265px] rounded-lg hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;

// import photo1 from "../assets/images/photo1.jpg";
// import photo2 from "../assets/images/photo2.jpg";
// import photo3 from "../assets/images/photo3.jpg";
// import photo4 from "../assets/images/photo4.jpg";
// import photo5 from "../assets/images/photo5.jpg";
// import photo6 from "../assets/images/photo6.jpg";
// import photo7 from "../assets/images/photo7.jpg";
// import photo8 from "../assets/images/photo8.jpg";
// import home1 from "../assets/images/home1.jpg";
// import home2 from "../assets/images/home2.jpg";
// import home3 from "../assets/images/home3.jpg";
// import home4 from "../assets/images/home4.jpg";
