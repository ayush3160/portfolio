import { useState } from "react";
import { CiChat2 } from "react-icons/ci";
import { FaX } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div>
      {chatOpen && (
        <div className="fixed bottom-20 right-5 z-50 rounded-lg">
          <div
            id="chat-screen"
            className="mt-3 w-80 bg-white rounded-lg shadow-lg"
            style={{ height: "30rem" }}
          >
            <div
              className="w-100 p-3 flex"
              style={{
                background:
                  "linear-gradient(90deg, #FF00D6 0%, #EB00FF 17.78%, #AD00FF 39.41%, #7F00FF 60.36%, #5201FF 80.34%, #0047FF 100%)",
              }}
            >
              <FaRobot size={25} color="white" />
              <span className="text-white font-bold ml-2 mt-0.5">AyushBot</span>
            </div>
            <div className="p-2" style={{ height: "80%" }}>
              <div className="mt-1 message my-message float-left">
                <p>
                  Hi there! 😊 I'm Ayushi, Ayush's best friend. Feel free to ask
                  me anything about him! 🗣️
                </p>
              </div>
              <div className="mt-1 message other-message float-right">
                <p>
                  Hi there! 😊 I'm Ayushi, Ayush's best friend. Feel free to ask
                  me anything about him! 🗣️
                </p>
              </div>
            </div>
            <div className="px-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border rounded-lg focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
      <div id="chat-container" className="fixed bottom-5 right-5 z-50">
        <div
          id="chat-icon"
          className={`bg-black rounded-full p-3 cursor-pointer transform transition-transform duration-500 ease-in-out ${
            chatOpen ? "rotate-180" : "rotate-0"
          }`}
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
    </div>
  );
};

export default ChatBot;
