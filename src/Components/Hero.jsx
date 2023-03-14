import React, { useEffect, useState } from "react";
import {
  animateShadow,
  onDisplayVariant,
  revealChildren,
} from "../motionVariants";

import { Link as ScrollLink } from "react-scroll";
import { elementStyles } from "../styles.js";
import mainBg from "../assets/main-bg.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" flex h-screen w-full select-text flex-col justify-center bg-cover bg-fixed bg-right bg-no-repeat p-8 py-28 selection:bg-vividRed-900 selection:text-neutral-900 lg:h-full lg:pl-28 xl:bg-bottom xl:pl-36"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <motion.div
        variants={onDisplayVariant}
        initial="init"
        animate="active"
        className="hero-container"
      >
        <motion.div
          variants={revealChildren}
          className="group relative sm:max-w-[420px] md:max-w-[680px] lg:max-w-[660px] xl:max-w-[880px]"
        >
          <motion.h1
            className="relative z-[2] mb-2 text-[2.6rem] font-bold tracking-wider text-white group-hover:text-vividRed-900 group-hover:transition-colors group-hover:duration-300 group-hover:ease-in sm:text-6xl md:text-8xl lg:mb-4
          lg:text-[6rem] xl:mb-6 xl:text-[8rem]"
          >
            Hello World!
          </motion.h1>

          <motion.h1
            variants={animateShadow}
            className="absolute -left-[.15rem] top-[.15rem] z-[1] mb-2 text-[2.6rem] font-bold tracking-wider text-vividRed-900/80 selection:text-neutral-900 group-hover:text-white group-hover:transition-colors group-hover:duration-300 group-hover:ease-in sm:text-6xl md:-left-[.2rem] md:top-[.2rem] md:text-8xl lg:-left-[.32rem] lg:top-[.35rem] lg:mb-4 lg:text-[6rem]
            xl:mb-6 xl:text-[8rem]            
            "
          >
            Hello World!
          </motion.h1>
        </motion.div>

        <motion.div
          variants={revealChildren}
          className="my-6 w-full text-justify text-white md:w-5/6 lg:mt-12 lg:w-3/4 xl:w-[60%]"
        >
          <h1 className="text-sm font-light text-white/50 md:mb-2 md:text-base lg:text-xl">
            About Me
          </h1>
          <p className="text-xs leading-loose sm:text-lg md:text-xl md:leading-relaxed xl:text-[1.25rem]">
            <span className="text-2xl text-vividRed-900">&lt;</span> Hi there!
            I'm Mark Encinares, aspiring to be a skilled Full Stack Web
            Developer. While my focus is primarily on Frontend Development
            technologies at the moment, I am committed to continuously improving
            my skills. My ultimate goal is to become a proficient Full Stack Web
            Developer.
            <span className="text-2xl text-vividRed-900">&gt;</span>
          </p>

          <p className="mt-4 text-xs lg:mt-8 lg:text-xl">
            <span className="text-xs text-vividRed-900 lg:text-xl">&#91; </span>
            Let's build something great!
            <span className="text-xs text-vividRed-900 lg:text-xl"> &#93;</span>
          </p>
        </motion.div>

        <MobileButton />
        <DesktopButton />
      </motion.div>
    </div>
  );
};

// Mobile Layout Button
const MobileButton = () => {
  return (
    <ScrollLink
      to="contact"
      spy={true}
      smooth={true}
      offset={-80}
      duration={600}
    >
      <motion.button
        variants={revealChildren}
        whileHover={{
          backgroundColor: "#3D3D3D",
          color: "white",
          transition: {
            color: {
              delay: 0.1,
            },
          },
        }}
        className={`${elementStyles.heroBtn} lg:hidden`}
      >
        Contact me
      </motion.button>
    </ScrollLink>
  );
};

// Desktop Layout Button
const DesktopButton = () => {
  return (
    <ScrollLink
      to={"contact"}
      spy={true}
      smooth={true}
      offset={80}
      duration={600}
    >
      <motion.button
        variants={revealChildren}
        whileHover={{
          backgroundColor: "#3D3D3D",
          color: "white",
          transition: {
            color: {
              delay: 0.1,
            },
          },
        }}
        className={`${elementStyles.heroBtn} hidden lg:block`}
      >
        Contact me
      </motion.button>
    </ScrollLink>
  );
};

export default Hero;
