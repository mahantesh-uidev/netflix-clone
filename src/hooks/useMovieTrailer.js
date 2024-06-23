import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    //Memoization: we can reduce unnecessary api calls as user traverse between components frequent api calls were made even the results were already peresent then also it will make a new api call, we can avoid this by using memoization
  const trailerVideo = useSelector(store => store.movies.trailerVideo);

 // Fetch trailer video && update the store with trailer video data
 const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]; // condition to check if the filtered data doesn't have the trailer, then take first result video as trailer
    dispatch(addTrailerVideo(trailer?.key))
}
useEffect(() => {
    !trailerVideo && getMovieVideos(); // This code indicates if trailerVideo results are already fetched, then now need to call the API again and again(Memoization).
}, [])
}

export default useMovieTrailer;