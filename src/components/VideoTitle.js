import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[100px] px-8">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/2 pt-[30px]">{overview}</p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
