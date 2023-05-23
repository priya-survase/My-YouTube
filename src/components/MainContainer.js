import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <>
      <div className="col-span-11 border border-indigo-500 p-3">
        <ButtonsList />
        <VideoContainer />
      </div>
    </>
  );
};

export default MainContainer;
