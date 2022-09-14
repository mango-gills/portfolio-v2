import React from "react";
import mainBg from "../assets/main-bg.jpg";
import { motion } from "framer-motion";
import { onDisplayVariant } from "../motionVariants";

const Hero = () => {
  return (
    <div
      className="flex flex-col w-full h-screen lg:h-full p-8 bg-right bg-no-repeat bg-cover lg:pt-16 py-28 xl:bg-bottom lg:pl-28 xl:pl-36 xl:pt-32"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <motion.h1
        variants={onDisplayVariant}
        initial="hidden"
        animate="display"
        className="font-bold sm:text-7xl md:text-8xl text-white text-5xl lg:text-[6rem] xl:text-[8rem] my-12 xl:my-10 tracking-wider -ml-1"
      >
        Hello World!
      </motion.h1>
      <motion.div
        variants={onDisplayVariant}
        initial="hidden"
        animate="display"
        className=" lg:text-[2rem] font-extralight tracking-widest text-white"
      >
        {/* <h2 className="text-3xl font-medium md:text-3xl sm:text-2xl xl:text-3xl">
          Hello there!
        </h2> */}
        <div className="lg:w-[500px] xl:w-[700px] lg:leading-snug xl:leading-normal my-6 sm:text-lg md:text-xl xl:text-2xl">
          <p>
          My name is Mark Encinares, aiming to be a Full Stack Web Developer, I make fast and responsive web pages.
          </p>
          
          <p className="mt-8">Let's build something great!</p>
        </div>
        <p className="mt-14 xl:mt-20 text-lg lg:text-xl xl:text-2xl">
          <span className="font-semibold text-red-500 border-2 px-6 py-4 lg:px-8 border-vividRed-900 cursor-pointer hover:text-white hover:bg-vividRed-900 duration-150 ease-in">
            Contact me here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
