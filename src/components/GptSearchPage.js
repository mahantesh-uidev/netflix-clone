import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="logo"
          className='h-screen w-screen object-cover'
        />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
    </>
  )
}

export default GptSearchPage;