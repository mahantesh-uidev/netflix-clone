import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

// Custom Hook
const useUpcomingMovies = () => {
    // Fetching the data from TMDB API and update the store
  const dispatch = useDispatch();

  //Memoization: we can reduce unnecessary api calls as user traverse between components frequent api calls were made even the results were already peresent then also it will make a new api call, we can avoid this by using memoization
  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies(); // This code indicates if upcomingMovies results are already fetched, then now need to call the API again and again(Memoization).
  }, []);
}

export default useUpcomingMovies;