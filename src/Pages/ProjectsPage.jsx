import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";

const ProjectsPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full">
      <Navbar />
      <div className="lg:ml-[22%] xl:ml-[20%] h-full lg:h-screen">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
