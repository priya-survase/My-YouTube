import React, { useEffect, useState } from "react";
import { GET_VIDEO_API, GET_CHANNEL, DUMMY } from "../utils/config";
import { BiLike, BiDislike, BiShare } from "react-icons/bi";
import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(DUMMY.items[0]);
  const [channelDetails, setChannelDetails] = useState();
  const [subscribeToggle, setSubscribeToggle] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const style = { fontSize: "1.5em" };

  useEffect(() => {
    getVideoDetails();
  }, []);

  useEffect(() => {
    getChannelDetails(videoDetails?.snippet.channelId);
  }, [videoDetails]);

  async function getVideoDetails() {
    const data = await fetch(GET_VIDEO_API + videoId);
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    //console.log(channelDetails);
  }

  async function getChannelDetails(channelId) {
    console.log(channelId);
    const data = await fetch(GET_CHANNEL + channelId);
    const json = await data.json();
    setChannelDetails(json?.items[0]);
    // console.log(json);
  }

  return (
    <div className={" border shadow-lg" + (isMenuOpen && "w-[150px]")}>
      <div className="text-lg font-bold">{videoDetails?.snippet?.title}</div>
      <div className="flex justify-between">
        <div className="flex justify-between w-auto gap-4 items-center">
          <img
            src={channelDetails?.snippet?.thumbnails?.medium.url}
            className="w-12 h-12 border rounded-full mx-1 my-2"
          />
          <div className="mx-1 my-2">
            <p className="font-semibold">
              {videoDetails?.snippet?.channelTitle}
            </p>
            <p className="font-semibold text-sm">
              {channelDetails?.statistics?.subscriberCount} Subscribers
            </p>
          </div>

          <button
            onClick={() => {
              setSubscribeToggle(!subscribeToggle);
            }}
            className={
              !subscribeToggle
                ? "text-sm font-semibold mx-1 w-24 h-8 px-2 rounded-full bg-slate-300"
                : "text-sm font-semibold mx-1 w-24 h-8 px-2 rounded-full bg-gray-900 text-white"
            }
          >
            <p>{!subscribeToggle ? "Subscribe" : "Subscribed"}</p>
          </button>
        </div>
        <div className="flex items-center w-[30%] justify-between">
          <button
            onClick={() => {
              setLike(!like);
              if (dislike) setDislike(!dislike);
            }}
            className="w-22 h-9 px-3 py-1 font-semibold text-sm bg-slate-300 flex rounded-full items-center"
          >
            {!like ? <BiLike style={style} /> : <AiFillLike style={style} />}{" "}
            {videoDetails?.statistics?.likeCount}
          </button>
          <button
            onClick={() => {
              setDislike(!dislike);
              if (like) setLike(!like);
            }}
            className="w-10 h-8 px-2 py-1 bg-slate-300 rounded-full items-center"
          >
            {!dislike ? (
              <BiDislike style={style} />
            ) : (
              <AiTwotoneDislike style={style} />
            )}
          </button>
          <button className="w-22 h-8 px-3 py-1 font-semibold text-sm bg-slate-300 flex rounded-full items-center">
            {<BiShare style={style} />} Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
