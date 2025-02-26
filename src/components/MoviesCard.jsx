import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className="w-52 mr-4 ">
      <img src={IMG_CDN_URL + posterPath} alt="card Image" />
    </div>
  );
};

export default MoviesCard;
