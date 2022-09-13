import React from "react";
import { elementStyles } from "../styles";

const Contact = () => {
  return (
    <div className="bg-[#161617] text-white px-8 lg:pt-12 lg:pb-2 py-12 lg:w-[70%] xl:w-[60%] xl:pt-20">
      <h1 className="text-3xl font-bold lg:text-5xl lg:mb-8 xl:text-7xl xl:mb-10">Get in touch</h1>
      <p className="my-2 text-red-500 xl:text-xl">@: markencinares@gmail.com</p>
      <form className="w-full py-4 space-y-6 xl:space-y-6">
        <div className="flex flex-col space-x-4 lg:flex-row">
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
          className={`${elementStyles.inputStyle} xl:h-[380px] font-light`}
          placeholder="message"
        ></textarea>
        <button className="px-4 py-2 text-sm xl:text-base text-red-500 bg-transparent border-2 border-red-500 rounded-sm">
          Send Message!
        </button>
      </form>
    </div>
  );
};

export default Contact;
