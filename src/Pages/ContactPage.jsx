import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

const ContactPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full lg:h-screen">
      <Navbar />
      <div className="lg:ml-[16%] xl:ml-[18%] h-full lg:h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
