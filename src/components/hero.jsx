import Image from "next/image";
import React from "react";
import banner from "../assets/images/banner.jpg";
import { ImAddressBook } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById("about-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen">
      {/* Banner Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner}
          alt="bg image"
          layout="fill"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center text-white">
        {/* Heading */}
        <h1 className="font-normal text-7xl mt-24 capitalize">
          find real estate that suits you
        </h1>

        {/* Address, Phone, Email */}
        <div className="flex flex-col mt-8 text-xl">
          <div className="flex items-center mb-4">
            <ImAddressBook className="w-5 h-5 mr-3" />
            <p>{address}</p>
          </div>
          <div className="flex items-center mb-4">
            <IoIosCall className="w-5 h-5 mr-3" />
            <p>{phone}</p>
          </div>
          <div className="flex items-center">
            <MdMarkEmailRead className="w-5 h-5 mr-3" />
            <p>{email}</p>
          </div>
        </div>

        {/* Show more button */}
        <div className="absolute bottom-8 w-full text-center">
          <button
            onClick={showMoreBtn}
            className="text-xl capitalize shadow-lg bg-orange-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-black h-14 w-36"
          >
            show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
