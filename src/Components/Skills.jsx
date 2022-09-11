import React from "react";
import { techStack, toolsStack } from "../assets";
import { elementStyles } from "../styles";

const Skills = () => {
  return (
    <div className="bg-[#161617] py-12 flex flex-col items-start px-8 lg:ml-[100px] lg:justify-center h-full lg:h-screen text-white">
      <div className="w-full space-y-4 text-white">
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Tech Stacks
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">
          Working knowledge on the following web development languages,
          frameworks, libraries and platforms.
        </p>
        <div>
          <ul className="grid justify-center grid-cols-5 gap-2 mt-8 mb-4 lg:justify-start sm:grid-cols-5 lg:my-6 lg:flex lg:space-x-8">
            {techStack.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center mb-6 space-y-2 lg:space-y-4"
              >
                <img
                  src={item.logo}
                  alt={`${item.name}-logo`}
                  className={elementStyles.logoScale}
                />
                <p className="text-xs md:text-sm">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="w-full space-y-4 lg:mt-8">
        <h1 className="text-3xl font-semibold lg:text-5xl">
          Development Tools
        </h1>
        <p className="text-base lg:text-xl">
          These are the tools that I use for web development.
        </p>
        <div>
          <ul className="grid justify-center grid-cols-5 gap-2 mt-8 mb-4 sm:grid-cols-5 lg:my-6 lg:flex lg:space-x-8 lg:justify-start">
            {toolsStack.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center mb-6 space-y-2 lg:space-y-4"
              >
                <img
                  src={item.logo}
                  alt={`${item.name}-logo`}
                  className={elementStyles.logoScale}
                />
                <p className="text-xs md:text-sm">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mt-2 mb-5 text-2xl font-bold lg:text-3xl lg:mt-10">
          Other Skills
        </h2>
        <ul className="flex flex-col space-y-2 text-base lg:space-y-0 lg:text-xl lg:space-x-6 lg:flex-row">
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
