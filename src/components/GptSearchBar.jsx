import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import model from "../utils/openAi";
import { API_OPTIONS } from "../utils/Constants";
import { addAiMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  // serach the movies result form the TMDB api
  const serchMovieTMDB = async (movie) => {
    // console.log(movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    return data.json();
  };

  const handleGptSearchClick = async () => {


    const prompt =
      "act as a movies recommendation system and suggest some movies for the Query :" +
      searchText.current.value +
      "only give the 5 movies , comma seperated like the example result given ahead example : gadar, solleye ,don,border,golmal, dill wale le jayenge dulhaniya ";

  
    try {
      const result = await model.generateContent(prompt);
    
      const moviesList = result.response.text().split(/\s*,\s*/);
    
    

      if (!moviesList) {
        console.log("null");
      }
      const data = moviesList.map((movie) => serchMovieTMDB(movie));
    

      const tmdbMovieResult = await Promise.all(data);

   
      dispatch(
        addAiMovieResult({
          MoviesName: moviesName,
          moviesResult: tmdbMovieResult,
        })
      );
    } catch (error) {
      console.log("the errroe are :", error);
    }
  };

  return (
    <div className="w-3/4 m-auto bg-red-200 rounded-4xl">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="m-6 p-6 text-4xl   w-3/4 border outline-1 content-center origin-center rounded-3xl"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-green-500 w-32  p-4 rounded-4xl text-2xl border"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
