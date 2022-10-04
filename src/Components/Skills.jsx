import { revealText, scaleOnHover } from "../motionVariants";
import { techStack, toolsStack } from "../assets";

import React from "react";
import { elementStyles } from "../styles";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex h-full flex-col items-start bg-[#161617]  py-12 px-8 text-white selection:bg-white selection:text-vividRed-900 lg:min-h-screen lg:justify-center  lg:pl-24 xl:pl-32"
    >
      <div className="w-full space-y-2 text-white lg:space-y-4">
        <h1 className="text-3xl font-semibold drop-shadow-vividRed-lg sm:text-3xl xl:text-5xl">
          Tech Stacks
        </h1>
        <p className="text-base sm:text-lg xl:text-2xl">
          Working knowledge on the following web development languages,
          frameworks, libraries and platforms.
        </p>
        <div>
          <ul className="mt-8 mb-4 grid select-none grid-cols-5 justify-center gap-2 sm:grid-cols-5 lg:my-6 lg:flex lg:justify-start lg:space-x-8 xl:space-x-10">
            {techStack.map((item, idx) => (
              <li
                key={idx}
                className="mb-6 flex flex-col items-center space-y-1 lg:space-y-2"
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
      <div className="w-full space-y-2 lg:mt-2 lg:space-y-4 xl:mt-8">
        <h1 className="text-3xl font-semibold drop-shadow-vividRed-lg sm:text-3xl xl:text-5xl">
          Development Tools
        </h1>
        <p className="text-base sm:text-lg xl:text-2xl">
          These are the tools that I use for web development.
        </p>
        <div>
          <ul className="mt-8 mb-4 grid select-none grid-cols-5 justify-center gap-2 sm:grid-cols-5 lg:my-6 lg:flex lg:justify-start lg:space-x-8 xl:space-x-10">
            {toolsStack.map((item, idx) => (
              <li
                key={idx}
                className="mb-6 flex flex-col items-center space-y-2 lg:space-y-4"
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
        <h2 className="mt-2 mb-2 text-2xl font-bold drop-shadow-vividRed-lg xl:mb-5 xl:mt-10">
          Other Skills
        </h2>
        <ul className="flex flex-col space-y-2 text-base lg:flex-row lg:space-y-0 lg:space-x-4 lg:text-lg xl:text-xl">
          <li>Computer Troubleshooting and Repair</li>
          <li className="hidden font-semibold text-vividRed-900 lg:block">|</li>
          <li>Digital Photo Manipulation</li>
          <li className="hidden font-semibold text-vividRed-900 lg:block">|</li>
          <li>Basic Video Editing</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
