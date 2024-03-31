import React from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
const Chatcontainer = ({ currentChat, currentUser }) => {
  const [messages, setMessages] = React.useState([]);

  useEffect(() => {
    handlegetMessage();
  }, [currentChat]);

  console.log(messages);
  const handlegetMessage = async () => {
    try {
      const response = await axios.post("/message/get-message", {
        from: currentUser?._id,
        to: currentChat?._id,
      });

      setMessages(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMsg = async (msg) => {
    try {
      await axios.post("/message/add-message", {
        from: currentUser?._id,
        to: currentChat?._id,
        message: msg,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="w-full   flex mb-4 bg-[#fcf7f733]  rounded-sm p-3 items-center justify-start gap-10 px-5">
        <div
          className="w-8 h-8 "
          dangerouslySetInnerHTML={{ __html: currentChat?.avatarImage }}
        ></div>
        <h1 className="font-semibold text-md capitalize">
          {currentChat.username}
        </h1>
      </div>
      {/* <Message /> */}
      <div className="w-full max-h-[70vh] overflow-auto p-5 ">
        {messages &&
          messages.map((message, index) => (
            <>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
               <div className="content">
               <p className="text-xl bg-zinc-300 rounded-lg  inline-block px-5  py-2 font-semibold my-3">{message.message}</p>
               </div>
              </div>
            </>
          ))}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default Chatcontainer;
