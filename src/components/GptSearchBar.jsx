import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <input type="text" className="m-6 p-6 text-4xl w-3/4 border outline-1 content-center origin-center" placeholder="What would you like to watch today?" />
      <button className="bg-green-500">Search</button>
    </div>
  );
};

export default GptSearchBar;
