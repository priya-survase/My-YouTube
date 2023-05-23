import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const categories = [
    "All",
    "Music",
    "Ted",
    "Live",
    "Thrillers",
    "T-Series",
    "Mixes",
    "Comedy",
    "News",
    "Cricket",
    "Soccer",
    "Cooking",
  ];
  return (
    <div className="flex">
      {categories.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonsList;
