import React from "react";
import Image from "next/image";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";
import home1 from "../assets/images/home1.jpg";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
import home4 from "../assets/images/home4.jpg";

const Insta = () => {
  return (
    <div className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-20 mb-4 bg-orange-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-black h-8 w-28 font-black text-xs uppercase cursor-pointer">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5 mt-20 max-w-[1300px]">
          {[
            photo1,
            photo2,
            photo3,
            photo4,
            photo5,
            photo6,
            photo7,
            photo8,
            home1,
            home2,
            home3,
            home4,
          ].map((photo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full max-w-xs h-auto rounded-lg hover:scale-110 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insta;
