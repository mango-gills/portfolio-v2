import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#161617]">
      <div className="px-8 py-4 space-y-6 text-white ">
        <h1 className="text-2xl font-bold">PROJECTS</h1>
        <img src="./p5-1.png" alt="" />
        <h1 className="text-2xl font-bold text-red-500">Chapp</h1>
        <div className="flex flex-col w-full">
          <div className="flex space-x-2">
            <p>Tech Stack:</p>
            <p className="text-red-500">ReactJS</p>
            <p className="text-red-500">Firebase</p>
          </div>
          <div className="flex space-x-2">
            <p>Links:</p>
            <p className="text-red-500">Demo</p>
            <p className="text-red-500">Code</p>
          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non itaque
          cum ad et, maxime laborum odit molestiae repudiandae consequatur ut
          voluptatem fugiat? Numquam, veniam dolorem!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 px-8 pt-4 pb-8">
        <div className="grid w-full h-16 bg-[#3D3D3D] border-2 border-[#515151] shadow-black rounded-md sm:h-20 place-items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="mb-1 text-sm font-bold sm:text-xl text-[#FF3131]">
              Project - 001
            </h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className="grid w-full h-16 bg-[#3D3D3D] border-2 border-[#515151] shadow-black rounded-md sm:h-20 place-items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="mb-1 text-sm font-bold sm:text-xl text-[#FF3131]">
              Project - 001
            </h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className="grid w-full h-16 bg-[#3D3D3D] border-2 border-[#515151] shadow-black rounded-md sm:h-20 place-items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="mb-1 text-sm font-bold sm:text-xl text-[#FF3131]">
              Project - 001
            </h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className="grid w-full h-16 bg-[#3D3D3D] border-2 border-[#515151] shadow-black rounded-md sm:h-20 place-items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="mb-1 text-sm font-bold sm:text-xl text-[#FF3131]">
              Project - 001
            </h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className="grid w-full h-16 bg-[#3D3D3D] border-2 border-[#515151] shadow-black rounded-md sm:h-20 place-items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="mb-1 text-sm font-bold sm:text-xl text-[#FF3131]">
              Project - 001
            </h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
        <div className="grid w-full h-16 bg-[#3D3D3D] border-2 border-[#515151] shadow-black rounded-md sm:h-20 place-items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="mb-1 text-sm font-bold sm:text-xl text-[#FF3131]">
              Project - 001
            </h1>
            <p className="text-sm text-white sm:text-lg">Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
