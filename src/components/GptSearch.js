import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <img className='fixed -z-10' src={BG_IMG_URL} 
     alt="landing-page" />
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch