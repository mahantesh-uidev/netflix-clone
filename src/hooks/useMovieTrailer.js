import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
 // Fetch trailer video && update the store with trailer video data
 const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]; // condition to check if the filtered data doesn't have the trailer, then take first result video as trailer
    dispatch(addTrailerVideo(trailer?.key))
}
useEffect(() => {
    getMovieVideos();
}, [])
}

export default useMovieTrailer;