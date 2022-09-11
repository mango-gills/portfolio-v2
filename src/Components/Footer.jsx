import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#08060c] text-white text-center py-6 border-t-2 w-full border-gray-400/50">
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
