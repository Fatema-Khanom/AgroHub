




import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaPaperPlane, FaSync } from "react-icons/fa"; // Importing refresh icon

const apiKey = "AIzaSyD4MI1Cp0of5yRy-_vreE91SXLpT5QXrHc"; // Using the environment variable
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const AgriChat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput) return;

    setLoading(true);
    
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory, // Use previous chat history
    });

    const result = await chatSession.sendMessage(userInput);
    
    // Update chat history with user input and AI response
    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: userInput },
      { role: "bot", content: result.response.text() },
    ]);
    
    setUserInput(""); // Clear input
    setLoading(false); // Set loading to false after response
  };

  const handleRefresh = () => {
    setChatHistory([]); // Clear chat history
    setUserInput(""); // Clear input field
  };

  return (
      <div className=" px-10 lg:px-24 lg:py-20 py-10  ">
          <h1 className="text-2xl font-semibold text-cente text-green-700 mb-6">Agriculture Chatbot</h1>
      <div className="flex flex-col items-center w-full mx-auto p-5  shadow-green-700 bg-gray- rounded-lg shadow-lg">
        
        <div className="w-full h-96 overflow-y-auto p-3 bg-green- border border-gray-300 rounded-lg">
          {chatHistory.length === 0 ? (
            // Render the image and text if chat history is empty
            <div className="text-center bg-green">
              <img
                src="https://i.ibb.co.com/R2r65jS/Chat-Bot-Avatar-bg-less.png"
                alt="No messages"
                className="mx-auto mt-5 h-36" // Center the image and add margin
                          />
                          <h2 className="text-2xl font-bold">Hello! I'm AgroBot</h2>
              <p className="mt-3 text-gray font-seibold text-green-600 px-4  lg:px-20">
                AgroBot is designed to assist farmers with valuable information and insights to enhance their farming practices.
                Feel free to ask questions related to agriculture!
              </p>
            </div>
          ) : (
           chatHistory.map((msg, index) => (
  <div
    key={index}
    className={`mb-2 p-2 rounded-lg max-w-xs ${msg.role === "user" ? "text-left text-white bg-blue-800 self-end ml-auto" : "text-left bg-green-800 text-white self-start mr-auto"}`}
  >
    <span className={`font-bold ${msg.role === "user" ? "text-white" : "text-white"}`}>
      {msg.role === "user" ? "You" : "AgroBot"}:
    </span>
    <span className="ml-2">{msg.content}</span>
  </div>
))
            

                          
          )}
                  {/* {loading && <div className="text-center text-green-600 ">Loading...</div>} */}
                   {loading && (
            <div className="text-center text-blue-500 mt-4 flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-2">Loading...</span>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex  text-center md:w-full mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about agriculture..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button type="submit" className="px-4 bg-green-600 text-white flex justify-center items-center rounded-r-lg hover:bg-green-700 transition">
            <FaPaperPlane className="mr-2" /> Send
          </button>
        </form>
        <button
          onClick={handleRefresh}
          className="mt-4 flex items-center px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
        >
          <FaSync className="mr-2" /> Refresh
        </button>
      </div>
    </div>
  );
};

export default AgriChat;
