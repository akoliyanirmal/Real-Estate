import React from "react";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t-2 border-solid border-[#EDEFF2] dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-3">
          <Link href="/" className="flex items-center justify-center">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <div className="text-bluePText dark:text-white text-lg font-semibold">
            Ropsan
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed dark:text-gray-300 text-bluePText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {["About", "Careers", "History", "Services", "Projects", "Blog"].map(
            (item) => (
              <li key={item}>
                <Link
                  className="text-bluePText dark:text-white dark:hover:text-orange-500 hover:text-orange-500"
                  href="/"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        <p className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText dark:text-white mt-6">
          © 2024. All rights reserved by Dipla Wellness Beach Resort
        </p>

        <div className="flex justify-center gap-4 mt-4 text-bluePText dark:text-white">
          <Link href="/" className="hover:text-orange-500">
            <GrInstagram size={30} />
          </Link>
          <Link href="/" className="hover:text-orange-500">
            <BsFacebook size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
