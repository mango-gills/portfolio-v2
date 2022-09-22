import React, { useEffect, useState } from "react";
import mainBg from "../assets/main-bg.webp";
import { motion } from "framer-motion";
import {
  onDisplayVariant,
  animateShadow,
  revealChildren,
} from "../motionVariants";

const Hero = () => {
  return (
    <div
      className="flex h-screen w-full select-none flex-col justify-center bg-cover bg-right bg-no-repeat p-8 py-28 lg:h-full lg:pl-28 xl:bg-bottom xl:pl-36"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <motion.div
        variants={onDisplayVariant}
        initial="init"
        animate="active"
        className="hero-container"
      >
        <motion.div variants={revealChildren} className="relative">
          <motion.h1 className="relative z-[2] mb-2 text-[2.6rem] font-bold tracking-wider text-white sm:text-6xl md:text-8xl lg:mb-4 lg:text-[6rem] xl:mb-6 xl:text-[8rem]">
            Hello World!
          </motion.h1>

          <motion.h1
            variants={animateShadow}
            className="absolute -left-[.15rem] top-[.15rem] z-[1] mb-2 text-[2.6rem] font-bold tracking-wider text-vividRed-900/80 sm:text-6xl md:-left-[.2rem] md:top-[.2rem] md:text-8xl lg:-left-[.32rem] lg:top-[.35rem] lg:mb-4 lg:text-[6rem] xl:mb-6 xl:text-[8rem]"
          >
            Hello World!
          </motion.h1>
        </motion.div>

        <motion.div
          variants={revealChildren}
          className="my-6 w-[95%] text-white md:w-5/6 lg:mt-12 lg:w-3/4 xl:w-[54%]"
        >
          <h1 className="text-sm font-light text-white/50 md:mb-2 md:text-base lg:text-xl">
            About Me
          </h1>
          <p className="text-xs leading-loose sm:text-lg md:text-xl md:leading-relaxed xl:text-[1.4rem]">
            <span className="text-2xl text-vividRed-900">&lt;</span> Hi there!
            My name is Mark Encinares, I am aiming to be a good Full Stack Web
            Developer but currently I am focusing more with technologies used
            with Frontend Development, I am always seeking to improve my skills
            slowly but surely.{" "}
            <span className="text-2xl text-vividRed-900">&gt;</span>
          </p>

          <p className="mt-4 text-xs lg:mt-8 lg:text-xl">
            <span className="text-xs text-vividRed-900 lg:text-xl">&#91; </span>
            Let's build something great!
            <span className="text-xs text-vividRed-900 lg:text-xl"> &#93;</span>
          </p>
        </motion.div>

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
          className="mt-4 cursor-pointer rounded-sm bg-vividRed-900 px-4 py-2  text-xs font-semibold text-neutral-900 drop-shadow-lg sm:px-6 sm:py-4 lg:px-8 lg:text-xl xl:mt-10 xl:text-2xl"
        >
          Contact me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
