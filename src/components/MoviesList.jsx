import React from "react";
import MoviesCard from "./MoviesCard";


const MoviesList = ({ title, movies }) => {


  return (
    <div>
      <h1 className="p-2 text-3xl font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex flex-nowrap flex-row ml-10 ">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
