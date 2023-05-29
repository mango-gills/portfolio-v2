import React from "react";
import { motion } from "framer-motion";
import { animateShadow } from "../../motionVariants";

const MainHeader = () => {
  return (
    <>
      <motion.h1 className="relative z-[2] text-[2.9rem] font-bold tracking-wider text-white group-hover:text-vividRed-900 group-hover:transition-colors group-hover:duration-300 group-hover:ease-in sm:text-6xl md:text-8xl lg:mb-4 lg:text-[6rem] xl:mb-6 xl:text-[7.5rem]">
        Hello World!
      </motion.h1>

      <motion.h1
        variants={animateShadow}
        className="absolute -left-[.15rem] top-[.15rem] z-[1] mb-2 text-[2.9rem] font-bold tracking-wider text-vividRed-900/80 selection:text-neutral-900 group-hover:text-white group-hover:transition-colors group-hover:duration-300 group-hover:ease-in sm:text-6xl md:-left-[.2rem] md:top-[.2rem] md:text-8xl lg:-left-[.28rem] lg:top-[.3rem] lg:mb-4 lg:text-[6rem] xl:mb-6 xl:text-[7.5rem]"
      >
        Hello World!
      </motion.h1>
    </>
  );
};

export default MainHeader;
