import React from "react";
import { elementStyles } from "../Styles";

const Contact = () => {
  return (
    <div className="bg-[#161617] text-white px-8 py-12">
      <h1 className="text-3xl font-bold">Get in touch</h1>
      <p className="my-2 text-red-500">@: markencinares@gmail.com</p>
      <form className="w-full py-4 space-y-4">
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
          className={elementStyles.inputStyle}
          placeholder="message"
        ></textarea>
        <button className="px-4 py-2 text-xs text-red-500 bg-transparent border-2 border-red-500">
          Send Message!
        </button>
      </form>
    </div>
  );
};

export default Contact;
