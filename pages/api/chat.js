// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
require('dotenv').config();

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, chatHistory } = req.body;
    
    // Get API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    
    // Debug API key
    console.log('API key check:');
    console.log('API key exists:', !!apiKey);
    console.log('API key length:', apiKey ? apiKey.length : 0);
    console.log('API key first 10 chars:', apiKey ? apiKey.substring(0, 10) + '...' : 'N/A');
    
    // If API key is not available, fall back to rule-based system
    if (!apiKey) {
      console.warn('API key not available, falling back to rule-based system');
      return res.status(200).json({ response: getRuleBasedResponse(message) });
    }
    
    // Use the API key directly
    const finalApiKey = apiKey;

    // Format chat history for OpenAI
    const formattedHistory = chatHistory ? chatHistory.map(msg => ({
      role: msg.role,
      content: msg.content
    })) : [];

    // Prepare messages array with system message and chat history
    const messages = [
      {
        role: "system",
        content: `You are an AI assistant for MSQ IT, a managed services provider based in Brisbane, Australia. 
        You specialize in Microsoft 365, Azure, cybersecurity, ERP systems (especially Microsoft Dynamics 365 Business Central), 
        and general IT support for small to medium businesses. 
        Be helpful, professional, and concise. Always offer practical solutions to IT problems. 
        If you don't know something, suggest contacting the MSQ IT support team at info@msqit.com.au or +61450 013 064. 
        Do not make up information about MSQ IT's specific clients or internal processes.`
      },
      ...formattedHistory,
      {
        role: "user",
        content: message
      }
    ];

    console.log('Attempting to call OpenAI API with axios...');
    
    // Prepare headers for OpenAI API request
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${finalApiKey}`
    };
    
    // Note: We're removing the OpenAI-Organization header as it was causing an error
    // The error was: "OpenAI-Organization header should match organization for API key"
    
    console.log('Request headers:', JSON.stringify(headers, null, 2).replace(finalApiKey, '[REDACTED]'));
    
    // Log the full request for debugging
    console.log('OpenAI API request:', {
      url: 'https://api.openai.com/v1/chat/completions',
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: '...' }, { role: 'user', content: message }]
    });
    
    // Call OpenAI API using axios
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: headers,
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are an AI assistant for MSQ IT, a managed services provider based in Brisbane, Australia. You specialize in Microsoft 365, Azure, cybersecurity, ERP systems, and general IT support for small to medium businesses.' },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500
      },
      timeout: 10000 // 10 second timeout
    });

    console.log('OpenAI API response received successfully');
    console.log('Response status:', response.status);
    console.log('Response data structure:', Object.keys(response.data));
    
    // Safely extract the AI response
    let aiResponse = '';
    if (response.data && response.data.choices && response.data.choices.length > 0) {
      if (response.data.choices[0].message && response.data.choices[0].message.content) {
        aiResponse = response.data.choices[0].message.content;
        console.log('AI response extracted successfully');
      } else {
        console.error('Unexpected response structure - missing message content:', response.data.choices[0]);
        aiResponse = "I'm having trouble understanding right now. Please try again or contact our support team.";
      }
    } else {
      console.error('Unexpected response structure - missing choices array:', response.data);
      aiResponse = "I'm having trouble processing your request. Please try again or contact our support team.";
    }

    return res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error('Error in chat API:', error.message);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error data:', JSON.stringify(error.response.data, null, 2));
      console.error('Error status:', error.response.status);
      console.error('Error headers:', JSON.stringify(error.response.headers, null, 2));
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error config:', error.config);
    }
    
    // If there's an error with the OpenAI service, fall back to rule-based system
    return res.status(200).json({ 
      response: getRuleBasedResponse(req.body.message),
      fallback: true,
      error: error.message,
      errorDetails: error.response ? error.response.data : null
    });
  }
}

// Fallback rule-based system
function getRuleBasedResponse(message) {
  const lowerCaseMessage = message.toLowerCase();
  
  if (lowerCaseMessage.includes('password') && lowerCaseMessage.includes('reset')) {
    return "I can help with password resets! Would you like me to guide you through our self-service password reset process or create a support ticket for you?";
  } else if (lowerCaseMessage.includes('microsoft') || lowerCaseMessage.includes('365') || lowerCaseMessage.includes('office')) {
    return "We provide comprehensive Microsoft 365 services including tenant configuration, email migration, and ongoing support. Would you like more information about our Microsoft services?";
  } else if (lowerCaseMessage.includes('security') || lowerCaseMessage.includes('cybersecurity') || lowerCaseMessage.includes('cyber')) {
    return "Security is our priority! We offer enterprise-grade cybersecurity solutions for small to medium businesses, including email protection, endpoint security, and security assessments. How can we help with your security needs?";
  } else if (lowerCaseMessage.includes('erp') || lowerCaseMessage.includes('dynamics') || lowerCaseMessage.includes('business central')) {
    return "Our team has strong expertise in Microsoft Dynamics 365 Business Central and Wiise ERP implementations. We can help streamline your operations with these powerful tools. Would you like to discuss your ERP needs?";
  } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('speak') || lowerCaseMessage.includes('human')) {
    return "I'd be happy to connect you with our team! You can reach us at info@msqit.com.au or call +61450 013 064 during business hours (Mon-Fri, 8AM-5PM). Would you like me to create a support ticket for you instead?";
  } else if (lowerCaseMessage.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with today?";
  } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
    return "Thank you for chatting with MSQ IT's virtual assistant. Have a great day!";
  } else {
    return "I'm still learning! For specific assistance, please contact our support team at info@msqit.com.au or call +61450 013 064. Alternatively, I can create a support ticket for you. Would you like me to do that?";
  }
}
