import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div className="bg-[#161617] relative w-full h-screen">
      <Navbar />
      <div className="lg:ml-[24%] lg:absolute xl:ml-[22%] lg:inset-0">
        <Hero />
        <div className="lg:hidden">
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
