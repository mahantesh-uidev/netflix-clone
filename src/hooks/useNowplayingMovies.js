import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

// Custom Hook
const useNowPlayingMovies = () => {
    // Fetching the data from TMDB API and update the store
  const dispatch = useDispatch();

  //Memoization: we can reduce unnecessary api calls as user traverse between components frequent api calls were made even the results were already peresent then also it will make a new api call, we can avoid this by using memoization
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    // if(!nowPlayingMovies) getNowPlayingMovies(); 
    // OR
    !nowPlayingMovies && getNowPlayingMovies(); // This code indicates if nowPlayingMovies results are already fetched, then now need to call the API again and again(Memoization).
  }, []);
}

export default useNowPlayingMovies;