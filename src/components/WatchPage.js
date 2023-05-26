import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  let videoId = searchParams.get("v");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full flex mx-5">
      <div className="">
        {(
          <iframe
            width="850"
            height="450"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className={"m-1 " + (isMenuOpen && "w-[750px]")}
          ></iframe>
        ) || (
          <div
            className={
              "w-[850px] h-[450px] bg-slate-600" + (isMenuOpen && "w-[750px]")
            }
          ></div>
        )}
        <VideoDetails videoId={videoId} />
        <CommentsContainer />
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
