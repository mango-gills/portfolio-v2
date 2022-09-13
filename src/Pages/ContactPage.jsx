import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

const ContactPage = () => {
  return (
    <div className="bg-[#161617] w-full h-full lg:h-screen">
      <Navbar />
      <div className="lg:ml-[360px] xl:ml-[450px]  h-full lg:h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
