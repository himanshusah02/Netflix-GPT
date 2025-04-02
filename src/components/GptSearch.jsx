import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggetion from "./GptMoviesSuggetion";
import { BackGround_Photo } from "../utils/Constants";

const GptSearch = () => {
  return (
    <div className=" w-screen h-screen overflow-auto brightness-100  bg-[#212121] ">
      <div className=" bg-[#212121] flex flex-col  content-center gap-10">
        <GptSearchBar />
        <GptMoviesSuggetion />
      </div>
    </div>
  );
};

export default GptSearch;
