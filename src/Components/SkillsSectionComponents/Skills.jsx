import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { revealText, scaleOnHover } from "../../motionVariants";
import { techStack, toolsStack } from "../../assets";

import { elementStyles } from "../../styles";
import { useRef } from "react";
import SkillsStackList from "./SkillsStackList";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animateLogo = useAnimation({ threshold: 0.2 });
  const animateText = useAnimation({ threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      animateLogo.start(scaleOnHover.active);
      animateText.start(revealText.active);
    }

    if (!isInView) {
      // animateLogo.start(scaleOnHover.init);
      // animateText.start(revealText.init);
    }
  }, [isInView]);

  return (
    <div
      id="skills"
      className="flex h-full flex-col items-start bg-[#161617]  py-12 px-8 text-white selection:bg-white selection:text-vividRed-900 lg:min-h-screen lg:justify-center xl:pl-24 2xl:pl-36"
    >
      <div className="w-full space-y-2 text-white lg:space-y-4">
        <h1 className="text-3xl font-semibold drop-shadow-vividRed-lg xl:text-3xl 2xl:text-5xl">
          Tech Stacks
        </h1>
        <p className="text-sm sm:text-base 2xl:text-2xl">
          Working knowledge on the following web development languages,
          frameworks, libraries and platforms.
        </p>

        <SkillsStackList
          stack={techStack}
          animateLogo={animateLogo}
          animateText={animateText}
        />
      </div>

      {/*  */}
      <div className="w-full space-y-2 lg:space-y-4 xl:mt-3 2xl:mt-8">
        <h1 className="text-3xl font-semibold drop-shadow-vividRed-lg xl:text-3xl 2xl:text-5xl">
          Development Tools
        </h1>
        <p className="text-sm sm:text-base 2xl:text-2xl">
          These are the tools that I use for web development.
        </p>

        <SkillsStackList
          stack={toolsStack}
          animateLogo={animateLogo}
          animateText={animateText}
        />
      </div>

      <div ref={ref}>
        <h2 className="mt-2 mb-2 text-xl font-bold drop-shadow-vividRed-lg xl:mb-3 xl:text-2xl 2xl:mt-4">
          Other Skills
        </h2>
        <ul className="flex flex-col space-y-2 text-sm lg:flex-row lg:space-y-0 lg:space-x-4 xl:text-base 2xl:text-xl">
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
