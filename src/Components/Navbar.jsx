import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { elementStyles } from "../styles";
import { motion, AnimatePresence } from "framer-motion";
import { slideInMenu, animateLinks, item } from "../motionVariants";
import { AiOutlineGitlab, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatarIMG from "../assets/defmhr4-fullview.jpg";

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
      <div className="hidden lg:flex lg:flex-col lg:justify-center bg-[#1F1F1F] lg:w-[20%] xl:w-[18%] w-[400px] min-h-screen border-r-2 border-vividRed-900 px-12 lg:px-8 py-12 lg:py-6 xl:px-12 xl:py-12">
        {/* <div
          className="top-nav bg-white w-full h-56 aspect-square overflow-hidden rounded-sm bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${avatarIMG})` }}

        > */}
        <div className="lg:h-48 xl:h-56 w-full overflow-hidden rounded-sm flex">
          <img
            src={avatarIMG}
            alt="avatar"
            className="w-full h-full object-cover"
          />
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

              <a
                href="https://github.com/mango-gills"
                target="_blank"
                className="ml-2 xl:ml-4 xl:text-xl text-lg text-white"
              >
                Github
              </a>
            </li>
            <li className="flex items-center">
              <AiOutlineGitlab size={30} className="text-white" />
              <a
                href="https://gitlab.com/muk21"
                target="_blank"
                className="ml-2 xl:ml-4 xl:text-xl text-lg text-white"
              >
                Gitlab
              </a>
            </li>
            <li className="flex items-center">
              <AiFillLinkedin size={30} className="text-white" />
              <a
                href="https://www.linkedin.com/in/mcge/"
                target="_blank"
                className="ml-2 xl:ml-4 xl:text-xl text-lg text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed flex items-center justify-between w-full px-6 py-4 text-white border-b-2 border-vividRed-900 lg:hidden bg-[#08060c] z-10">
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
              initial="init"
              animate="active"
              exit="exit"
              className="absolute top-0 left-0 flex w-full h-screen p-10 font-semibold text-white bg-[#08060c] z-10 items-center justify-center"
            >
              <motion.ul
                variants={animateLinks}
                initial="init"
                animate="active"
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
