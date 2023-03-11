import { Link } from "react-router-dom";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="grid h-screen w-full place-items-center bg-[#1f1f1f] text-white">
      <div className="text-center">
        <h1 className="text-lg text-yellow-500 md:text-xl lg:text-2xl">
          (╯°□°）╯︵ ┻━┻
        </h1>
        <div className="my-4">
          <h1 className="text-7xl font-extrabold md:text-8xl lg:text-9xl">
            404
          </h1>
          <h2 className="text-lg text-gray-300 md:text-2xl lg:text-3xl">
            Page Not Found
          </h2>
        </div>
        <Link
          className="text-base font-normal text-vividRed-900/90 underline  underline-offset-4 md:text-xl lg:text-2xl"
          to={"/"}
        >
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
