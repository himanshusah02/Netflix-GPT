import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggetion from "./GptMoviesSuggetion";
import { BackGround_Photo } from "../utils/Constants";

const GptSearch = () => {
  return (
    <div className="h-screen w-screen overflow-hidden brightness-100 relative ">
      <div className="absolute -z-10">
        <img src={BackGround_Photo} alt="" />
      </div>
      <div className="mt-40  ">
        <GptSearchBar />
        <GptMoviesSuggetion />
      </div>
    </div>
  );
};

export default GptSearch;
