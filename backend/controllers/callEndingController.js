// Import necessary modules
const { google } = require('googleapis');

// Set up the Google API client
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: 'YOUR_CLIENT_EMAIL',
    private_key: 'YOUR_PRIVATE_KEY',
  },
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

// Create an async function to handle the API call
const endCall = async (req, res) => {
  try {
    const { meetingId } = req.body;

    // Get the meeting session
    const response = await meetingsAPI.media.meetings.get({
      name: `media/meetings/${meetingId}`,
    });

    // Check if the meeting is still active
    if (response.data.state === 'STARTED') {
      // End the meeting
      await meetingsAPI.media.meetings.end({
        name: `media/meetings/${meetingId}`,
      });
      console.log('Google Meet call ended successfully.');
      res.status(200).json({ message: 'Call ended successfully' });
    } else {
      console.log('The Google Meet call has already ended.');
      res.status(400).json({ message: 'The call has already ended' });
    }
  } catch (error) {
    console.error('Error ending Google Meet call:', error);
    res.status(500).json({ message: 'Error ending call', error: error.message });
  }
};

// Export the async function
module.exports = { endCall };
