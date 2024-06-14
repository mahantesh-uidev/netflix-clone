import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return; // Known as Early return, If didn't check this condtition the code will break because initial value of nowPlayingMovie is null, we are accessing the first value from null, so the code will break.
    // if (!movies) return;
    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;