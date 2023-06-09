import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";
import VideoTile from "./VideoTile";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(videos);
  };

  return videos.length ? (
    <div className="flex flex-wrap p-1 gap-5 ml-8">
      {videos.map((item) => {
        //console.log(item.id);
        return (
          <Link to={"/watch?v=" + item.id}>
            <VideoTile key={item.id} video={item} />
          </Link>
        );
      })}
    </div>
  ) : (
    <Shimmer />
  );
};

export default VideoContainer;
