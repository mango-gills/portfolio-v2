import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import AnimatePage from "../AnimatePages";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#161617]">
      <Navbar />
      <AnimatePage>
        <div className="lg:absolute lg:inset-0 lg:ml-[20%] xl:ml-[18%]">
          <Hero />
          <div className="lg:hidden">
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </AnimatePage>
    </div>
  );
};

export default Home;
