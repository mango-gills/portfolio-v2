import { BsGithub, BsLinkedin } from "react-icons/bs";

import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-400/50 bg-[#08060c] py-[42px] text-center text-white selection:bg-white selection:text-vividRed-900 md:py-6">
      <div className="flex items-center justify-between px-8 font-light text-red-500">
        <div
          className="flex items-center text-left
        "
        >
          <div className="pe-3 text-2xl md:text-3xl">&#129389;</div>
          <div className="ml-2">
            <h1 className="text-lg font-bold leading-5 text-white md:text-xl">
              Mango Devs
            </h1>
            <p className="text-sm md:text-base">Copyright &copy; 2022</p>
          </div>
        </div>
        <div className="flex space-x-4 text-white">
          <a href="https://www.linkedin.com/in/mcge/" target="_blank">
            <BsLinkedin size={25} />
          </a>
          <a href="https://github.com/mango-gills" target="_blank">
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
