// API endpoint for creating tickets in NinjaOne
import axios from 'axios';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      subject, 
      description, 
      priority = 'medium' // default priority
    } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !description) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        requiredFields: ['name', 'email', 'subject', 'description'] 
      });
    }

    // NinjaOne API credentials from environment variables
    const apiKey = process.env.NINJAONE_API_KEY;
    const apiUrl = process.env.NINJAONE_API_URL;

    if (!apiKey || !apiUrl) {
      console.error('NinjaOne API credentials not configured');
      return res.status(500).json({ error: 'Ticketing system not configured' });
    }

    // Map priority from simple terms to NinjaOne's system
    const priorityMap = {
      low: 3,
      medium: 2,
      high: 1,
      urgent: 0
    };

    // Prepare ticket data for NinjaOne API
    const ticketData = {
      subject,
      description,
      status: 'new',
      priority: priorityMap[priority] || 2,
      source: 'website_chatbot',
      contact: {
        name,
        email
      },
      // Add any other required fields for NinjaOne
    };

    // Make API request to NinjaOne
    const response = await axios.post(
      `${apiUrl}/v2/tickets`, 
      ticketData,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Return success with ticket ID and any other relevant info
    return res.status(200).json({
      success: true,
      ticketId: response.data.id,
      ticketNumber: response.data.ticketNumber || response.data.id,
      message: 'Support ticket created successfully'
    });

  } catch (error) {
    console.error('Error creating NinjaOne ticket:', error);
    
    // Return appropriate error message
    return res.status(error.response?.status || 500).json({
      error: 'Failed to create ticket',
      details: error.response?.data || error.message
    });
  }
}
