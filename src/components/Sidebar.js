import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 shadow-lg border text-sm p-3 border-indigo-500 align-items-center">
      <ul>
        <li className="my-2">Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
