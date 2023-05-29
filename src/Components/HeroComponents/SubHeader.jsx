import React from "react";
import { motion } from "framer-motion";
import { animateShadow } from "../../motionVariants";

const SubHeader = () => {
  return (
    <>
      <motion.h2 className="relative z-[2] text-[22px] font-semibold tracking-wider text-vividRed-900/90 group-hover:text-white group-hover:transition-colors group-hover:duration-300 group-hover:ease-in sm:text-2xl md:text-4xl lg:mb-4 lg:text-[2.5rem] xl:mb-6 xl:text-[3.4rem]">
        I'm a Front End Developer
      </motion.h2>

      <motion.h2
        variants={animateShadow}
        className="md:-left-[.1.8rem] absolute -left-[.1rem] top-[.09rem] z-[1] text-[22px] font-semibold tracking-wider text-white selection:text-neutral-900 group-hover:text-vividRed-900/80 group-hover:transition-colors group-hover:duration-300 group-hover:ease-in sm:text-2xl md:top-[.1.8rem] md:text-4xl lg:-left-[.1rem] lg:top-[.1rem] lg:mb-4 lg:text-[2.5rem] xl:mb-6 xl:text-[3.4rem]"
      >
        I'm a Front End Developer
      </motion.h2>
    </>
  );
};

export default SubHeader;
