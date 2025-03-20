import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-none w-48 md:w-56 lg:w-64 p-2">
      <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
