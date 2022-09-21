import React, { useState } from "react";
import { elementStyles } from "../styles";
import { projects } from "../projectsData";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeCard, setActiveCard] = useState();
  const control = useAnimation();

  const handleData = (data) => {
    setProject(data);
    setActiveCard(data.id);
  };

  return (
    <div className="bg-[#161617] pt-[120px] lg:flex lg:flex-row-reverse h-full lg:min-h-screen lg:items-center lg:justify-end lg:py-0 lg:pl-16 xl:pl-28">
      <div className="px-8 py-4 space-y-4 text-white lg:w-[65%] xl:w-[60%] lg:space-y-0">
        <h1 className="text-2xl font-bold lg:hidden">PROJECTS</h1>
        <div
          className="w-full h-[220px] md:h-[300px] lg:h-[305px] xl:h-[415px] overflow-hidden drop-shadow-lg relative bg-contain bg-no-repeat lg:bg-cover bg-top"
          style={{ backgroundImage: `url(${project?.images[0]})` }}
        >
          {/* <img
            className="w-full h-full object-cover absolute"
            src={project?.images[0]}
            alt=""
          /> */}
        </div>
        <h1 className="text-2xl font-bold text-vividRed-900 lg:text-3xl xl:text-5xl lg:py-2 xl:py-8">
          {project?.title}
        </h1>
        <div className="flex flex-col w-full lg:flex-row lg:justify-between lg:pb-2 xl:pb-2">
          <div className="flex lg:flex-col lg:text-lg xl:text-xl space-x-2 lg:space-x-0">
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
          <div className="flex lg:flex-col lg:text-lg xl:text-xl space-x-2 lg:space-x-0">
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
        <p className="text-sm lg:text-base xl:leading-10 xl:text-lg lg:leading-6 text-justify">
          {project?.description}
          <br /> <a href="#">More details on the github repository.</a>
        </p>
      </div>

      <ul className="grid grid-cols-3 gap-2 px-8 lg:px-4 lg:grid-cols-1 lg:w-[20%] xl:gap-6 lg:gap-3">
        {projects.map((data, index) => (
          <motion.li
            animate={control}
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
      </ul>
    </div>
  );
};

export default Projects;
