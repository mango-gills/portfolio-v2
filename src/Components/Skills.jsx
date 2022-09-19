import React from "react";
import { techStack, toolsStack } from "../assets";
import { elementStyles } from "../styles";
import { motion } from "framer-motion";
import { scaleOnHover, revealText } from "../motionVariants";

const Skills = () => {
  return (
    <div className="bg-[#161617] py-12 flex flex-col items-start px-8 lg:pl-24 xl:pl-32 lg:justify-center h-full lg:min-h-screen text-white">
      <div className="w-full space-y-2 lg:space-y-4 text-white select-none">
        <h1 className="text-3xl font-semibold sm:text-3xl xl:text-5xl">
          Tech Stacks
        </h1>
        <p className="text-base sm:text-lg xl:text-2xl">
          Working knowledge on the following web development languages,
          frameworks, libraries and platforms.
        </p>
        <div>
          <ul className="grid justify-center grid-cols-5 gap-2 mt-8 mb-4 lg:justify-start sm:grid-cols-5 lg:my-6 lg:flex lg:space-x-8 xl:space-x-10 overflow-hidden">
            {techStack.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center mb-6 space-y-1 lg:space-y-2"
              >
                <motion.img
                  variants={scaleOnHover}
                  initial="init"
                  animate="active"
                  whileHover="hover"
                  src={item.logo}
                  alt={`${item.name}-logo`}
                  className={elementStyles.logoScale}
                />
                <motion.p
                  variants={revealText}
                  initial="init"
                  animate="active"
                  className="text-xs md:text-sm xl:text-base"
                >
                  {item.name}
                </motion.p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="w-full space-y-2 lg:space-y-4 xl:mt-8 lg:mt-2 select-none">
        <h1 className="text-3xl font-semibold sm:text-3xl xl:text-5xl">
          Development Tools
        </h1>
        <p className="text-base sm:text-lg xl:text-2xl">
          These are the tools that I use for web development.
        </p>
        <div>
          <ul className="grid justify-center grid-cols-5 gap-2 mt-8 mb-4 sm:grid-cols-5 lg:my-6 lg:flex lg:space-x-8 xl:space-x-10 lg:justify-start">
            {toolsStack.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center mb-6 space-y-2 lg:space-y-4"
              >
                <motion.img
                  variants={scaleOnHover}
                  initial="init"
                  animate="active"
                  whileHover="hover"
                  src={item.logo}
                  alt={`${item.name}-logo`}
                  className={elementStyles.logoScale}
                />
                <motion.p
                  variants={revealText}
                  initial="init"
                  animate="active"
                  className="text-xs md:text-sm"
                >
                  {item.name}
                </motion.p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mt-2 mb-2 xl:mb-5 text-2xl font-bold xl:mt-10">
          Other Skills
        </h2>
        <ul className="flex flex-col space-y-2 text-base lg:space-y-0 lg:text-lg xl:text-xl lg:space-x-4 lg:flex-row">
          <li>Computer Troubleshooting and Repair</li>
          <li className="hidden font-semibold text-red-500 lg:block">|</li>
          <li>Digital Photo Manipulation</li>
          <li className="hidden font-semibold text-red-500 lg:block">|</li>
          <li>Basic Video Editing</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
