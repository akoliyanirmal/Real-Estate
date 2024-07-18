import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]*$/, "Invalid phone number, please enter numbers only")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      console.log(data);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-12 mb-4 bg-orange-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          contacts
        </button>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300">
            get in touch now
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <p className="font-medium text-base text-center mt-10 mb-10 text-bluePText">
          We have developed a unique space where you can work and create.
          <br /> We thought of everything to the smallest detail.
          <br />
          You will be able to conduct your business, conduct meetings, meetings
        </p>
      </div>

      {/* FORM */}
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
          <div className="flex flex-col gap-6">
            {/* 1st row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label className="relative">
                  <input
                    {...register("firstName")}
                    name="firstName"
                    placeholder="First Name"
                    className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600"
                  />
                  <MdDriveFileRenameOutline
                    alt="username icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.firstName && (
                  <span className="text-red-500 text-xs mt-1">required</span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <label className="relative">
                  <input
                    {...register("lastName")}
                    name="lastName"
                    placeholder="Last Name"
                    className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600"
                  />
                  <MdDriveFileRenameOutline
                    alt="username icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.lastName && (
                  <span className="text-red-500 text-xs mt-1">required</span>
                )}
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label className="relative">
                  <input
                    {...register("email")}
                    name="email"
                    placeholder="Email Address"
                    className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600"
                  />
                  <MdMarkEmailUnread
                    alt="email icon"
                    className="w-5 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">required</span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <label className="relative">
                  <input
                    {...register("phoneNumber")}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600"
                  />
                  <IoCall
                    alt="phone icon"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs mt-1">required</span>
                )}
              </div>
            </div>

            {/* 3rd row */}
            <div className="flex flex-col">
              <label className="relative">
                <input
                  {...register("message")}
                  name="message"
                  placeholder="Your Message"
                  className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600"
                />
                <AiFillMessage
                  alt="message"
                  className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                />
              </label>
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">required</span>
              )}
            </div>

            <button
              type="submit"
              className="py-3 px-6 bg-[#3361FF] hover:bg-[#11266e] rounded-2xl text-white font-semibold"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Send Request"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Form;
