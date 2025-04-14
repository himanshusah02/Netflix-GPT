import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MoviesCard = ({ posterPath }) => {

  if(!posterPath) return null;
  return (
    <div className="w-24 lg:w-52 mr-4  ">
      <img src={IMG_CDN_URL + posterPath} alt="card Image" />
    </div>
  );
};

export default MoviesCard;
