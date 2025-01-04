import React, { useState, useEffect, useRef } from 'react';
import { FiMic, FiSend } from 'react-icons/fi';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'Byrom Guittet',
      time: '01:35 PM',
      text: "I'm fine, how are you?",
      senderType: 'other',
    },
    {
      sender: 'You',
      time: '01:36 PM',
      text: 'Hey mate! How are things going?',
      senderType: 'self',
    },
    {
      sender: 'Another User',
      time: '01:37 PM',
      text: "I've found some cool photos for our travel app.",
      senderType: 'other',
    },
    {
      sender: 'You',
      time: '01:38 PM',
      text: "That's awesome! Share them when you can.",
      senderType: 'self',
    },
    {
      sender: 'Another User',
      time: '01:40 PM',
      text: "Here’s one of them:",
      senderType: 'other',
      image: 'https://picsum.photos/300',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: inputValue,
        senderType: 'self',
      };
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const responseMessage = {
            sender: 'Byrom Guittet',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: 'Great to hear that! Let’s discuss more.',
            senderType: 'other',
          };
          setMessages((prevMessages) => [...prevMessages, responseMessage]);
        }, 3000); // 3-second delay for response
        return updatedMessages;
      });
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-[91vh] w-[95%] dark:bg-gray-900 bg-white p-6 max-w-6xl mx-auto">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-700 dark:scrollbar-thumb-gray-700 scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.senderType === 'self' ? 'justify-end' : 'items-start'}`}
          >
            {message.senderType === 'other' && (
              <img
                src={message.image || `https://randomuser.me/api/portraits/${message.sender === 'Another User' ? 'women/44' : 'men/45'}.jpg`}
                alt={message.sender}
                className="w-10 h-10 rounded-full mr-4"
              />
            )}
            <div className="flex flex-col">
              <div
                className={`${
                  message.senderType === 'self' ? 'dark:text-white text-black text-right' : 'dark:text-white text-black'
                } font-bold`}
              >
                {message.sender}
              </div>
              <div
                className={`${
                  message.senderType === 'self' ? 'dark:text-gray-400 text-gray-600 text-right' : 'dark:text-gray-400 text-gray-600'
                } text-sm`}
              >
                {message.time}
              </div>
              <div
                className={`${
                  message.senderType === 'self' ? 'dark:bg-blue-600 bg-blue-500 text-white' : 'dark:bg-gray-800 bg-gray-200 dark:text-white text-black'
                } p-4 rounded-lg max-w-3xl mt-2 text-justify`}
              >
                <p>{message.text}</p>
                {message.image && (
                  <img
                    src={message.image}
                    alt="Shared content"
                    className="rounded-lg mt-2"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Byrom Guittet"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <div className="dark:text-white text-black font-bold">Byrom Guittet</div>
              <div className="dark:bg-gray-800 bg-gray-200 dark:text-white text-black p-2 rounded-lg max-w-3xl mt-2 animate-pulse">
                <span className="flex space-x-1">
                  <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
                  <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
                  <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex items-center dark:bg-gray-800 bg-gray-100 p-4 rounded-full mt-4">
        <button className="dark:text-gray-400 text-gray-600 hover:text-white p-3 rounded-full dark:bg-gray-700 bg-gray-300 flex items-center justify-center">
          <FiMic size={20} />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Start typing..."
          className="flex-1 dark:bg-gray-700 bg-gray-200 dark:text-white text-black p-3 rounded-full mx-4"
        />
        <button
          onClick={handleSend}
          className="text-white p-3 rounded-full dark:bg-blue-500 bg-blue-400 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
