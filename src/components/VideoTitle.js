import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 px-8 pt-[15%] bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="w-1/2 pt-6 text-gray-300 text-lg leading-relaxed">
        {overview}
      </p>
      <div className="mt-6 flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 flex items-center font-semibold transition duration-300">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3v14l11-7L10 3z" />
          </svg>
          Play
        </button>
        <button className="flex items-center bg-gray-800 text-white rounded-lg px-6 py-2 hover:bg-gray-700 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
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
      </div>
    </div>
  );
};

export default VideoTitle;
