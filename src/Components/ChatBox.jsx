import React, { useState, useEffect, useRef } from 'react';

function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hello! I'm Sanjay's AI assistant. I can tell you about his skills, projects, work experience, and education. What would you like to know?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Clear input field
    setInputMessage('');
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Create context about Sanjay to provide to the AI
      const profileContext = `
        Sanjay Aski is a skilled developer with expertise in:
        - JavaScript, React, Node.js, HTML/CSS
        - Django, Git, Python, MySQL, Java
        - Problem-solving and algorithms
        
        He worked as a Django Developer Intern at V.E.S.I.T from Dec 2024 to Feb 2024
        and is currently working on Cross-Domain Visualization at V.E.S.I.T since May 2025.
        
        His projects include SchoolTrack, Weather App, Tic Tac Toe, and Railway Ticketing Management.
        
        He is pursuing B.Tech in Computer Engineering from Vivekanand Education Society's Institute of Technology, Mumbai (2023-2027).
      `;
      
      // Using Hugging Face's free Inference API
      const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
        body: JSON.stringify({
          inputs: `${profileContext}\n\nUser: ${inputMessage}\nAssistant:`,
        })
      });
      
      if (!response.ok) {
        // Fall back to keyword-based responses if API fails
        const botResponse = generateResponse(inputMessage);
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else {
        const data = await response.json();
        let botResponse = data.generated_text || "I'm sorry, I couldn't process that request.";
        
        // Clean up response if needed
        if (botResponse.includes('Assistant:')) {
          botResponse = botResponse.split('Assistant:')[1].trim();
        }
        
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages(prevMessages => [...prevMessages, { 
        text: "Sorry, I'm having trouble connecting. Please try again later.", 
        sender: 'bot' 
      }]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Fallback response generation based on keywords
  const generateResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    // Project specific responses
    if (lowerMsg.includes('schooltrack') || lowerMsg.includes('school track')) {
      return "SchoolTrack is an educational management system Sanjay developed for R.I. Vidya Mandir school. It facilitates communication between teachers and parents, allowing parents to track their children's progress in real-time.";
    } else if (lowerMsg.includes('weather') || lowerMsg.includes('weather app')) {
      return "Sanjay's Weather App is built with React and Redux, offering real-time weather data through WeatherAPI integration. It includes city search, theme toggling, and shows comprehensive weather metrics.";
    } else if (lowerMsg.includes('tic') || lowerMsg.includes('tac') || lowerMsg.includes('toe')) {
      return "Sanjay built an interactive Tic Tac Toe game featuring both single-player mode with AI using the minimax algorithm and a dual-player mode for playing with friends.";
    } else if (lowerMsg.includes('railway') || lowerMsg.includes('ticketing')) {
      return "The Railway Ticketing Management is a Java-based system that allows users to purchase tickets and monthly/quarterly passes, with features for ticket generation and searching.";
    
    // General responses
    } else if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
      return "Hello there! How can I help you with information about Sanjay's portfolio?";
    } else if (lowerMsg.includes('skill') || lowerMsg.includes('technologies')) {
      return "Sanjay is skilled in JavaScript, React, Node.js, HTML/CSS, Django, Git, Python, MySQL, and Java. He's particularly strong in problem-solving and algorithms.";
    } else if (lowerMsg.includes('project')) {
      return "Sanjay has worked on several projects including SchoolTrack, a Weather App, Tic Tac Toe, and a Railway Ticketing Management system. Would you like to know more about any specific project?";
    } else if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
      return "Sanjay has worked as a Django Developer Intern at V.E.S.I.T from Dec 2024 to Feb 2024, and is currently working on Cross-Domain Visualization at V.E.S.I.T since May 2025.";
    } else if (lowerMsg.includes('education') || lowerMsg.includes('study') || lowerMsg.includes('college')) {
      return "Sanjay is pursuing B.Tech in Computer Engineering from Vivekanand Education Society's Institute of Technology, Mumbai (2023-2027). His CGPA is 9.6.";
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('connect')) {
      return "You can contact Sanjay through the Contact section at the bottom of this portfolio. He's available via email at sanjay.aski@example.com.";
    } else if (lowerMsg.includes('react')) {
      return "Sanjay is proficient in React for building dynamic user interfaces. He uses modern React with hooks, context API, and integrates with backend APIs effectively.";
    } else if (lowerMsg.includes('python') || lowerMsg.includes('django')) {
      return "Sanjay uses Python with the Django framework for web development. He gained experience with Django during his internship at V.E.S.I.T.";
    } else {
      return "Thank you for your message. Is there anything specific you'd like to know about Sanjay's skills, projects, or experience? I'm here to help!";
    }
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
            <h3 className="font-semibold">Chat With Sanjay's Assistant</h3>
            <button onClick={toggleWidget} className="text-white font-bold hover:text-gray-200" aria-label="Close Chat">
              &times;
            </button>
          </div>

          {/* Widget Body */}
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block rounded-lg p-2 max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block bg-gray-200 text-gray-800 rounded-lg p-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              onClick={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded-l text-black focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={sendMessage} 
              className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingWidget;