import React from "react";
import { elementStyles } from "../styles";
import mainBg from "../assets/main-bg.webp";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="flex h-full w-full items-center justify-center bg-[#161617] bg-cover bg-no-repeat lg:justify-start lg:pl-16 xl:pl-24"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="px-8 py-12 text-white selection:bg-white selection:text-vividRed-900 lg:w-[70%] lg:py-0 xl:w-[62%]">
          <h1 className="text-4xl font-bold drop-shadow-vividRed-lg selection:bg-white lg:mb-8 lg:text-5xl xl:mb-10 xl:text-7xl">
            Get in touch
          </h1>
          <p className="my-2 text-red-500 xl:text-xl">
            @: markencinares@gmail.com
          </p>
          <form
            action="https://formsubmit.co/55f67f64112f800526528b28cf97aca7"
            method="POST"
            className="w-full space-y-6 py-4 xl:space-y-6"
          >
            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
              <input
                type="text"
                className={elementStyles.inputStyle}
                placeholder="name"
                name="name"
              />
              <input
                type="email"
                className={elementStyles.inputStyle}
                placeholder="email"
                name="email"
                required
              />
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://portfolio-v2-zeta-flax.vercel.app/"
            />
            <input
              type="text"
              className={elementStyles.inputStyle}
              placeholder="subject"
              name="_subject"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className={`${elementStyles.inputStyle} font-light xl:h-[30%]`}
              placeholder="message"
            ></textarea>
            <button
              type="submit"
              className="rounded-sm border-2 border-red-500 bg-transparent px-4 py-2 text-sm font-semibold text-red-500 duration-150 ease-in hover:bg-vividRed-900 hover:text-white lg:px-6 lg:py-4 xl:text-xl"
            >
              Send Message!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
