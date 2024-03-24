import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {
  const dispatch = useDispatch()

  
const searchMovieTmdb = async (movie)=> {
  
  const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)

  const json = await response.json()
  return json.results

}

  const searchBoxGpt = useRef(null);
  const handleGptSearch = async()=>{
    
    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query" + searchBoxGpt.current.value + " only give me 3 movies, comma seperated for example: Gadar, Sholay, Koi mil gya"
    const gptResults =  await openai.chat.completions.create({
      messages: [{ role: "system", content: gptQuery}],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    

    const promisesResults = gptMovies.map((movie)=>searchMovieTmdb(movie))
    const tmdbResults =  await Promise.all(promisesResults)

    
    
    dispatch(addGptMovieResult({movieNames : gptMovies ,movieResults: tmdbResults}))



  }


  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form  className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{e.preventDefault()}}>
            <input
            ref={searchBoxGpt}
            className='p-2 m-4 col-span-9' 
            type="text" 
            placeholder='What do you want to watch today?' />
            <button className='px-4 py-2 m-4 col-span-3 bg-red-700 text-white'
            onClick={handleGptSearch}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar