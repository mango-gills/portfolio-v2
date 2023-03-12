import AnimatePage from "../AnimatePages";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/NavbarComponents/Navbar";
import Projects from "../Components/Projects";
import React from "react";
import Skills from "../Components/SkillsSectionComponents/Skills";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#161617]">
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
  );
};

export default Home;
