import React from "react";
import mainBg from "../assets/main-bg.jpg";
import { motion } from "framer-motion";
import { onDisplayVariant } from "../motionVariants";

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center w-full h-screen lg:h-full p-8 bg-right bg-no-repeat bg-cover py-28 xl:bg-bottom lg:pl-28 xl:pl-36 select-none"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <motion.h1
        variants={onDisplayVariant}
        initial="hidden"
        animate="display"
        className="font-bold sm:text-6xl md:text-8xl text-white text-[2.6rem] lg:text-[6rem] xl:text-[8rem] mb-2 lg:mb-4 xl:mb-6 tracking-wider text-shadow-sm lg:text-shadow-lg"
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
        <div className="w-[290px] lg:w-[500px] xl:w-[700px] lg:leading-snug xl:leading-normal my-6 sm:text-lg text-xs md:text-xl xl:text-2xl">
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
