import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import AnimatePage from "../AnimatePages";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#161617]">
      <Navbar />
      <AnimatePage>
        <div className="h-full lg:absolute lg:inset-0 lg:ml-[20%] lg:min-h-screen xl:ml-[18%]">
          <Projects />
        </div>
      </AnimatePage>
    </div>
  );
};

export default ProjectsPage;
