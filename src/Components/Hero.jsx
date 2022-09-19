import React, { useEffect, useState } from "react";
import mainBg from "../assets/main-bg.jpg";
import { motion } from "framer-motion";
import { onDisplayVariant, animateShadow } from "../motionVariants";

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
        className="relative"
      >
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
        variants={onDisplayVariant}
        initial="init"
        animate="active"
        className=" lg:text-[2rem] font-extralight tracking-widest text-white"
      >
        <div className="w-full lg:w-[500px] xl:w-[700px] lg:leading-snug xl:leading-normal my-6 sm:text-lg text-xs md:text-xl xl:text-2xl">
          <p>
            My name is Mark Encinares, aiming to be a Full Stack Web Developer,
            I make fast and responsive web pages.
          </p>

          <p className="mt-8">Let's build something great!</p>
        </div>
        <p className="mt-14 xl:mt-20 text-xs lg:text-xl xl:text-2xl">
          <span className="font-semibold text-red-500 border-2 px-4 py-2 sm:px-6 sm:py-4 lg:px-8 border-vividRed-900 cursor-pointer hover:text-white hover:bg-vividRed-900 duration-300 transition-all ease-in ">
            Contact me
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
