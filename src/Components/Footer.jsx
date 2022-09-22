import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-400/50 bg-[#08060c] py-6 text-center text-white selection:bg-white selection:text-vividRed-900">
      <div className="flex justify-between px-8 font-light text-red-500">
        <p className="text-sm sm:text-base">
          Mango Devs - Copyright &copy; 2022
        </p>
        <div className="flex space-x-4 text-white">
          <BsLinkedin className="cursor-pointer" size={20} />
          <BsGithub className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
