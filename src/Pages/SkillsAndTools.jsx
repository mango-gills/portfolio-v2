import AnimatePage from "../AnimatePages";
import Navbar from "../Components/Navbar";
import React from "react";
import Skills from "../Components/Skills";

const SkillsAndTools = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#161617]">
      <Navbar />
      <AnimatePage>
        <div className="h-full lg:absolute lg:inset-0 lg:ml-[20%] lg:min-h-screen xl:ml-[18%]">
          <Skills />
        </div>
      </AnimatePage>
    </div>
  );
};

export default SkillsAndTools;
