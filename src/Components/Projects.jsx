import React from "react";
import { elementStyles } from "../styles";

const Projects = () => {
  return (
    <div className="bg-[#161617] pt-[120px] lg:flex lg:flex-row-reverse lg:h-full lg:items-start lg:py-4 xl:py-12">
      <div className="pr-16 pl-4 py-4 space-y-6 text-white lg:w-[55%] xl:w-[60%] lg:space-y-0">
        <h1 className="text-2xl font-bold lg:hidden">PROJECTS</h1>
        <img className="" src="./p5-1.png" alt="" />
        <h1 className="text-2xl font-bold text-red-500 lg:text-3xl xl:text-5xl lg:py-2 xl:py-6">
          Chapp
        </h1>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between lg:pb-2 xl:pb-4">
          <div className="flex lg:flex-col lg:text-lg xl:text-2xl xl:space-y-2 space-x-2 lg:space-x-0">
            <p>Tech Stack:</p>
            <div className="flex space-x-2">
              <p className="text-red-500">ReactJS</p>
              <p className="text-red-500">| </p>
              <p className="text-red-500">Firebase</p>
            </div>
          </div>
          <div className="flex lg:flex-col lg:text-lg xl:text-2xl xl:space-y-2 space-x-2 lg:space-x-0">
            <p>Links:</p>
            <div className="flex space-x-2">
              <p className="text-red-500">Demo</p>
              <p className="text-red-500">| </p>
              <p className="text-red-500">Code</p>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-base xl:leading-10 xl:text-2xl lg:leading-6 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non itaque
          cum ad et, maxime laborum odit molestiae repudiandae consequatur ut
          voluptatem fugiat? Numquam, veniam dolorem! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Doloribus, sapiente consequatur
          corrupti voluptatibus eum dolore cupiditate repellat odio quis
          laudantium.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 px-8 pt-4 pb-8 lg:grid-cols-1 lg:w-[20%] xl:gap-6 lg:gap-4">
        <div className={elementStyles.projectCard}>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className={elementStyles.projectCardHeading}>Project - 001</h1>

            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className={elementStyles.projectCard}>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className={elementStyles.projectCardHeading}>Project - 001</h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className={elementStyles.projectCard}>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className={elementStyles.projectCardHeading}>Project - 001</h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className={elementStyles.projectCard}>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className={elementStyles.projectCardHeading}>Project - 001</h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className={elementStyles.projectCard}>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className={elementStyles.projectCardHeading}>Project - 001</h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className={elementStyles.projectCard}>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className={elementStyles.projectCardHeading}>Project - 001</h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
