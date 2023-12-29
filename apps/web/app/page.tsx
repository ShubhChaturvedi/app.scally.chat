"use client";
// prepare page of a Next.js chat component app

import React from "react";
import Message from "../components/Message";

export default function Page() {
  return (
    // Chat component
    <div className="w-full h-full flex text-center flex-col rounded-lg">
      <h2 className="m-5 text-2xl font-bold text-gray-800 text-white"> Scally Chat</h2>
      {/* chat area */}
      <div className="flex">
        {/* customer one chat box */}
        <div className="chat flex flex-col w-1/2 border border-bottom-gray-20 m-5">
              {/* customer name and profile heading */}
              <div className="flex flex-row w-full">
                {/* profile pic */}
                <div className="rounded-l-lg p-2">
                  <img src="https://avatars.githubusercontent.com/u/25126281?v=4" className="rounded-full w-10 h-10" />
                </div>
                <div className=" rounded-l-lg py-3 px-4">
                  <h2 className="text-xl font-bold text-gray-800 text-white">Tashu Chaturvedi</h2>
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
            <input
            style={{ outline: "none" ,
            border: "none"
          }}
            className="flex-grow rounded-l-lg p-2" placeholder="Type your message here..." />
            <button className="border border-gray-20 rounded-r-lg py-2 px-5">Send</button>
            </div>

            </div>
            <div className="chat flex flex-col w-1/2 border border-bottom-gray-20 m-5">
              {/* customer name and profile heading */}
              <div className="flex flex-row w-full">
                {/* profile pic */}
                <div className="rounded-l-lg p-2">
                  <img src="https://avatars.githubusercontent.com/u/25126281?v=4" className="rounded-full w-10 h-10" />
                </div>
                <div className=" rounded-l-lg py-3 px-4">
                  <h2 className="text-xl font-bold text-gray-800 text-white">Shubh Chaturvedi</h2>
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
            <input className="flex-grow border border-gray-20 rounded-l-lg p-2" placeholder="Type your message here..." />
            <button className="border border-gray-20 rounded-r-lg py-2 px-5">Send</button>
            </div>

            </div>



      </div>
    </div>
      
    
  );
}