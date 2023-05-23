import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-slate-200  text-sm h-15 p-2 mx-2 my-2 rounded">
      {name}
    </button>
  );
};

export default Button;
