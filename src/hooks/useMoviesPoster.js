import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useMoviesPoster = (movieId) => {
  const getMoviesPoster = async () => {
    const data = fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/images",
      API_OPTIONS
    );
    const json = (await data).json();
    console.log(json);

    const filterPoster = json.result.
    backdrop_path;
   console.log(filterPoster);
  };
  useEffect(() => {
    getMoviesPoster();
  }, []);
};

export default useMoviesPoster;
