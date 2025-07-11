# NinjaOne Ticketing Integration Guide

This document explains how to set up and configure the NinjaOne ticketing system integration with the MSQ IT website chatbot.

## Prerequisites

1. A NinjaOne account with API access
2. Admin access to your NinjaOne instance
3. Your MSQ IT website codebase

## Setup Steps

### 1. Generate NinjaOne API Credentials

1. Log in to your NinjaOne dashboard
2. Navigate to **Administration → API**
3. Create a new API key with the following permissions:
   - Tickets: Read/Write
   - Contacts: Read/Write
4. Copy the generated API key and keep it secure

### 2. Configure Environment Variables

1. Create or update your `.env.local` file in the root of your project
2. Add the following environment variables:
   ```
   NINJAONE_API_KEY=your_ninjaone_api_key
   NINJAONE_API_URL=https://your-instance.ninjaone.com/api
   ```
   Replace `your_ninjaone_api_key` with the actual API key
   Replace `your-instance` with your NinjaOne instance name

### 3. Verify API Connection

1. Make a test API call to ensure your credentials are working correctly:
   ```bash
   curl -X GET "https://your-instance.ninjaone.com/api/v2/tickets" \
     -H "Authorization: Bearer your_ninjaone_api_key" \
     -H "Content-Type: application/json"
   ```

## How the Integration Works

The chatbot integration with NinjaOne works as follows:

1. When a user indicates they want to create a ticket, the chatbot enters a guided ticket creation flow
2. The chatbot collects the following information:
   - User's name
   - Email address
   - Ticket subject
   - Issue description
   - Priority level
3. Once all information is collected, the chatbot sends a request to the `/api/create-ticket` endpoint
4. The endpoint authenticates with the NinjaOne API and creates a new ticket
5. The ticket ID is returned to the user for reference

## Customization Options

### Ticket Fields

You can modify the ticket fields in `pages/api/create-ticket.js` to include additional information required by your NinjaOne instance:

```javascript
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
  // Add custom fields here
  customFields: {
    department: 'IT Support',
    category: 'Website'
  }
};
```

### Chatbot Flow

You can customize the chatbot's ticket creation flow by modifying the `handleTicketInput` function in `components/Chatbot.js`.

## Troubleshooting

### Common Issues

1. **API Authentication Errors**
   - Verify your API key is correct and has the necessary permissions
   - Check that your instance URL is formatted correctly

2. **Missing Ticket Fields**
   - Some NinjaOne instances require specific fields for ticket creation
   - Check your NinjaOne API documentation for required fields

3. **CORS Issues**
   - If you encounter CORS errors, ensure your Next.js API routes are properly handling CORS

### Logs

Check the browser console and server logs for detailed error messages if tickets aren't being created properly.

## Support

If you need additional help with the NinjaOne integration, contact:
- MSQ IT Support: support@msqit.com.au
- NinjaOne API Documentation: https://developer.ninjaone.com/
