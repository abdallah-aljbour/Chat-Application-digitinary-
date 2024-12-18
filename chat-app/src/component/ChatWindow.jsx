import React from "react";
import Message from "./Message";

const ChatWindow = ({ messages }) => {
  return (
    <div className="p-4 bg-gray-200 h-96 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};
export default ChatWindow;
