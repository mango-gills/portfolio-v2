import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div className="bg-[#161617] w-full h-screen">
      <Navbar />
      <div className="xl:ml-[400px] h-screen">
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
