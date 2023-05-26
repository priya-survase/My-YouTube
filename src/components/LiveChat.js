import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { randomMsgGenerator, randomNameGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chatSlice.messages);
  const [liveMessage, setLiveMessage] = useState("");

  //console.log(chatMessages);
  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API Polling");
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomMsgGenerator(20) + "✌",
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  const sendMsgHandler = () => {
    dispatch(
      addMessage({
        name: "Priya Survase",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div>
      <div className="mx-2 font-bold bg-slate-100">Live Chat</div>
      <div className="mx-2 my-1 border w-[400px] h-[440px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <div className="mx-2 flex">
        <input
          type="text"
          value={liveMessage}
          className="w-[350px] p-1 border border-slate-500 rounded-full"
          placeholder="say something..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          onClick={() => sendMsgHandler()}
          className=" mx-1 p-1 bg-blue-200 font-semibold rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
