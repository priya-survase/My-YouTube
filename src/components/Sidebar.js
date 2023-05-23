import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg border text-sm w-auto p-3 align-items-center">
      <ul>
        <li className="my-2 font-bold">Home</li>
        <li className="my-2 font-bold">Shorts</li>
        <li className="my-2 font-bold">Subscriptions</li>
        <li className="my-2 font-bold">Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
