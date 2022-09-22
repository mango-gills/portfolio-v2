import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-400/50 bg-[#08060c] py-6 text-center text-white">
      <div className="flex justify-between px-8 font-light text-red-500">
        <p className="text-xs sm:text-base">
          Mango Devs - Copyright &copy; 2022
        </p>
        <div className="flex space-x-4 text-white">
          <BsLinkedin size={20} />
          <BsGithub size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
