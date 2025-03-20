import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  //   console.log(language);

  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        action=""
        className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-lg max-w-md w-full"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder={lang[langKey].getSearchPlaceholder}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
