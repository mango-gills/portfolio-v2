import React from "react";
import { elementStyles } from "../styles";
import mainBg from "../assets/main-bg.webp";
const Contact = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-[#161617] bg-cover bg-no-repeat lg:justify-start lg:pl-16 xl:pl-24"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className=" px-8 py-12 text-white lg:w-[70%] lg:py-0 xl:w-[62%]">
        <h1 className="text-3xl font-bold lg:mb-8 lg:text-5xl xl:mb-10 xl:text-7xl">
          Get in touch
        </h1>
        <p className="my-2 text-red-500 xl:text-xl">
          @: markencinares@gmail.com
        </p>
        <form className="w-full space-y-6 py-4 xl:space-y-6">
          <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
            <input
              type="text"
              className={elementStyles.inputStyle}
              placeholder="name"
            />
            <input
              type="email"
              className={elementStyles.inputStyle}
              placeholder="email"
              required
            />
          </div>
          <input
            type="text"
            className={elementStyles.inputStyle}
            placeholder="subject"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={`${elementStyles.inputStyle} font-light xl:h-[30%]`}
            placeholder="message"
          ></textarea>
          <button className="rounded-sm border-2 border-red-500 bg-transparent px-4 py-2 text-sm font-bold text-red-500 lg:px-6 lg:py-4 xl:text-xl">
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
