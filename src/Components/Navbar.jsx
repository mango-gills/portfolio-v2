import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { elementStyles } from "../styles";
import { motion, AnimatePresence } from "framer-motion";
import { slideInMenu, animateLinks, item } from "../motionVariants";
import { AiOutlineGitlab, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatarIMG from '../assets/defmhr4-fullview.jpg'

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Skills & Tools",
      path: "/skills",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "CV",
      path: "/resume",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleNavigation = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <>
      <div className="hidden lg:flex lg:flex-col lg:justify-center bg-[#1F1F1F] lg:w-[20%] xl:w-[18%] w-[400px] h-screen absolute border-r-2 border-vividRed-900 px-12 lg:px-8 py-12 lg:py-6 xl:px-12 xl:py-12">
        <div className="top-nav bg-white w-full h-1/4 rounded-sm bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: `url(${avatarIMG})` }} >
        </div>

        <div className="bottom-nav">
          <Link to={"/"}>
            <h1 className="text-[2.2rem] lg:text-[1.6rem] xl:text-[2rem] font-bold tracking-widest text-white lg:mt-6">
              Mango Devs
            </h1>
            <p className="lg:text-lg text-xl xl:text-xl tracking-widest text-vividRed-900">
              Web Developer
            </p>
          </Link>

          <ul className="mt-6 xl:mt-12 space-y-2 text-xl xl:text-2xl xl:space-y-4 text-white">
            <li>
              <Link to={"/skills"}>Skills & Tools</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>CV</li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <ul className="mt-6 xl:mt-12 space-y-2 xl:space-y-4">
            <li className="flex items-center ">
              <AiFillGithub size={30} className="text-white" />

              <p className="ml-2 xl:ml-4 xl:text-xl text-lg text-white">
                Github
              </p>
            </li>
            <li className="flex items-center">
              <AiOutlineGitlab size={30} className="text-white" />
              <p className="ml-2 xl:ml-4 xl:text-xl text-lg text-white">
                Gitlab
              </p>
            </li>
            <li className="flex items-center">
              <AiFillLinkedin size={30} className="text-white" />
              <p className="ml-2 xl:ml-4 xl:text-xl text-lg text-white">
                LinkedIn
              </p>
            </li>
          </ul>
        </div>
        {/* 
        <div className="w-full overflow-y-clip px-4 py-4 xl:px-8 xl:py-4 mt-6 xl:mt-12 lg:space-y-2 xl:space-y-2 text-center  text-white border-2 border-gray-500 rounded-md">
          <h1 className="text-base xl:text-lg font-semibold tracking-widest text-red-500">
            Click to view joke of the Day!
          </h1>
          <p className="hidden lg:block xl:text-base lg:text-xs">
            I used to visit a casino, until I found out their top floor
            restaurant served beef.
          </p>
          <p className="hidden lg:block italic font-medium xl:text-base lg:text-xs">
            That meant the steaks were just too high for me.
          </p>
        </div> */}

        {/* <div className="relative w-16 mt-8 lg:mt-6 xl:mt-12 bg-gray-500 rounded-full">
          <FaSun className="w-8 h-8 p-1 bg-white rounded-full" />
        </div> */}
      </div>

      {/* Mobile Navigation */}
      <div className="fixed flex items-center justify-between w-full px-6 py-4 text-white border-b-2 border-vividRed-900 lg:hidden bg-[#08060c] z-1">
        <Link to={"/"} className="cursor-pointer select-none">
          <h1 className="text-2xl font-bold tracking-widest text-white sm:text-3xl">
            Mango Devs
          </h1>
          <p className="text-vividRed-900 text-base sm:text-lg tracking-widest">
            Web Developer
          </p>
        </Link>

        <HiOutlineMenuAlt3
          size={35}
          className={
            navIsOpen == false
              ? "z-20 cursor-pointer"
              : "z-20 cursor-pointer hidden"
          }
          onClick={() => handleNavigation()}
        />

        <MdOutlineClose
          size={35}
          className={
            navIsOpen == true
              ? "z-20 cursor-pointer text-vividRed-900 font-bold"
              : "z-20 cursor-pointer hidden"
          }
          onClick={() => handleNavigation()}
        />

        <AnimatePresence>
          {navIsOpen && (
            <motion.div
              variants={slideInMenu}
              initial="hide"
              animate="show"
              exit="exit"
              className="absolute top-0 left-0 flex w-full h-screen p-10 font-semibold text-white bg-[#08060c] z-10 items-center justify-center"
            >
              <motion.ul
                variants={animateLinks}
                initial="hide"
                animate="show"
                className="space-y-6 text-3xl font-semibold animate-links "
              >
                <AnimatePresence>
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={idx}
                      variants={item}
                      // initial={{ opacity: 0 }}
                      // animate={{ opacity: 1 }}
                      // transition={{ duration: 0.3, delay: idx * 0.3 }}
                      className={elementStyles.hoverLink}
                    >
                      <Link to={`${link.path}`}>{link.title}</Link>
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
