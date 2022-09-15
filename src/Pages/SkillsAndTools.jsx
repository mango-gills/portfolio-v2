import React from "react";
import Skills from "../Components/Skills";
import Navbar from "../Components/Navbar";
import AnimatePage from "../AnimatePages";

const SkillsAndTools = () => {
  return (
    <div className="bg-[#161617] relative w-full min-h-screen">
      <Navbar />
      <AnimatePage>
        <div className="lg:ml-[16%] xl:ml-[18%] h-full lg:min-h-screen lg:absolute lg:inset-0">
          <Skills />
        </div>
      </AnimatePage>
    </div>
  );
};

export default SkillsAndTools;
