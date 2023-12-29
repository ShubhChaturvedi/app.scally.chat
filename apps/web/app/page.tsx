"use client";
// prepare page of a Next.js chat component app

import React from "react";
import Message from "../components/Message";
import InputEmoji from "react-input-emoji";
import AudioMessage from "../components/AudioMessage";
import CompressedMedia from "../components/CompressedMedia";
import FileAttachment from "../components/FileAttachment";

export default function Page() {
  const [text, setText] = React.useState("");
  return (
    // Chat component
    <div className="w-full h-full flex text-center flex-col rounded-lg">
      <h2 className="m-5 text-2xl font-bold text-gray-800 text-white"> Scally Chat</h2>
      {/* chat area */}
      <div className="flex flex-col md:flex-row">
        {/* customer one chat box */}
        <div className="chat flex flex-col w-1/2 border border-bottom-gray-20 m-5">
              {/* customer name and profile heading */}
              <div className="flex flex-row w-full rounded-lg bg-gray-800">
                {/* profile pic */}
                <div className="
                rounded-l-lg p-2
                ">
                <img width="32" height="32" src="https://img.icons8.com/windows/32/ffffff/left.png" alt="left"/>
                </div>
                <div className="rounded-l-lg p-2">
                  <img src="https://avatars.githubusercontent.com/u/25126281?v=4" className="rounded-full w-10 h-10" />
                </div>
                <div className=" rounded-l-lg py-3 px-4">
                  <h2 className="text-xl font-bold text-gray-800 text-white">Shubh Chaturvedi</h2>
                </div>
                
              </div>
          <div className="flex flex-col w-full h-full">
            {/* chat box */}
            <div style={{
              height: "500px"
            }} className="flex flex-col w-full overflow-y-scroll">
              <Message />
              <FileAttachment />
              <CompressedMedia />
              <AudioMessage />
              </div>
            </div>
          {/* chat input */}
          <div className="flex flex-row w-full">
            <button className="rounded-r-lg py-2 px-2"><img width="26" height="26" src="https://img.icons8.com/metro/30/ffffff/attach.png" alt="attach"/></button>

            <InputEmoji
      value={text} 
      onChange={setText} 
      cleanOnEnter 
      placeholder="Type a message"
    /> 
            <button className="rounded-r-lg py-2 px-2">
            <img width="30" height="30" src="https://img.icons8.com/dotty/80/ffffff/paper-plane.png" alt="paper-plane"/></button>
            </div>

            </div>
            <div className="chat flex flex-col w-1/2 border border-bottom-gray-20 m-5">
              {/* customer name and profile heading */}
              <div className="flex flex-row w-full rounded-lg bg-gray-800">
                {/* profile pic */}
                <div className="
                rounded-l-lg p-2
                ">
                <img width="32" height="32" src="https://img.icons8.com/windows/32/ffffff/left.png" alt="left"/>
                </div>
                <div className="rounded-l-lg p-2">
                  <img src="https://avatars.githubusercontent.com/u/25126281?v=4" className="rounded-full w-10 h-10" />
                </div>
                <div className=" rounded-l-lg py-3 px-4">
                  <h2 className="text-xl font-bold text-gray-800 text-white">Tanishq Soni</h2>
                </div>
                
              </div>
          <div className="flex flex-col w-full h-full">
            {/* chat box */}
            <div className="flex flex-col w-full h-full overflow-y-scroll">
              <Message />
              <Message />
              <Message />
              </div>
            </div>
          {/* chat input */}
          <div className="flex flex-row w-full">
            <button className="rounded-r-lg py-2 px-2"><img width="26" height="26" src="https://img.icons8.com/metro/30/ffffff/attach.png" alt="attach"/></button>

            <InputEmoji
      value={text} 
      onChange={setText} 
      cleanOnEnter 
      placeholder="Type a message"
    /> 
            <button className="rounded-r-lg py-2 px-2">
            <img width="30" height="30" src="https://img.icons8.com/dotty/80/ffffff/paper-plane.png" alt="paper-plane"/></button>
            </div>

            </div>



      </div>
    </div>
      
    
  );
}