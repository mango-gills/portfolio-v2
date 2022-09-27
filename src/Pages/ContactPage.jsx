import AnimatePage from "../AnimatePages";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import React from "react";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#161617]">
      <Navbar />
      <AnimatePage>
        <div className="h-full lg:absolute lg:inset-0 lg:ml-[20%] lg:min-h-screen xl:ml-[18%]">
          <Contact />
        </div>
      </AnimatePage>
    </div>
  );
};

export default ContactPage;
