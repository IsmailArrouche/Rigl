import React from 'react';
import { FiMic, FiSend } from 'react-icons/fi';

const ChatBox = () => {
  return (
    <div className="flex flex-col h-[95vh] w-[95%] bg-gray-900 p-6 max-w-6xl mx-auto">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pr-4">
        {/* Message from another user */}
        <div className="flex items-start">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Byrom Guittet"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <div className="text-white font-bold">Byrom Guittet</div>
            <div className="text-gray-400 text-sm">01:35 PM</div>
            <div className="bg-gray-800 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>I'm fine, how are you?</p>
            </div>
          </div>
        </div>

        {/* Message from current user */}
        <div className="flex justify-end">
          <div className="flex flex-col items-end">
            <div className="text-white font-bold text-right">You</div>
            <div className="text-gray-400 text-sm text-right">01:36 PM</div>
            <div className="bg-blue-600 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>Hey mate! How are things going?</p>
            </div>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Current User"
            className="w-10 h-10 rounded-full ml-4"
          />
        </div>

        {/* Another message from another user */}
        <div className="flex items-start">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Another User"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <div className="text-white font-bold">Another User</div>
            <div className="text-gray-400 text-sm">01:37 PM</div>
            <div className="bg-gray-800 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>I've found some cool photos for our travel app.</p>
            </div>
          </div>
        </div>

        {/* A new message sent */}
        <div className="flex justify-end">
          <div className="flex flex-col items-end">
            <div className="text-white font-bold text-right">You</div>
            <div className="text-gray-400 text-sm text-right">01:38 PM</div>
            <div className="bg-blue-600 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>That's awesome! Share them when you can.</p>
            </div>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Current User"
            className="w-10 h-10 rounded-full ml-4"
          />
        </div>

        {/* Another message with an actual image */}
        <div className="flex items-start">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Another User"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <div className="text-white font-bold">Another User</div>
            <div className="text-gray-400 text-sm">01:40 PM</div>
            <div className="bg-gray-800 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>Here’s one of them:</p>
              <img
                src="https://picsum.photos/300"
                alt="Travel App Photo"
                className="rounded-lg mt-2"
              />
            </div>
          </div>
        </div>

        {/* Continuation of the conversation */}
        <div className="flex justify-end">
          <div className="flex flex-col items-end">
            <div className="text-white font-bold text-right">You</div>
            <div className="text-gray-400 text-sm text-right">01:42 PM</div>
            <div className="bg-blue-600 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>Wow, that looks amazing! Can't wait to see the rest.</p>
            </div>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Current User"
            className="w-10 h-10 rounded-full ml-4"
          />
        </div>

        {/* Another response */}
        <div className="flex items-start">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Another User"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <div className="text-white font-bold">Another User</div>
            <div className="text-gray-400 text-sm">01:43 PM</div>
            <div className="bg-gray-800 text-white p-4 rounded-lg max-w-3xl mt-2 text-justify">
              <p>Thank you! I’ll upload them to our shared folder soon.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="flex items-center bg-gray-800 p-4 rounded-full mt-4">
        <button className="text-gray-400 hover:text-white p-3 rounded-full bg-gray-700 flex items-center justify-center">
          <FiMic size={20} />
        </button>
        <input
          type="text"
          placeholder="Start typing..."
          className="flex-1 bg-gray-700 text-white p-3 rounded-full mx-4"
        />
        <button className="text-white p-3 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600">
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
