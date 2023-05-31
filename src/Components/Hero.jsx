import React from "react";
import MainHeader from "./HeroComponents/MainHeader";

import { onDisplayVariant, revealChildren } from "../motionVariants";
import { Link as ScrollLink } from "react-scroll";
import { elementStyles } from "../styles.js";
import { motion } from "framer-motion";
import mainBg from "../assets/main-bg.webp";
import SubHeader from "./HeroComponents/SubHeader";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex h-screen w-full select-text flex-col justify-center bg-cover bg-fixed bg-right bg-no-repeat p-6 py-28 selection:bg-vividRed-900 selection:text-neutral-900 lg:h-full xl:bg-bottom xl:pl-24 2xl:pl-36"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <motion.div
        variants={onDisplayVariant}
        initial="init"
        animate="active"
        className="hero-container flex flex-col items-center justify-center xl:items-start"
      >
        <motion.div
          variants={revealChildren}
          className="group relative sm:max-w-[420px] md:max-w-[680px] lg:max-w-[660px] xl:max-w-[880px]"
        >
          <MainHeader />
        </motion.div>

        <motion.div
          variants={revealChildren}
          className="group relative sm:max-w-[420px] md:max-w-[680px] lg:max-w-[660px] xl:max-w-[880px]"
        >
          <SubHeader />
        </motion.div>

        <motion.div
          variants={revealChildren}
          className="my-6 w-full text-justify text-white md:w-5/6 lg:mt-12 xl:w-3/4 2xl:w-[58%]"
        >
          <h1 className="text-sm font-light text-white/50 md:mb-2 md:text-base lg:text-xl">
            About Me
          </h1>
          <p className="text-xs leading-loose sm:text-base md:leading-relaxed 2xl:text-[1.25rem]">
            <span className="text-2xl text-vividRed-900">&lt;</span> Hi there!
            I'm Mark Encinares, aspiring to be a skilled Full Stack Web
            Developer. While my focus is primarily on Frontend Development
            technologies at the moment, I am committed to continuously improving
            my skills. My ultimate goal is to become a proficient Full Stack Web
            Developer.
            <span className="text-2xl text-vividRed-900">&gt;</span>
          </p>

          <p className="mt-4 text-xs lg:mt-8 lg:text-lg 2xl:text-xl">
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
        className={`${elementStyles.heroBtn} uppercase lg:hidden`}
      >
        Get in touch
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
        className={`${elementStyles.heroBtn} hidden uppercase lg:block`}
      >
        Get in touch
      </motion.button>
    </ScrollLink>
  );
};

export default Hero;
