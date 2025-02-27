import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggetion from './GptMoviesSuggetion'

const GptSearch = () => {
  return (
    <div className='mt-20'>
     <GptSearchBar/>
     <GptMoviesSuggetion/>
    </div>
  )
}

export default GptSearch
