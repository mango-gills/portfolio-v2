import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import AnimatePage from "../AnimatePages";

const ProjectsPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full">
      <Navbar />
      <AnimatePage>
      <div className="lg:ml-[22%] xl:ml-[20%] h-full lg:h-screen">
        <Projects />
      </div>
      </AnimatePage>
    </div>
  );
};

export default ProjectsPage;
