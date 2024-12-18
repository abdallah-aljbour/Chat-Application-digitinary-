import { useState } from "react";
import ChatWindow from "./component/ChatWindow";
import MessageInput from "./component/MessageInput";

function App() {
  const [messages, setMessages] = useState([]); //used to store and manage the list of message then pass it as a props to component need it ,for this reason i but this state in the root(app) to pass the data as props to the componant it need
  const sendMessage = (newMessage) => {
    const message = {
      id: Date.now(), //returns the current timestamp in milliseconds
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(), //converts the current time to a string based on the local time zone and displays it in a human-readable format (e.g., "2:15:30 PM").
      author: "Abdalla",
    };
    console.log("New message: ", message);
    setMessages([...messages, message]); // Add new message to the list
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
