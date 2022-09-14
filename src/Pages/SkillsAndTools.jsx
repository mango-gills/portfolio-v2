import React from "react";
import Skills from "../Components/Skills";
import Navbar from "../Components/Navbar";

const SkillsAndTools = () => {
  return (
    <div className="bg-[#161617] w-full h-full lg:h-screen">
      <Navbar />
      <div className="lg:ml-[16%] xl:ml-[18%] h-full lg:h-screen">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsAndTools;
