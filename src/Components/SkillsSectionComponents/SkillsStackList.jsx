import React from "react";
import { motion } from "framer-motion";
import { scaleOnHover } from "../../motionVariants";
import { elementStyles } from "../../styles";

const SkillsStackList = ({ stack, animateLogo, animateText }) => {
  return (
    <div>
      <ul
        className="mt-6 mb-4 grid max-w-[1200px] select-none grid-cols-3 gap-3
    md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-5 2xl:gap-4"
      >
        {stack.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center space-x-1 rounded-md border-[2px] border-[#1f1f1f] p-2 xl:p-0"
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
                className="text-[11px] md:text-[12px] 2xl:text-lg"
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
