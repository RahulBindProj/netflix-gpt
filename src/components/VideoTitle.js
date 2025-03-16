import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-8 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="w-1/2 pt-[30px] text-gray-300">{overview}</p>
      <div className="mt-6 space-x-4 flex">
        <button class="bg-white text-black px-8 py-2 rounded hover:bg-gray-200 flex items-center">
          <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3v14l11-7L10 3z" />
          </svg>
          Play
        </button>
        <button class="flex items-center bg-gray-800 text-white rounded-lg px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-4m0-4v.01"
            />
          </svg>
          More Info
        </button>
        {/* <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
          Play
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
          More Info
        </button> */}
      </div>
    </div>
  );
};

export default VideoTitle;
