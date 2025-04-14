import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="lg:-mt-48 relative text-white h-auto">
        <div>
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MoviesList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondaryContainer;
