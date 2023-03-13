import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animateLinks, item, slideInMenu } from "../../motionVariants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { elementStyles } from "../../styles";
import { navLinksMobile } from "./navbarLinks";
import { Link as ScrollLink } from "react-scroll";

const NavbarMobile = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNavigation = () => {
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navIsOpen]);

  return (
    <div className="fixed z-10 flex w-full items-center justify-between border-b-2 border-vividRed-900 bg-[#08060c] px-6 py-4 text-white lg:hidden">
      <ScrollLink
        to={`hero`}
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        className="cursor-pointer select-none"
      >
        <h1 className="text-2xl font-bold tracking-widest text-white sm:text-3xl">
          Mango Devs
        </h1>
        <p className="text-base tracking-widest text-vividRed-900 sm:text-lg">
          Web Developer
        </p>
      </ScrollLink>

      <HiOutlineMenuAlt3
        size={35}
        className={
          navIsOpen == false
            ? "z-20 cursor-pointer"
            : "z-20 hidden cursor-pointer"
        }
        onClick={() => handleNavigation()}
      />

      <MdOutlineClose
        size={35}
        className={
          navIsOpen == true
            ? "z-20 cursor-pointer font-bold text-vividRed-900"
            : "z-20 hidden cursor-pointer"
        }
        onClick={() => handleNavigation()}
      />

      <AnimatePresence>
        {navIsOpen && (
          <motion.div
            variants={slideInMenu}
            initial="init"
            animate="active"
            exit="exit"
            className="absolute top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-[#08060c] p-10 font-semibold text-white"
          >
            <motion.ul
              variants={animateLinks}
              initial="init"
              animate="active"
              className="animate-links space-y-6 text-3xl font-semibold "
            >
              <AnimatePresence>
                {navLinksMobile.map((link, idx) => (
                  <motion.li
                    key={idx}
                    variants={item}
                    className={elementStyles.hoverLink}
                  >
                    {link.element !== "cv" ? (
                      <ScrollLink
                        to={`${link.element}`}
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={600}
                        onClick={() => setNavIsOpen(false)}
                      >
                        {link.title}
                      </ScrollLink>
                    ) : (
                      <a
                        href="https://github.com/mango-gills"
                        target="_blank"
                        onClick={() => setNavIsOpen(false)}
                      >
                        {link.title}
                      </a>
                    )}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
