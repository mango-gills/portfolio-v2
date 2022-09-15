import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import AnimatePage from "../AnimatePages";

const ProjectsPage = () => {
  return (
    <div className="bg-[#161617] relative w-full min-h-screen">
      <Navbar />
      <AnimatePage>
        <div className="lg:ml-[16%] xl:ml-[18%] h-full lg:min-h-screen lg:absolute lg:inset-0">
          <Projects />
        </div>
      </AnimatePage>
    </div>
  );
};

export default ProjectsPage;
