import React from "react";
import { motion } from "framer-motion";
import { scaleOnHover } from "../../motionVariants";
import { elementStyles } from "../../styles";

const SkillsStackList = ({ stack, animateLogo, animateText }) => {
  return (
    <div>
      <ul
        className="mt-6 mb-4 grid max-w-[1200px] select-none grid-cols-4 gap-y-2
    md:grid-cols-6 lg:grid-cols-8"
      >
        {stack.map((item, idx) => (
          <li
            key={idx}
            className="mb-2 flex flex-col items-center space-y-1 lg:space-y-2 2xl:mb-6"
          >
            <motion.img
              variants={scaleOnHover}
              // initial="init"
              animate={animateLogo}
              whileHover="hover"
              src={item.logo}
              alt={`${item.name}-logo`}
              className={elementStyles.logoScale}
            />
            <div className="overflow-hidden">
              <motion.p
                animate={animateText}
                // variants={revealText}
                // initial="init"
                className="text-xs md:text-sm 2xl:text-base"
              >
                {item.name}
              </motion.p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsStackList;
