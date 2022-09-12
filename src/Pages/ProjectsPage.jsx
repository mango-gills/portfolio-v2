import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";

const ProjectsPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full lg:h-screen">
      <Navbar />
      <div className="xl:ml-[80px] h-full lg:h-screen">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
