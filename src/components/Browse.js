import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'

const Browse = () => {
  const showGptSeachView = useSelector((store) => store.gpt.showGptSeachView)

  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      {showGptSeachView ? <GptSearch />:
      <>
      <MainContainer />
      <SecondaryContainer />
      </>}
      
      
      
    {
      /*
      MainContainer
        - VideoTitle
        - VideoTitle
        SecondaryContainer
        - MovieList * n
            - Cards * n


       */
    }


    </div>
  )
}

export default Browse