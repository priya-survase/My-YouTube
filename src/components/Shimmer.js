import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-1 gap-5">
      {Array(20)
        .fill("")
        .map(() => (
          <div className="w-80 h-80 mx-2 my-3 bg-slate-300 gap-1 "></div>
        ))}
    </div>
  );
};

export default Shimmer;
