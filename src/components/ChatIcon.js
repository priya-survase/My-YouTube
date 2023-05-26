import React from "react";

const ChatIcon = ({ name }) => {
  const colors = ["#ff3333", "#009900", "#4da6ff", "#c266ff", "#ff80bf"];
  const random = Math.floor(Math.random() * colors.length);
  return (
    <div
      className="h-8 w-8 rounded-full font-semibold flex justify-center bg-red items-center"
      style={{ backgroundColor: colors[random] }}
    >
      {name[0]}
    </div>
  );
};

export default ChatIcon;
