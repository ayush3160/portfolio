import { useState } from "react";
import { CiChat2 } from "react-icons/ci";
import { FaX } from "react-icons/fa6";

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {chatOpen && (
        <div className="fixed bottom-20 right-5 z-50">
          <div
            id="chat-screen"
            className="mt-3 w-80 h-96 bg-white rounded-lg shadow-lg"
          >
            <div className="p-4">Chat content here...</div>
          </div>
        </div>
      )}
      <div id="chat-container" className="fixed bottom-5 right-5 z-50">
        <div
          id="chat-icon"
          className="cursor-pointer bg-black rounded-full p-3"
          onClick={() => {
            setChatOpen(!chatOpen);
          }}
        >
          {chatOpen ? (
            <FaX size={25} color="white" />
          ) : (
            <CiChat2 size={25} color="white" />
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
