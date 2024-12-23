import { useState, useEffect, useRef } from "react";
import ChatWindow from "./component/ChatWindow";
import MessageInput from "./component/MessageInput";

function App() {
  const [messages, setMessages] = useState([]); //used to store and manage the list of message then pass it as a props to component need it ,for this reason i but this state in the root(app) to pass the data as props to the componant it need
  const [waitingForResponse, setWaitingForResponse] = useState(false); // Controls whether we're waiting for the user's response
  const messageCounter = useRef(1); // A counter to keep track of simulated messages
  const simulatedMessages = [
    "Hello there!",
    "How's it going?",
    "What are you up to?",
    "Good morning!",
    "Have a great day!",
    "Let's chat soon!",
    "Nice to meet you!",
    "What's the plan for today?",
  ]; // Array of predefined simulated messages

  const sendMessage = (newMessage) => {
    const message = {
      id: Date.now(), //returns the current timestamp in milliseconds
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(), //converts the current time to a string based on the local time zone and displays it in a human-readable format (e.g., "2:15:30 PM").
      author: "Abdalla",
    };
    setMessages((prevMessages) => [...prevMessages, message]);
    setWaitingForResponse(true); // After sending a message, we wait for a response
  };

  // Simulate a response from another user (simulated messages)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (messages.length > 0 && waitingForResponse) {
        const randomMessage =
          simulatedMessages[
            Math.floor(Math.random() * simulatedMessages.length)
          ]; // Math.random() generates a random number, and Math.floor() ensures it is an integer within the array's index range.
        const simulatedMessage = {
          id: Date.now() + messageCounter.current,
          text: randomMessage, // Use the random message
          timestamp: new Date().toLocaleTimeString(),
          author: "Moath",
        };
        setMessages((prevMessages) => [...prevMessages, simulatedMessage]);
        messageCounter.current += 1; // Increment the counter for the next simulated message (useRef)
        setWaitingForResponse(false); // After the simulated response, we're no longer waiting for a response
      }
    }, 1000); // Send a simulated message every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, [messages, waitingForResponse]); // Dependency on messages and waitingForResponse to trigger when new messages are added

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
