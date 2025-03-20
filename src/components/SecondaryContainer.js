import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // console.log(movies);

  return (
    <>
      <div className="bg-black min-h-screen p-4 pb-[100px]">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        ></MovieList>
        <MovieList
          title={"Up Coming"}
          movies={movies.upComingMovies}
        ></MovieList>
      </div>
    </>
  );
};

export default SecondaryContainer;
