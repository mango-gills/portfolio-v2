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
      className="flex flex-col justify-center w-full h-screen lg:h-full p-8 bg-right bg-no-repeat bg-cover py-28 xl:bg-bottom lg:pl-28 xl:pl-36 select-none"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <motion.div
        variants={onDisplayVariant}
        initial="init"
        animate="active"
        className="hero-container"
      >
        <motion.div variants={revealChildren} className="relative">
          <h1 className="font-bold sm:text-6xl md:text-8xl text-white text-[2.6rem] lg:text-[6rem] xl:text-[8rem] mb-2 lg:mb-4 xl:mb-6 tracking-wider relative z-[2]">
            Hello World!
          </h1>

          <motion.h1
            variants={animateShadow}
            className="font-bold sm:text-6xl md:text-8xl text-vividRed-900/80 z-[1] text-[2.6rem] lg:text-[6rem] xl:text-[8rem] mb-2 lg:mb-4 xl:mb-6 tracking-wider absolute -left-[.15rem] top-[.15rem] md:-left-[.2rem] md:top-[.2rem] lg:-left-[.32rem] lg:top-[.35rem]"
          >
            Hello World!
          </motion.h1>
        </motion.div>

        <motion.div
          variants={revealChildren}
          className="w-[95%] md:w-5/6 lg:mt-12 lg:w-3/4 xl:w-[54%] leading-loose md:leading-relaxed my-6 sm:text-lg text-xs md:text-xl xl:text-[1.4rem] text-white"
        >
          <p>
            <span className="text-vividRed-900 text-2xl">&lt;</span> Hi there!
            My name is Mark Encinares, I am aiming to be a good Full Stack Web
            Developer but currently I am focusing more with technologies used
            with Frontend Development, I am always seeking to improve my skills
            slowly but surely.{" "}
            <span className="text-vividRed-900 text-2xl">&gt;</span>
          </p>

          <p className="mt-4 lg:mt-8">
            <span className="text-vividRed-900 text-xl">&#91; </span>
            Let's build something great!
            <span className="text-vividRed-900 text-xl"> &#93;</span>
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
          className="mt-4 xl:mt-10 text-xs lg:text-xl xl:text-2xl font-semibold  bg-vividRed-900 rounded-sm px-4 py-2 sm:px-6 sm:py-4 lg:px-8 cursor-pointer text-neutral-900 drop-shadow-lg"
        >
          Contact me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
