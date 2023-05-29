import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import avatarIMG from "../../assets/defmhr4-fullview.webp";
import { profiles } from "./profileLinks";
import { navLinksDesktop } from "./navbarLinks";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <div className="fixed hidden min-h-screen w-[400px] select-none border-r-[1px] border-vividRed-900 bg-[#1F1F1F] py-8 pl-7 xl:flex xl:w-[22%] xl:flex-col xl:justify-center 2xl:w-[20%] 2xl:py-12 2xl:pl-12">
        <div
          className="flex w-full select-none overflow-hidden rounded-sm transition-all duration-500 ease-in-out
        hover:rounded-full xl:h-56 xl:w-56 2xl:h-64 2xl:w-64"
        >
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
            <h1 className="text-[1.8rem] font-bold tracking-widest text-white lg:mt-6 2xl:text-[2.2rem]">
              Mango Devs
            </h1>
            <p className="text-[1.1rem] tracking-widest text-vividRed-900 2xl:text-[1.28rem]">
              Front End Developer
            </p>
          </ScrollLink>

          {/* Page links */}
          <ul className="mt-6 flex flex-col space-y-1 text-lg text-white xl:mt-6 2xl:mt-8 2xl:space-y-2 2xl:text-2xl">
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
          <ul className="mt-6 text-xl text-white xl:mt-8 2xl:space-y-1">
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
                  <p className="ml-2 text-base xl:ml-4 2xl:text-xl">
                    {profile.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <NavbarMobile />
    </>
  );
};

export default Navbar;
