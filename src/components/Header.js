import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg justify-items-center">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="Hamberger menu icon"
          src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
          className="w-9 h-9 cursor-pointer"
        />
        {/* <Link to="/"> */}
        <img
          alt="youtube logo"
          src="https://i.redd.it/q5rvcww0i5jz.jpg"
          className="w-15 h-12 mx-2"
        />
        {/* </Link> */}
      </div>
      <div className="col-span-10 px-10 content-center">
        <input
          type="text"
          className="border border-slate-300 rounded-l-full w-96 h-10"
        />
        <button className="border border-slate-300 rounded-r-full h-10 px-4">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="w-9 h-9"
          alt="user icon"
          src="https://th.bing.com/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        />
      </div>
    </div>
  );
};

export default Header;
