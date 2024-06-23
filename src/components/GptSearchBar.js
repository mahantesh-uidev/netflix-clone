import React, { useEffect, useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //Memoization: we can reduce unnecessary api calls as user traverse between components frequent api calls were made even the results were already peresent then also it will make a new api call, we can avoid this by using memoization
  const movieResults = useSelector(store => store.gpt.movieResults);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    if(!movieResults) return null;
    console.log(searchText.current.value);
    // make an API call to GPT API and get movie results

    const gptQuery =
      "Act as a Movie Recommendation System and suggests some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Reasult: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if(!gptResults.choices) { 
      // TODO: write Error Handling
    }
    console.log(gptResults.choices[0]?.message?.content);
    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");

    // ['Andaz Apna Apna', 'Hera Pheri', 'Chupke Chupke', 'Jaane Bhi Do Yaaro', 'Padosan']

    // For each movie I will search in TMDB API

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // The result will be array of 5 promises [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
