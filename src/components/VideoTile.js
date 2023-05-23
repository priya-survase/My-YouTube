import React from "react";

const VideoTile = ({ video }) => {
  console.log(video);
  return (
    <div className="flex shadow-lg flex-wrap flex-col w-96 ">
      <img
        alt="thumbnail"
        className="border rounded-lg w-96 h-44"
        src={video.snippet.thumbnails.medium.url}
      />
      <h2 className="font-bold">{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <h3>{video.statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoTile;
