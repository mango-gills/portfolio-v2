export const onDisplayVariant = {
  init: {
    opacity: 0,
    y: -300,
  },
  active: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const revealChildren = {
  init: {
    opacity: 0,
    y: 150,
  },
  active: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 16,
    },
  },
};

export const slideInRevealChildren = {
  init: {
    opacity: 0,
    x: -150,
  },
  active: {
    x: 0,
    opacity: 1,
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

export const isSmall = window.innerWidth < 1280;

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
        delay: 1,
        type: "spring",
        stiffness: 500,
      },
    },
  };
}

export const scaleOnHover = {
  init: {
    scale: 0,
  },
  active: {
    scale: [1, 1.2, 1.2, 1],
    borderRadius: ["20%", "50%", "50%", "20%"],
    rotate: [0, 270, 270, 0],
    transition: {
      rotate: {
        duration: 1,
      },
    },
  },
  hover: {
    scale: 0.5,
    rotate: 45,
  },
};

export const revealText = {
  init: {
    x: -80,
    opacity: 0,
  },
  active: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      duration: 1,
      delay: 1,
    },
  },
};
