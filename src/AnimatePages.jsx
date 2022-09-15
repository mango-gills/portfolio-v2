import React from "react";
import { motion } from "framer-motion";

const animateChild = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

const AnimatePage = ({ children }) => {
  return (
    <motion.div
      variants={animateChild}
      initial="init"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;