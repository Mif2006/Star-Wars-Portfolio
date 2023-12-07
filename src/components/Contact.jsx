import React from "react";

const Contact = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center ">
      <div className="bg-opacity-50 w-[380px] mt-16 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-[10]">
        <h2 className="text-3xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-4 text-center">
          Please fill out the form below to get in touch with me.
        </p>
        <form className="flex flex-col gap-5">
          <input
            className="border border-blue-500 text-white font-bold py-2 px-4 rounded-xl"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border border-blue-500 text-white font-bold py-2 px-4 rounded-xl"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="border border-blue-500 text-white font-bold py-2 px-4 rounded-xl"
            type="text"
            placeholder="Your Message"
          />

          <button
            className="bg-blue-500 hover:animate-pulse hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
