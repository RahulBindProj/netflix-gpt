import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const mainMovie = movies && movies.length > 0 ? movies[0] : null;
  if (!mainMovie) {
    return;
  }
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBackground></VideoBackground>
    </div>
  );
};

export default MainContainer;
