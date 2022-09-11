import React from "react";
import mainBg from "../assets/main-bg.jpg";
import { motion } from "framer-motion";
import { onDisplayVariant } from "../motionVariants";

const Hero = () => {
  return (
    <div
      className="flex flex-col w-full h-full p-8 bg-right bg-no-repeat bg-cover pt-28 xl:bg-bottom xl:pt-20 xl:pl-28"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <motion.h1
        variants={onDisplayVariant}
        initial="hidden"
        animate="display"
        className="font-bold sm:text-7xl md:text-8xl text-white text-5xl lg:text-[9rem] my-12 xl:my-10"
      >
        Hi, I'm Titan
      </motion.h1>
      <motion.div
        variants={onDisplayVariant}
        initial="hidden"
        animate="display"
        className=" lg:text-[2rem] font-extralight tracking-widest text-white"
      >
        <h2 className="text-3xl font-medium md:text-5xl sm:text-4xl">
          Hello there!
        </h2>
        <p className="xl:w-[800px] lg:leading-snug my-10 sm:text-lg md:text-xl">
          My name is Mark Encinares, aiming to be a Full Stack Web Developer, I
          can make fast and responsive web pages.
        </p>
        <p className="mt-14">
          Let's build something great!{" "}
          <span className="font-semibold text-red-500 border-b-2 border-white/50">
            Contact me here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
