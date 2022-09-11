export const onDisplayVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  display: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideInMenu = {
  hide: {
    x: "100vw",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
  exit: {
    x: "100vw",
    // opacity: 0,
  },
};

export const animateLinks = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const item = {
  hide: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};
