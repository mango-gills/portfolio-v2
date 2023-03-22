import React from "react";
import AnimatePage from "../AnimatePages";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/NavbarComponents/Navbar";
import Projects from "../Components/ProjectsComponents/Projects";
import Skills from "../Components/SkillsSectionComponents/Skills";

const Home = () => {
  return (
    <>
      <div className="relative mx-auto min-h-screen max-w-[1920px]">
        <Navbar />
        <AnimatePage>
          <div className="bg-red-300 lg:absolute lg:inset-0 lg:ml-[20%] xl:ml-[18%]">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </AnimatePage>
      </div>
      <div className="fixed left-0 top-0 -z-10 h-full w-full bg-[#2d2d30]"></div>
    </>
  );
};

export default Home;
