import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import ThemeChanger from "./themeChanger";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
    setDropdown(false);
    setSubDropdown(false);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
    setSubDropdown(false);
  };

  const handleSubDropdown = () => {
    setSubDropdown(!subDropdown);
  };

  const handleMobileHeader = () => {
    setHeader(false);
    setDropdown(false);
    setSubDropdown(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white dark:bg-gray-900 shadow-xl flex items-center z-40 ease-in duration-300">
      <div className="mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/">
            <Image height={80} width={80} src={logo} alt="logo" />
          </Link>
        </div>

        {/* ThemeChanger - center on mobile */}
        <div className="flex-1 flex justify-center sm:hidden">
          <ThemeChanger />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block sm:hidden p-4" onClick={handleHeader}>
          {header ? (
            <AiOutlineClose size={30} className="text-black dark:text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-black dark:text-white" />
          )}
        </div>

        {/* Navbar Links and ThemeChanger - desktop */}
        <div className="hidden sm:flex justify-end items-center space-x-8 w-full">
          <ul className="flex items-center space-x-8 text-black dark:text-white">
            <li className="hover:text-orange-500">
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <button
                onClick={handleDropdown}
                className="flex items-center hover:text-orange-500"
              >
                Project{" "}
                {dropdown ? (
                  <FaLongArrowAltUp className="ml-1 transform rotate-0" />
                ) : (
                  <FaLongArrowAltDown className="ml-1 transform rotate-0" />
                )}
              </button>
              {dropdown && (
                <div className="absolute mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 w-48">
                  <button
                    onClick={handleSubDropdown}
                    className="flex items-center justify-between w-full px-4 py-2 text-left hover:text-orange-500"
                  >
                    Residential{" "}
                    {subDropdown ? (
                      <FaLongArrowAltUp className="ml-1 transform rotate-0" />
                    ) : (
                      <FaLongArrowAltDown className="ml-1 transform rotate-0" />
                    )}
                  </button>
                  {subDropdown && (
                    <ul className="pl-4 space-y-2">
                      <li className="hover:text-orange-500">
                        Dipla wellness Beach Resort
                      </li>
                      <li className="hover:text-orange-500">
                        <a
                          href="/assets/brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view pdf
                        </a>
                      </li>
                      <li className="hover:text-orange-500">
                        <a href="/assets/brochure.pdf" download>
                          download pdf
                        </a>
                      </li>
                    </ul>
                  )}
                  <button className="w-full text-left px-4 py-2 hover:text-orange-500">
                    Industrial
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:text-orange-500">
                    Commercial
                  </button>
                </div>
              )}
            </li>
            <li className="hover:text-orange-500">
              <Link href="#about-container">About</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <ThemeChanger />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          header ? "left-0" : "-left-full"
        } absolute top-20 sm:hidden w-full h-screen bg-white dark:bg-gray-900 text-center ease-in duration-300 text-black dark:text-white`}
      >
        <ul className="pt-10 space-y-8">
          <li className="text-2xl hover:text-orange-500">
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>
          <li className="text-2xl hover:text-orange-500">
            <button
              onClick={handleDropdown}
              className="w-full flex items-center justify-center"
            >
              Project{" "}
              {dropdown ? (
                <FaLongArrowAltUp className="ml-2 transform rotate-0" />
              ) : (
                <FaLongArrowAltDown className="ml-2 transform rotate-0" />
              )}
            </button>
            {dropdown && (
              <ul className="space-y-4 text-center">
                <li className="text-xl hover:text-orange-500">
                  <button
                    onClick={handleSubDropdown}
                    className="w-full flex items-center justify-center"
                  >
                    Residential{" "}
                    {subDropdown ? (
                      <FaLongArrowAltUp className="ml-2 transform rotate-0" />
                    ) : (
                      <FaLongArrowAltDown className="ml-2 transform rotate-0" />
                    )}
                  </button>
                  {subDropdown && (
                    <ul className="space-y-2 text-center">
                      <li className="hover:text-orange-500">
                        Dipla wellness Beach Resort
                      </li>
                      <li className="hover:text-orange-500">
                        <a
                          href="/assets/brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view pdf
                        </a>
                      </li>
                      <li className="hover:text-orange-500">
                        <a href="/assets/brochure.pdf" download>
                          download pdf
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="text-xl hover:text-orange-500">Industrial</li>
                <li className="text-xl hover:text-orange-500">Commercial</li>
              </ul>
            )}
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
