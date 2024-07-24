import Image from "next/image";
import React from "react";
import about1 from "../assets/images/about1.png";

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="mt-24 mb-4 bg-[#EFE1D1] dark:bg-[#334756] text-black dark:text-white px-4 py-1 rounded-2xl h-8 w-28 font-black text-xs uppercase cursor-pointer">
          ABOUT
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative dark:text-gray-300">
            Welcome to Dipla wellness Beach Resort
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20 text-bluePText">
          Real estate is property consisting of land and the buildings on it,
          along with its natural resources such as crops,
          <br /> minerals or water, immovable property of this nature; an
          interest vested in this (also) an item of real property,
          <br /> (more generally) buildings or housing in general.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-12">
        <div className="bg-white py-12 px-6 h-64 w-72 sm:w-80 lg:w-96 mr-0 sm:mr-6 flex flex-col justify-center items-center rounded-xl mb-5 dark:bg-slate-700 shadow-lg dark:shadow-[0_2px_6px_rgba(255,255,0,0.5)]">
          <Image src={about1} height={150} width={150} alt="onephoto" />
          <p className="font-medium text-xl sm:text-2xl lg:text-3xl leading-10 text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-6 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>

        <div className="bg-white py-12 px-6 h-64 w-72 sm:w-80 lg:w-96 mr-0 sm:mr-6 flex flex-col justify-center items-center rounded-xl mb-5 dark:bg-slate-700 shadow-lg dark:shadow-[0_2px_6px_rgba(255,255,0,0.5)]">
          <Image src={about1} height={150} width={150} alt="onephoto" />
          <p className="font-medium text-xl sm:text-2xl lg:text-3xl leading-10 text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-6 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>

        <div className="bg-white py-12 px-6 h-64 w-72 sm:w-80 lg:w-96 flex flex-col justify-center items-center rounded-xl mb-5 dark:bg-slate-700 shadow-lg dark:shadow-[0_2px_6px_rgba(255,255,0,0.5)]">
          <Image src={about1} height={150} width={150} alt="onephoto" />
          <p className="font-medium text-xl sm:text-2xl lg:text-3xl leading-10 text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-6 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
    </div>
  );
}
