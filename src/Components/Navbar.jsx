import {
  AiFillGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiOutlineGitlab,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { animateLinks, item, slideInMenu } from "../motionVariants";

import { FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import avatarIMG from "../assets/defmhr4-fullview.webp";
import { elementStyles } from "../styles";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      element: "hero",
    },
    {
      title: "Skills & Tools",
      element: "skills",
    },
    {
      title: "Projects",
      element: "projects",
    },
    {
      title: "CV",
      element: "cv",
    },
    {
      title: "Contact",
      element: "contact",
    },
  ];

  const navLinksDesktop = [
    {
      title: "Skills & Tools",
      element: "skills",
    },
    {
      title: "Projects",
      element: "projects",
    },
    {
      title: "CV",
      element: "cv",
    },
    {
      title: "Contact",
      element: "contact",
    },
  ];

  const profiles = [
    {
      title: "Github",
      link: `https://github.com/mango-gills`,
    },
    {
      title: "Gitlab",
      link: `https://gitlab.com/muk21`,
    },
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/mcge/`,
    },
    ,
  ];

  const handleNavigation = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <>
      <div className="fixed hidden min-h-screen w-[400px] border-r-2 border-vividRed-900 bg-[#1F1F1F] px-12 py-12 lg:flex lg:w-[20%] lg:flex-col lg:justify-center lg:px-8 lg:py-6 xl:w-[18%] xl:px-12 xl:py-12">
        <div className="pointer-events-none flex w-full select-none overflow-hidden rounded-sm lg:h-48 xl:h-56">
          <img
            src={avatarIMG}
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="bottom-nav selection:bg-vividRed-900/80 selection:text-neutral-900">
          <ScrollLink
            to={`hero`}
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className="cursor-pointer select-none"
          >
            <h1 className="text-[2.2rem] font-bold tracking-widest text-white lg:mt-6 lg:text-[1.6rem] xl:text-[2rem]">
              Mango Devs
            </h1>
            <p className="text-xl tracking-widest text-vividRed-900 lg:text-lg xl:text-xl">
              Web Developer
            </p>
          </ScrollLink>

          {/* Page links */}
          <ul className="mt-6 flex flex-col space-y-2 text-xl text-white xl:mt-12 xl:text-2xl">
            {navLinksDesktop.map((link, idx) => (
              <li key={idx}>
                {link.element !== "cv" ? (
                  <ScrollLink
                    to={`${link.element}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}
                    className="hover-underline"
                  >
                    {link.title}
                  </ScrollLink>
                ) : (
                  <a
                    className="hover-underline"
                    href="https://github.com/mango-gills"
                    target="_blank"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Profile links  */}
          <ul className="mt-6 space-y-1 text-white xl:mt-12">
            {profiles.map((profile, idx) => (
              <li key={idx} className="hover-underline">
                <a
                  href={profile.link}
                  className="flex cursor-pointer items-center"
                  target="_blank"
                >
                  {profile.title == "Github" ? (
                    <AiFillGithub size={30} />
                  ) : profile.title == "Gitlab" ? (
                    <AiFillGitlab size={30} />
                  ) : (
                    <AiFillLinkedin size={30} />
                  )}
                  <p className="ml-2 text-lg xl:ml-4 xl:text-xl">
                    {profile.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                  {navLinks.map((link, idx) => (
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
                          offset={-80}
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
    </>
  );
};

export default Navbar;
