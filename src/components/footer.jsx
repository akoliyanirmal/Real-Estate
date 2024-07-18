import React from "react";
import Link from "next/link";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import logo from "../assets/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative p-4 mb-4 mx-2 sm:mx-[10px] border-t-2 border-solid border-[#EDEFF2]">
      {/* Row 1 */}
      <div className="sm:flex justify-center items-center py-10 sm:py-12 px-2">
        {/* Logo */}
        <div className="text-2xl text-center leading-[30px] font-bold text-[#4D5E80] capitalize mb-10 sm:mb-0 dark:text-white">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              layout="responsive"
            />
          </Link>
        </div>
        {/* Menu */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-10 sm:w-[450px]">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            <li>
              <Link href="/" className="py-2 hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 hover:text-orange-500">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/* Rating */}
        <div className="flex flex-col items-center sm:items-start gap-1 mt-5 sm:mt-0">
          <div className="flex">
            <TbStarFilled
              alt="ratings"
              className="w-[22px] h-[22px] text-blue-700"
            />
            <TbStarFilled
              alt="ratings"
              className="w-[22px] h-[22px] text-blue-700"
            />
            <TbStarFilled
              alt="ratings"
              className="w-[22px] h-[22px] text-blue-700"
            />
            <TbStarFilled
              alt="ratings"
              className="w-[22px] h-[22px] text-blue-700"
            />
            <TbStarHalfFilled
              alt="ratings"
              className="w-[22px] h-[22px] text-blue-700"
            />
          </div>
          <div className="flex justify-center items-center p-2">
            <p className="text-sm">5.2M satisfied customers</p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative py-0 px-2 sm:px-[340px] border-t-2 border-solid border-[#EDEFF2] flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText dark:text-white">
          © 2024 Company. All Rights Reserved.
        </p>
        <div className="flex items-center sm:items-start p-4 gap-2 sm:gap-5">
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
          >
            terms
          </Link>
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
          >
            privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
