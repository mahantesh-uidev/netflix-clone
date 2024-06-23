import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

// Custom Hook
const usePopularMovies = () => {
    // Fetching the data from TMDB API and update the store
  const dispatch = useDispatch();

  //Memoization: we can reduce unnecessary api calls as user traverse between components frequent api calls were made even the results were already peresent then also it will make a new api call, we can avoid this by using memoization
  const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    !popularMovies && getPopularMovies(); // This code indicates if popularMovies results are already fetched, then now need to call the API again and again(Memoization).
  }, []);
}

export default usePopularMovies;