// pages/api/submit-question.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { question } = req.body;
      // Process the question as needed
      console.log('Received question:', question);
      res.status(200).json({ message: 'Question received' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }