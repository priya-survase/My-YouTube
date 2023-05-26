import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className={"shadow-lg border text-sm p-3 align-items-center "}>
      <ul>
        <li className="my-4 font-semibold">Home</li>
        <li className="my-4 font-semibold">Shorts</li>
        <li className="my-4 font-semibold">Subscriptions</li>
        <li className="my-4 font-semibold">Library</li>
        <li className="my-4 font-semibold">History</li>
        <li className="my-4 font-semibold">Your Videos</li>
        <li className="my-4 font-semibold">Watch Later</li>
        <li className="my-4 font-semibold">Liked Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
