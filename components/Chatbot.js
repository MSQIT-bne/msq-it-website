import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your MSQ IT virtual assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [ticketInfo, setTicketInfo] = useState(null);
  const [ticketStep, setTicketStep] = useState(0); // 0: not collecting, 1: name, 2: email, 3: subject, 4: description
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // State for ticket creation already defined above

  // Function to get response from AI API
  const getBotResponse = async (userMessage) => {
    setIsThinking(true);
    
    try {
      // Call our Next.js API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage,
          chatHistory: messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))
        }),
      });
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      setIsThinking(false);
      return data; // Return the full response object
    } catch (error) {
      console.error('Error calling AI API:', error);
      setIsThinking(false);
      // Return an object with response and fallback properties
      return {
        response: "Sorry, I'm having trouble connecting right now. Please try again later or contact our support team directly.",
        fallback: true
      };
    }
  };

  // Function to start ticket creation process
  const startTicketCreation = () => {
    setTicketInfo({
      name: '',
      email: '',
      subject: '',
      description: '',
      priority: 'medium'
    });
    setTicketStep(1);
    
    // Add bot message asking for name
    const botMessage = {
      id: messages.length + 1,
      text: "I'll help you create a support ticket. First, what's your name?",
      sender: 'bot',
      isTicketFlow: true
    };
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  // Function to handle ticket information collection
  const handleTicketInput = (input) => {
    switch(ticketStep) {
      case 1: // Name
        setTicketInfo({...ticketInfo, name: input});
        setTicketStep(2);
        return {
          response: `Thanks ${input}. Now, what's your email address so our team can contact you?`,
          isTicketFlow: true
        };
      
      case 2: // Email
        // Simple email validation
        if (!input.includes('@') || !input.includes('.')) {
          return {
            response: "That doesn't look like a valid email address. Please enter a valid email.",
            isTicketFlow: true
          };
        }
        setTicketInfo({...ticketInfo, email: input});
        setTicketStep(3);
        return {
          response: "Great! What's the subject of your support ticket?",
          isTicketFlow: true
        };
      
      case 3: // Subject
        setTicketInfo({...ticketInfo, subject: input});
        setTicketStep(4);
        return {
          response: "Now, please describe your issue in detail:",
          isTicketFlow: true
        };
      
      case 4: // Description
        setTicketInfo({...ticketInfo, description: input});
        setTicketStep(5);
        return {
          response: "What priority would you assign to this issue? (low, medium, high, urgent)",
          isTicketFlow: true
        };
      
      case 5: // Priority
        const priority = input.toLowerCase();
        if (!['low', 'medium', 'high', 'urgent'].includes(priority)) {
          return {
            response: "Please select a valid priority: low, medium, high, or urgent.",
            isTicketFlow: true
          };
        }
        
        setTicketInfo({...ticketInfo, priority: priority});
        setTicketStep(6);
        
        // Submit the ticket
        return submitTicket({...ticketInfo, priority: priority});
      
      default:
        return null;
    }
  };

  // Function to submit ticket to NinjaOne
  const submitTicket = async (ticketData) => {
    try {
      // Add a message indicating we're creating the ticket
      const processingMessage = {
        id: messages.length + 1,
        text: "Creating your support ticket...",
        sender: 'bot',
        isTicketFlow: true
      };
      setMessages(prevMessages => [...prevMessages, processingMessage]);
      
      // Call our API endpoint
      const response = await fetch('/api/create-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData),
      });
      
      const data = await response.json();
      
      // Reset ticket flow
      setTicketStep(0);
      setTicketInfo(null);
      
      if (response.ok) {
        return {
          response: `Your ticket has been created successfully! Ticket number: ${data.ticketNumber || data.ticketId}. Our support team will contact you soon.`,
          isTicketFlow: true,
          success: true
        };
      } else {
        console.error('Error creating ticket:', data);
        return {
          response: `There was an issue creating your ticket: ${data.error}. Please try again or contact us directly at info@msqit.com.au.`,
          isTicketFlow: true,
          error: true
        };
      }
    } catch (error) {
      console.error('Error submitting ticket:', error);
      
      // Reset ticket flow
      setTicketStep(0);
      setTicketInfo(null);
      
      return {
        response: "Sorry, there was a problem creating your ticket. Please try again or contact us directly at info@msqit.com.au.",
        isTicketFlow: true,
        error: true
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    setMessages([...messages, userMessage]);
    const userInput = inputValue;
    setInputValue('');

    // Check if we're in ticket creation flow
    if (ticketStep > 0) {
      try {
        // Process ticket input
        const result = await handleTicketInput(userInput);
        
        // Add bot response
        const botMessage = {
          id: messages.length + 2,
          text: result.response,
          sender: 'bot',
          isTicketFlow: true
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error in ticket flow:', error);
        
        // Add error message
        const errorMessage = {
          id: messages.length + 2,
          text: "Sorry, there was a problem processing your request. Let's try again.",
          sender: 'bot'
        };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
        
        // Reset ticket flow
        setTicketStep(0);
        setTicketInfo(null);
      }
      return;
    }

    // Add thinking indicator
    if (isThinking) {
      const thinkingMessage = {
        id: messages.length + 2,
        text: '...',
        sender: 'bot',
        isThinking: true
      };
      setMessages(prevMessages => [...prevMessages, thinkingMessage]);
    }

    try {
      // Check for ticket creation intent
      if (userInput.toLowerCase().includes('ticket') && 
          (userInput.toLowerCase().includes('create') || 
           userInput.toLowerCase().includes('open') || 
           userInput.toLowerCase().includes('submit') || 
           userInput.toLowerCase().includes('raise'))) {
        
        // Remove thinking message if it exists
        setMessages(prevMessages => 
          prevMessages.filter(msg => !msg.isThinking)
        );
        
        // Start ticket creation flow
        startTicketCreation();
        return;
      }

      // Get response from AI
      const result = await getBotResponse(userInput);
      
      // Remove thinking message if it exists
      setMessages(prevMessages => 
        prevMessages.filter(msg => !msg.isThinking)
      );
      
      // Check if the AI response suggests creating a ticket
      const response = result.response || result;
      if (typeof response === 'string' && 
          response.toLowerCase().includes('ticket') && 
          response.toLowerCase().includes('create')) {
        
        // Add bot response first
        const botMessage = {
          id: messages.length + 2,
          text: response,
          sender: 'bot',
          fallback: result.fallback || false
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        
        // Add a follow-up message with ticket creation option
        setTimeout(() => {
          const ticketOptionMessage = {
            id: messages.length + 3,
            text: "Would you like me to help you create a support ticket now? (Yes/No)",
            sender: 'bot',
            isTicketOption: true
          };
          setMessages(prevMessages => [...prevMessages, ticketOptionMessage]);
        }, 1000);
      } else {
        // Add normal bot response
        const botMessage = {
          id: messages.length + 2,
          text: response,
          sender: 'bot',
          fallback: result.fallback || false
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error('Error getting bot response:', error);
      
      // Remove thinking message if it exists
      setMessages(prevMessages => 
        prevMessages.filter(msg => !msg.isThinking)
      );
      
      // Add error message
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble processing your request. Please try again later.",
        sender: 'bot'
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-light text-white rounded-full p-4 shadow-lg hover:bg-primary transition-all z-50"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col" style={{ height: '500px' }}>
          {/* Chat header */}
          <div className="bg-gradient-to-r from-primary-light to-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-primary-light font-bold mr-3">
                AI
              </div>
              <h3 className="font-medium">MSQ IT Support</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start mb-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}
              >
                {msg.sender === 'bot' && (
                  <div className={`rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 ${msg.isTicketFlow ? 'bg-green-500' : 'bg-primary-light'}`}>
                    {msg.isTicketFlow ? 'TKT' : 'AI'}
                  </div>
                )}
                
                <div
                  className={`p-3 rounded-lg max-w-[80%] ${msg.sender === 'user'
                    ? 'bg-primary/20 text-gray-800'
                    : msg.isThinking
                      ? 'bg-gray-100 text-gray-500'
                      : msg.isTicketFlow
                        ? 'bg-green-50 border border-green-100 text-gray-700'
                        : msg.isTicketOption
                          ? 'bg-blue-50 border border-blue-100 text-gray-700'
                          : 'bg-primary-light/10 text-gray-700'
                  }`}
                >
                  {msg.isThinking ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  ) : (
                    <div>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      
                      {/* Ticket option buttons */}
                      {msg.isTicketOption && (
                        <div className="mt-3 flex space-x-2">
                          <button 
                            onClick={() => {
                              startTicketCreation();
                            }}
                            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
                          >
                            Yes, create ticket
                          </button>
                          <button 
                            onClick={() => {
                              const declineMessage = {
                                id: messages.length + 1,
                                text: "No problem. Let me know if you need anything else!",
                                sender: 'bot'
                              };
                              setMessages([...messages, declineMessage]);
                            }}
                            className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400 transition-colors"
                          >
                            No, thanks
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {msg.sender === 'user' && (
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white ml-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-primary-light text-white p-1 rounded-full hover:bg-primary"
                disabled={!inputValue.trim()}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
