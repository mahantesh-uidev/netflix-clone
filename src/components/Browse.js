import useNowPlayingMovies from '../hooks/useNowplayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
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