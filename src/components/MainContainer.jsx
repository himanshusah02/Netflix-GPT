import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

function MainContainer() {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  return (
    <div>
      <VideoBackground/>
      <VideoTitle/>
    </div>
  )
}

export default MainContainer
