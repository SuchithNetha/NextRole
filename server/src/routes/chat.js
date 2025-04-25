const express = require('express');
const router = express.Router();
const getGeminiResponse = require('../utils/geminiService');

router.post('/ask', async (req, res) => {
  const { question } = req.body;

  const prompt = `
    You are a smart AI career assistant. Only answer questions related to:
    - Job roles
    - Skill development
    - Roadmaps
    - Career growth

    Question: "${question}"
  `;

  try {
    const answer = await getGeminiResponse(prompt);
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

module.exports = router;
