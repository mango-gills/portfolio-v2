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
      <div className="fixed hidden min-h-screen w-[400px] select-none border-r-2 border-vividRed-900 bg-[#1F1F1F] px-12 py-12 lg:flex lg:w-[20%] lg:flex-col lg:justify-center lg:px-8 lg:py-6 xl:w-[18%] xl:px-12 xl:py-12">
        <div
          className="flex w-full select-none overflow-hidden rounded-sm transition-all duration-500 ease-in-out
        hover:rounded-full lg:h-48 xl:h-56"
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
      <NavbarMobile />
    </>
  );
};

export default Navbar;
