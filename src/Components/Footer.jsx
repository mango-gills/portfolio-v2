import { BsGithub, BsLinkedin } from "react-icons/bs";

import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-400/50 bg-[#08060c] py-6 text-center text-white selection:bg-white selection:text-vividRed-900">
      <div className="flex justify-between px-8 font-light text-red-500">
        <p className="text-sm sm:text-base">
          Mango Devs - Copyright &copy; 2022
        </p>
        <div className="flex space-x-4 text-white">
          <a href="https://www.linkedin.com/in/mcge/" target="_blank">
            <BsLinkedin size={20} />
          </a>
          <a href="https://github.com/mango-gills" target="_blank">
            <BsGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
