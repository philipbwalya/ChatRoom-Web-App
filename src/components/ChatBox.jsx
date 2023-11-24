import {
  collection,
  query,
  onSnapshot,
  orderBy,
  // limit,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt")
      // if you need a number of limited messages just call the limit function witch is commented below
      // limit(200)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className="pt-20 pb-20 px-5">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
