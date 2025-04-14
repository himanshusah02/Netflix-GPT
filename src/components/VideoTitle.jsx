import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
function VideoTitle({ title, overview }) {

  return (
    <div className="lg:w-screen  aspect-video absolute text-white lg:bg-gradient-to-r from-black">
      <h1 className="text-xl lg:text-7xl  font-bold mt-30 lg:mt-70 pl-4 lg:pl-14">{title}</h1>
      <h4 className="hidden lg:block text-xl w-1/2 pl-16 mt-2">{overview.slice(0,150) + "...."}</h4>
      <div className="mt-4 gap-2 lg:gap-10 pl-4 lg:pl-16 flex flex-col lg:flex-row ">
        <button className="bg-white text-black  lg:text-2xl text-center w-16 lg:w-24 lg:h-10 rounded-md ">
          <div className="flex flex-row gap-1 justify-around items-center px-1">
            <FaPlay />
            <p>Play</p>
          </div>
        </button>
        <button className="bg-gray-500 transparent-50% text-[10px] w-20 lg:w-34 rounded-md">
          <div className="flex flex-row gap-1 items-center px-1">
            <FiAlertCircle className="text-[10px] lg:text-3xl" />
            <p>MORE-INFO</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
