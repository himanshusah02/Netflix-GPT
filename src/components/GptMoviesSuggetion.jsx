import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesSuggetion = () => {
  const { moviesResult, MoviesName } = useSelector((store) => store.gpt);
  if (!MoviesName) return null;
  console.log(moviesResult[0].results);

  return (
    <div>
      <div className="p-4 m-auto  lg:w-2/3 rounded-3xl text-white  bg-[#171717]  ">
      <p className="text-[24px] text-center lg:mb-20">Your Search result ....</p>
        {MoviesName.map((MovieName,index) => (
          <MoviesList 
            key={MovieName}
            title={MoviesName[index]}
            movies={moviesResult[index].results}
            
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggetion;

