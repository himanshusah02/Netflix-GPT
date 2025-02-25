import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
function VideoTitle({ title, overview }) {
  // console.log(title, overview);
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-7xl font-bold mt-100 pl-14">{title}</h1>
      <h4 className="text-xl w-1/2 pl-16 mt-2">{overview}</h4>
      <div className="mt-4 gap-10 pl-16 flex flex-row">
        <button className="bg-white text-black text-2xl text-center  w-24 h-10 rounded-md ">
          <div className="flex flex-row gap-1 justify-around items-center px-1">
            <FaPlay />
            <p>Play</p>
          </div>
        </button>
        <button className="bg-gray-500 transparent-50%  w-34 rounded-md">
          <div className="flex flex-row gap-1 items-center px-1">
            <FiAlertCircle className="text-3xl" />
            <p>MORE-INFO</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
