import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-12 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-5xl font-bold w-1/3">{title}</h1>
      <p className="py-6 text-sm w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-8 p-2 mr-2 text-lg rounded-lg hover:bg-opacity-80">
          ⏯️ Play
        </button>
        <button className="bg-gray-500 px-8 p-2 text-lg bg-opacity-50 rounded-lg text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
