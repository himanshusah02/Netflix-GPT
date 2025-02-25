import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
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
