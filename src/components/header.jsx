import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import ThemeChanger from "./themeChanger";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

const Header = () => {
  const [header, setHeader] = useState(false);

  const [projectDropdown, setProjectDropdown] = useState(false);
  const [residentialDropdown, setResidentialDropdown] = useState(false);
  const [beachResortDropdown, setBeachResortDropdown] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
    setProjectDropdown(false);
    setResidentialDropdown(false);
    setBeachResortDropdown(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white dark:bg-gray-900 shadow-xl flex items-center z-40 ease-in duration-300">
      <div className="mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex justify-start items-center">
          <Link href="/">
            <Image height={80} width={80} src={logo} alt="Ropsan" />
          </Link>
          <div className="flex items-center ml-2">Ropsan</div>
        </div>

        {/* Navbar Links and ThemeChanger - desktop */}
        <div className="hidden sm:flex justify-end items-center space-x-8 w-full">
          <ul className="flex items-center space-x-8 text-black dark:text-white">
            <li className="hover:text-orange-500">
              <Link href="/">Home</Link>
            </li>

            <ul className="relative group">
              <div className="dropdown">
                <li className="dropbtn hover:text-orange-500 cursor-pointer flex items-center">
                  Project{" "}
                  <FaAngleDown
                    className={`ml-1 ${
                      projectDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </li>
                <div className="dropdown-one">
                  <div
                    id="link1"
                    className="dItem hover:text-orange-500 flex items-center"
                  >
                    <FaAngleLeft className="mr-1" />
                    <span>Residential</span>
                    <ul className="dropdown-two">
                      <li
                        id="link1"
                        className="dItem hover:text-orange-500 flex items-center"
                      >
                        <FaAngleLeft className="mr-1" />
                        <span>Dipla wellness Beach Resort</span>
                        <ul className="dropdown-three">
                          <li className="dItem hover:text-orange-500">
                            <a
                              href="/assets/brochure.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View
                            </a>
                          </li>
                          <li className="dItem hover:text-orange-500">
                            <a href="/assets/brochure.pdf" download>
                              Download
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="dItem hover:text-orange-500 flex items-center">
                    <FaAngleLeft className="mr-1" />
                    <span>Industrial</span>
                  </div>
                  <div className="dItem hover:text-orange-500 flex items-center">
                    <FaAngleLeft className="mr-1" />
                    <span>Commercial</span>
                  </div>
                </div>
              </div>
            </ul>

            <li className="hover:text-orange-500">
              <Link href="#about-container">About</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link href="#contact">Contact</Link>
            </li>

            <div>
              <ThemeChanger />
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* ThemeChanger - icon mobile */}
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
          <li
            className="text-2xl hover:text-orange-500 cursor-pointer flex justify-center relative left-3"
            onClick={() => setProjectDropdown(!projectDropdown)}
          >
            Project{" "}
            <FaAngleDown
              className={`ml-1 ${projectDropdown ? "rotate-180" : "rotate-0"}`}
            />
          </li>
          {projectDropdown && (
            <ul className="space-y-4">
              <li
                className="text-xl hover:text-orange-500 cursor-pointer flex justify-center relative left-3"
                onClick={() => setResidentialDropdown(!residentialDropdown)}
              >
                Residential{" "}
                <FaAngleDown
                  className={`ml-1 ${
                    residentialDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </li>
              {residentialDropdown && (
                <ul className="space-y-2">
                  <li
                    className="text-lg hover:text-orange-500 cursor-pointer flex justify-center relative left-2"
                    onClick={() => setBeachResortDropdown(!beachResortDropdown)}
                  >
                    Dipla wellness Beach Resort{" "}
                    <FaAngleDown
                      className={`ml-1 ${
                        beachResortDropdown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </li>
                  {beachResortDropdown && (
                    <ul className="space-y-2">
                      <li className="text-base hover:text-orange-500 flex justify-center pt-3 pb-3">
                        <a
                          href="/assets/brochure.pdf"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          View/Download
                        </a>
                      </li>
                    </ul>
                  )}
                </ul>
              )}

              <li className="text-xl hover:text-orange-500 flex justify-center">
                Industrial
              </li>
              <li className="text-xl hover:text-orange-500 flex justify-center">
                Commercial
              </li>
            </ul>
          )}
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
