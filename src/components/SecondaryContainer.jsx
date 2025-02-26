import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-30 text-white">
        <div>
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList
            title={"You watch hestory"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Because you watch this"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondaryContainer;
