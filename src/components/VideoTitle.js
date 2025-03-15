import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[100px] px-8">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="w-1/2 pt-[30px] text-gray-300">{overview}</p>
      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
          Play
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
