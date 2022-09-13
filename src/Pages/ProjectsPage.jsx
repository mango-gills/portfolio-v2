import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";

const ProjectsPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full">
      <Navbar />
      <div className="xl:ml-[80px] h-full">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
