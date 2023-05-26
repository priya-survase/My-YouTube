import React from "react";
import ChatIcon from "./ChatIcon";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="w-full flex items-center py-1 px-2">
      <ChatIcon name={name[0]} />
      <div className="flex">
        <p className="font-bold px-1 py-2">{name}</p>
        <p className="px-2 py-2">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
