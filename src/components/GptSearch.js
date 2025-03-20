import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  //GptSearchBar
  //GptMovieSuggetions
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggetions></GptMovieSuggetions>
    </div>
  );
};

export default GptSearch;
