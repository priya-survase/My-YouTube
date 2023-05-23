import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggstions] = useState(false);
  const cache = useSelector((store) => store.searchSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(searchQuery);
    //Make an API call on every searchQuery
    //Decline the API call if the difference two keystrokes is less than 200ms

    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else getSearchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API  -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    // console.log(json[1]);
  };

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
        <div>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggstions(true)}
            onBlur={() => setShowSuggstions(false)}
            type="text"
            className="border border-slate-300 rounded-l-full w-96 h-10 p-3"
          />
          <button className="border border-slate-300 rounded-r-full h-10 px-4">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white p-1 w-96 shadow-sm rounded-sm">
            <ul>
              {suggestions.map((item, index) => (
                <li key={item} className="py-2 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
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
