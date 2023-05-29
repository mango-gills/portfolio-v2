import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { slideInRevealChildren } from "../../motionVariants.js";

import { elementStyles } from "../../styles.js";
import { projects } from "../../projectsData.js";
import { useRef } from "react";

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeCard, setActiveCard] = useState();
  // const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateCards = useAnimation({ threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      animateCards.start(slideInRevealChildren.active);
    }
    if (!isInView) {
      animateCards.start(slideInRevealChildren.init);
    }
  }, [isInView]);

  const handleData = (data) => {
    setProject(data);
    setActiveCard(data.id);
  };

  return (
    <div
      id="projects"
      className="h-full bg-[#161617] pt-[20px] lg:min-h-screen lg:flex-row-reverse lg:items-center lg:justify-end lg:py-0 xl:flex xl:pl-24 2xl:pl-36"
    >
      <div className="space-y-4 px-8 py-4 text-white selection:bg-white selection:text-vividRed-900 lg:space-y-0 xl:max-w-[700px] 2xl:max-w-[900px]">
        <h1 className="text-2xl font-bold drop-shadow-vividRed-lg lg:hidden">
          PROJECTS
        </h1>
        <div
          className="relative h-[220px] w-full overflow-hidden bg-contain bg-top bg-no-repeat drop-shadow-lg md:h-[300px] lg:h-[320px] lg:bg-cover 2xl:h-[415px]"
          style={{ backgroundImage: `url(${project?.images[0]})` }}
        />
        <h1
          ref={ref}
          className="text-2xl font-bold text-vividRed-900 drop-shadow-dark-lg lg:py-2 lg:text-3xl xl:py-8 xl:text-5xl"
        >
          {project?.title}
        </h1>
        <div className="flex w-full flex-col lg:flex-row lg:justify-between lg:pb-2 xl:pb-2">
          <div className="flex flex-row items-center space-x-2">
            <div className="flex space-x-4">
              {project?.stack.map((list, idx) => {
                return (
                  <p
                    key={idx}
                    className="rounded-full border-[.5px] border-vividRed-900 py-1 px-2 text-xs text-white xl:text-sm"
                  >
                    {list}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex space-x-2  lg:flex-col lg:space-x-0">
            <div className="flex space-x-2">
              <a
                href={`${project?.links.demo}`}
                target={"_blank"}
                rel={"external"}
                className="rounded-md bg-white px-3 py-1 text-black"
              >
                Demo
              </a>
              <a
                href={`https://www.${project?.links.code}`}
                target="_blank"
                className="rounded-md bg-[#3d3d3d] px-3 py-1 text-white"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <p className="text-justify text-xs leading-relaxed md:text-base xl:text-base xl:leading-8 2xl:text-lg 2xl:leading-10">
          {project?.description}
          <br />{" "}
          <a
            className="italic text-vividRed-900/80"
            href={`https://www.${project?.links.code}`}
            target="_blank"
          >
            Check github repository for more details.
          </a>
        </p>
      </div>

      <ul className="grid grid-cols-3 gap-2 px-8 xl:grid-cols-1 xl:gap-3 xl:px-0 2xl:w-[18%] 2xl:gap-5 ">
        {projects.map((data, index) => (
          <motion.li
            animate={animateCards}
            key={index}
            transition={{ delay: index * 0.1 }}
            className={
              project.id == data.id
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

              <p className="text-xs sm:text-sm xl:text-lg">
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
