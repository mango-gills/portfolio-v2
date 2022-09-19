export const onDisplayVariant = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
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

export let animateShadow = {};

const isSmall = window.innerWidth < 1280;

if (!isSmall) {
  animateShadow = {
    hide: {
      x: ".32rem",
      y: "-.34rem",
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 500,
      },
    },
  };
} else {
  animateShadow = {
    hide: {
      x: ".15rem",
      y: "-.15rem",
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 500,
      },
    },
  };
}

export const scaleOnHover = {
  hover: {
    scale: 0.7,
    rotate: -45,
  },
};
