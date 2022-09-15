import React from "react";
import { elementStyles } from "../styles";
import mainBg from '../assets/main-bg.jpg'
const Contact = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[#161617] w-full h-full flex justify-center lg:justify-start lg:pl-16 xl:pl-24 items-center"
    style={{ backgroundImage: `url(${mainBg})` }}>
      <div className=" text-white px-8 py-12 lg:py-0 lg:w-[70%] xl:w-[62%]">
    
      <h1 className="text-3xl font-bold lg:text-5xl lg:mb-8 xl:text-7xl xl:mb-10">Get in touch</h1>
      <p className="my-2 text-red-500 xl:text-xl">@: markencinares@gmail.com</p>
      <form className="w-full py-4 space-y-6 xl:space-y-6">
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row">
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
          className={`${elementStyles.inputStyle} xl:h-[30%] font-light`}
          placeholder="message"
        ></textarea>
        <button className="px-4 py-2 lg:px-6 lg:py-4 text-sm font-bold xl:text-xl text-red-500 bg-transparent border-2 border-red-500 rounded-sm">
          Send Message!
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
