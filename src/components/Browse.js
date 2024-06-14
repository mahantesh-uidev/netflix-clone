import useNowPlayingMovies from '../hooks/useNowplayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
      {/* 
      Netflix Home page Design components- [Planning]
      Main Container
        - Video Background
        - Video Title
        - Play/Pause Buttons

      Secondary Container
        - MoviesList * N 
          - Cards * N
      
      */}
    </div>
  )
}

export default Browse;