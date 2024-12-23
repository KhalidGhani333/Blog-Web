"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

export default function Comment() {
  const [text, setText] = useState(""); 
  const [displayText, setDisplayText] = useState(""); 

  const handleButtonClick = () => {
    setDisplayText(text);
    setText("");
  };

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="p-6 m-6 w-full sm:w-[450px] bg-gray-200 shadow-lg rounded-lg">
        <div className="flex gap-2 md:gap-5 mb-4 items-center">
          {/* Likes/Dislikes */}
          <div className="flex items-center gap-2 text-xl">
            <BiSolidLike className="text-green-500" /> 211
            <BiSolidDislike className="text-red-500" /> 04
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "/>

          {/* Send Button */}
          <button
            onClick={handleButtonClick}
            className="text-2xl text-blue-500 hover:text-blue-700 transition-all">
            <IoSend />
          </button>
        </div>
        
      </div>

       {/* Display Text */}
      {displayText && (
        <div className="mt-5 p-6 w-full sm:w-[450px]">
          <h1 className="text-2xl font-bold mb-3">Comments:</h1>
          <div className="p-4 border w-full sm:w-[300px] border-blue-200 rounded-lg bg-blue-50">
            <div className="flex gap-2 items-center">
              <div className="w-7 h-7 bg-lime-500 rounded-full"></div>
              <h1 className="text-sm sm:text-base text-gray-700">currentUser@gmail.com</h1>
            </div>
            <div className="pt-3 text-gray-500 break-words">
              {displayText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
