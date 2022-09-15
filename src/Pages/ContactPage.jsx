import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import AnimatePage from "../AnimatePages";

const ContactPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full lg:h-screen">
      <Navbar />
      <AnimatePage>
      <div className="lg:ml-[16%] xl:ml-[18%] h-full lg:h-screen">
        <Contact />
      </div>
    </AnimatePage>
    </div>
  );
};

export default ContactPage;
