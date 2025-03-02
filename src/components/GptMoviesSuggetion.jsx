import React from "react";
import { useSelector } from "react-redux";

const GptMoviesSuggetion = () => {
  const { moviesResult, MoviesName } = useSelector((store) => store.gpt);
  if (!MoviesName) return null;

  return (
    <div>
      <div className="p-4 m-auto text-white text-4xl bg-red-500  w-1/2">
        <p>{MoviesName}</p>
      </div>
    </div>
  );
};

export default GptMoviesSuggetion;
