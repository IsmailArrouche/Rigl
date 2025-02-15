import React, { useState, useEffect, useRef } from 'react';
import { FiMic, FiSend } from 'react-icons/fi';

const ChatBox = () => {
  // Possible random answers for the bot
  const randomAnswers = [
    'Great to hear that! Let’s discuss more.',
    'Interesting! Tell me more about it.',
    'That’s awesome! How can I help you?',
    'I love this idea — keep going!',
    'Sure thing, let’s plan this out together.',
  ];

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

  // References for auto-scrolling and input focusing
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Sends the user's message + triggers the bot's response every time
  const handleSend = () => {
    if (inputValue.trim()) {
      // 1. Add the user’s message
      const newMessage = {
        sender: 'You',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        text: inputValue,
        senderType: 'self',
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputValue('');

      // Re-focus the input field for convenience
      if (inputRef.current) {
        inputRef.current.focus();
      }

      // 2. Show "typing" indicator for 3 seconds, then respond
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);

        // Pick a random reply from our array
        const botReply = {
          sender: 'Byrom Guittet',
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          text: randomAnswers[Math.floor(Math.random() * randomAnswers.length)],
          senderType: 'other',
        };

        setMessages((prevMsgs) => [...prevMsgs, botReply]);
      }, 3000);
    }
  };

  // Press Enter to send
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Always scroll down when messages or typing state change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full w-full bg-gray-50 dark:bg-[#1E2738] px-4 py-2">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.senderType === 'self' ? 'justify-end' : 'items-start'}`}
          >
            {/* Avatar for 'other' messages */}
            {message.senderType === 'other' && (
              <img
                src={
                  message.image
                    ? message.image
                    : `https://randomuser.me/api/portraits/${
                        message.sender === 'Another User' ? 'women/44' : 'men/45'
                      }.jpg`
                }
                alt={message.sender}
                className="w-10 h-10 rounded-full mr-4"
              />
            )}

            <div className="flex flex-col">
              <div
                className={`font-bold ${
                  message.senderType === 'self'
                    ? 'text-right text-black dark:text-white'
                    : 'text-black dark:text-white'
                }`}
              >
                {message.sender}
              </div>
              <div
                className={`text-sm ${
                  message.senderType === 'self'
                    ? 'text-right text-gray-600 dark:text-gray-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {message.time}
              </div>
              <div
                className={`p-4 rounded-lg max-w-3xl mt-2 ${
                  message.senderType === 'self'
                    ? 'bg-[#0088a9] text-white'
                    : 'bg-[#62b6cb] text-black'
                }`}
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

          {/* "Is Typing" indicator */}
          {isTyping && (
            <div className="flex items-start">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Byrom Guittet"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <div className="text-black dark:text-white font-bold">Byrom Guittet</div>
                <div className="bg-[#62b6cb] text-black dark:bg-[#62b6cb] dark:text-white p-2 rounded-lg max-w-3xl mt-2 animate-pulse">
                  <span className="flex space-x-1">
                    <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Dummy element to always scroll into view */}
          <div ref={chatEndRef} />
        </div>

      {/* Input Box */}
      <div className="flex items-center bg-gray-200 dark:bg-[#18293c] p-4 rounded-full mt-4">
        <button className="text-gray-600 dark:text-gray-400 hover:text-white p-3 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
          <FiMic size={20} />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Start typing..."
          className="flex-1 bg-gray-200 text-black dark:bg-gray-700 dark:text-white p-3 rounded-full mx-4"
        />
        <button
          onClick={handleSend}
          className="bg-[#0088a9] text-white p-3 rounded-full flex items-center justify-center hover:bg-[#005f73]"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
