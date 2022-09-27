import React, { useState } from "react";
import {
  animateLinks,
  onDisplayVariant,
  revealChildren,
  slideInRevealChildren,
} from "../motionVariants.js";
import { motion, useAnimation } from "framer-motion";

import { elementStyles } from "../styles";
import { projects } from "../projectsData";

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeCard, setActiveCard] = useState();
  const control = useAnimation();

  const handleData = (data) => {
    setProject(data);
    setActiveCard(data.id);
  };

  return (
    <div
      id="projects"
      className="h-full bg-[#161617] pt-[20px] lg:flex lg:min-h-screen lg:flex-row-reverse lg:items-center lg:justify-end lg:py-0 lg:pl-16 xl:pl-28"
    >
      <div className="space-y-4 px-8 py-4 text-white selection:bg-white selection:text-vividRed-900 lg:w-[65%]  lg:space-y-0 xl:w-[60%]">
        <h1 className="text-2xl font-bold drop-shadow-vividRed-lg lg:hidden">
          PROJECTS
        </h1>
        <div
          className="relative h-[220px] w-full overflow-hidden bg-contain bg-top bg-no-repeat drop-shadow-lg md:h-[300px] lg:h-[305px] lg:bg-cover xl:h-[415px]"
          style={{ backgroundImage: `url(${project?.images[0]})` }}
        >
          {/* <img
            className="w-full h-full object-cover absolute"
            src={project?.images[0]}
            alt=""
          /> */}
        </div>
        <h1 className="text-2xl font-bold text-vividRed-900 drop-shadow-dark-lg lg:py-2 lg:text-3xl xl:py-8 xl:text-5xl">
          {project?.title}
        </h1>
        <div className="flex w-full flex-col lg:flex-row lg:justify-between lg:pb-2 xl:pb-2">
          <div className="flex space-x-2 lg:flex-col lg:space-x-0 lg:text-lg xl:text-xl">
            <p>Tech Stack:</p>
            <div className="flex space-x-4">
              {project?.stack.map((list, idx) => {
                return (
                  <p key={idx} className="text-vividRed-900">
                    {list}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex space-x-2  lg:flex-col lg:space-x-0 lg:text-lg xl:text-xl">
            <p>Links:</p>
            <div className="flex space-x-2">
              <a
                href={`https://www.${project?.links.demo}`}
                target={"_blank"}
                rel={"external"}
                className="text-vividRed-900"
              >
                Demo
              </a>
              <p className="text-vividRed-900">|</p>
              <a
                href={`https://www.${project?.links.code}`}
                target="_blank"
                className="text-vividRed-900"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <p className="text-justify text-sm lg:text-base lg:leading-6 xl:text-lg xl:leading-10">
          {project?.description}
          <br /> <a href="#">More details on the github repository.</a>
        </p>
      </div>

      <motion.ul
        variants={onDisplayVariant}
        initial="init"
        animate="active"
        className="grid grid-cols-3 gap-2 px-8 lg:w-[20%] lg:grid-cols-1 lg:gap-3 lg:px-4 xl:gap-6"
      >
        {projects.map((data, index) => (
          <motion.li
            variants={slideInRevealChildren}
            // animate={control}
            key={index}
            className={
              activeCard === data.id
                ? elementStyles.projectCardActive
                : elementStyles.projectCard
            }
            onClick={() => handleData(data)}
          >
            <div className="flex flex-col text-left">
              <h1
                className={
                  activeCard === data.id
                    ? elementStyles.projectCardHeadingActive
                    : elementStyles.projectCardHeading
                }
              >
                {data.title}
              </h1>

              <p className="text-sm sm:text-sm xl:text-lg">
                Project - {data.id}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Projects;
