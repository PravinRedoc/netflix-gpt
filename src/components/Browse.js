import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
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