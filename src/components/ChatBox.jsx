import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const message = [
    {
      id: 1,
      text: "hey there",
      name: "philip",
    },
    {
      id: 2,
      text: "how are you doing today",
      name: "jonathan",
    },
  ];
  return (
    <div className="pt-20 pb-20 px-5">
      {message.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
