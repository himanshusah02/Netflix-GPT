import React from "react";

function VideoTitle({ title, overview }) {
  // console.log(title, overview);
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-7xl font-bold mt-100 pl-14">{title}</h1>
      <h4 className="text-xl w-1/2 pl-16 mt-2">{overview}</h4>
      <div className="mt-4 gap-10 pl-16 flex flex-row">
        <button className="bg-white text-black text-2xl p-1 w-32 rounded-md mr-10">
          PLAY
        </button>
        <button className="bg-gray-500 transparent-50% text-xl p-2 w-32 rounded-md">
          MORE INFO
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
