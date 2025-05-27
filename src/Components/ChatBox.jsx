import React, { useState } from 'react';

function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleWidget}
        className="fixed bottom-5 right-5 bg-blue-500 text-white pl-3 pr-3 pt-2 pb-2 p-3 font-bold rounded-full shadow-lg hover:bg-blue-600 focus:outline-none z-50"
        aria-label="Toggle Chat"
      >
        {isOpen ? 'Close' : 'Chat'}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col z-40">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat With Us</h3>
            <button onClick={toggleWidget} className="text-white font-bold hover:text-gray-200" aria-label="Close Chat">
              &times;
            </button>
          </div>

          {/* Widget Body */}
          <div className="flex-grow p-4 overflow-y-auto">
            <p>Hello! How can I help you today?</p>
            
          </div>

          <div className="p-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingWidget;