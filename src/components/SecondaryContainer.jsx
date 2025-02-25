import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black -mt-32 relative z-30 text-white">
      {/* 
       movieList -popular
         MovieCard *n
       MovieList - Now Playing
       MovieList - trending
       Movies List - mixx type
      */}

      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MoviesList
        title={"You watch hestory"}
        movies={movies.nowPlayingMovies}
      />
      <MoviesList
        title={"Because you watch this"}
        movies={movies.nowPlayingMovies}
      />
    </div>
  );
}

export default SecondaryContainer;
