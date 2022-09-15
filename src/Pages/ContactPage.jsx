import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import AnimatePage from "../AnimatePages";

const ContactPage = () => {
  return (
    <div className="bg-[#161617] relative w-full min-h-screen">
      <Navbar />
      <AnimatePage>
        <div className="lg:ml-[20%] xl:ml-[18%] h-full lg:min-h-screen lg:absolute lg:inset-0">
          <Contact />
        </div>
      </AnimatePage>
    </div>
  );
};

export default ContactPage;
