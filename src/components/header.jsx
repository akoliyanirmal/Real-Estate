import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [header, setHeader] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  return (
    <div
      style={{ background: "white" }}
      className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + logo */}
      <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <Image height={80} width={80} src={logo} alt="logo" />
          </Link>
        </div>

        {/* Navbar Links - desktop */}
        <ul className="hidden sm:flex items-center space-x-8">
          <li className="hover:text-orange-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link href="#about-container">About</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="block sm:hidden p-4" onClick={handleHeader}>
          {header ? (
            <AiOutlineClose size={30} style={{ color: "black" }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: "black" }} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          header ? "absolute" : "absolute -left-full"
        } top-20 sm:hidden w-full h-screen bg-[#020308ea] text-center ease-in duration-300 text-white`}
      >
        <ul className="pt-10 space-y-8">
          <li className="text-2xl hover:text-orange-500">
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>
          <li className="text-2xl hover:text-orange-500">
            <Link href="#about-container" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="text-2xl hover:text-orange-500">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
