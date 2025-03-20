import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <p>Loading movies...</p>;
  }

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h1>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
