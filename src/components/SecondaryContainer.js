import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
  return (
    <div className='bg-black'>
        <div className='mt-0 md:-mt-48 relative z-10 pl-4 md:pl-12'>

        <MovieList title={"Now Playing"}  movies={movies.addNowPlayingMovies} />
        <MovieList title={"Popular"}  movies={movies.addPopularMovies} />
        <MovieList title={"Horror"}  movies={movies.addNowPlayingMovies} />
        <MovieList title={"Trending"}  movies={movies.addNowPlayingMovies} />


        </div>
        
        {
            /*
            MovieList Popular
            Trending
            Now Playing
            Horror
            */
        }
    </div>
  )
}

export default SecondaryContainer