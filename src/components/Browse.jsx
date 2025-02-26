import React from "react";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies ";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {/* 
mainContainer
 - videoBackground
 - videoTitle
 secondaryContainer
 - moviesList * n
 - cards * n

*/}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
