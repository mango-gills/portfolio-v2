export const onDisplayVariant = {
  init: {
    opacity: 0,
    x: -100,
  },
  active: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideInMenu = {
  init: {
    x: "100vw",
    opacity: 0,
  },
  active: {
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
  init: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const item = {
  init: { x: -100, opacity: 0 },
  active: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export let animateShadow = {};

const isSmall = window.innerWidth < 1280;

if (!isSmall) {
  animateShadow = {
    init: {
      x: ".32rem",
      y: "-.34rem",
    },
    active: {
      x: 0,
      y: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 600,
      },
    },
  };
} else {
  animateShadow = {
    init: {
      x: ".15rem",
      y: "-.15rem",
    },
    active: {
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
  init: {
    scale: 0,
    rotate: -360,
  },
  active: {
    scale: 1,
    rotate: 0,
    transition: {
      rotate: {
        duration: 0.6,
      },
    },
  },
  hover: {
    scale: 0.5,
    rotate: -45,
  },
};

export const revealText = {
  init: {
    x: -100,
    opacity: 0,
  },
  active: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      duration: 0.8,
      delay: 0.6,
    },
  },
};
