const express = require('express');
const router = express.Router();
const axios = require('axios');
const Note = require('../models/note');
require('dotenv').config();

router.post('/rewrite', async (req, res) => {
  const { originalText } = req.body;
  console.log("📩 Request received:", originalText);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that rewrites user text in a more creative and clear way."
          },
          {
            role: "user",
            content: `Rewrite this: ${originalText}`
          }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const rewrittenText = response.data.choices[0].message.content.trim();

    const note = new Note({ originalText, rewrittenText });
    await note.save();

    res.json({ rewrittenText });
  } catch (err) {
    console.error('Rewrite error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Something went wrong while rewriting.' });
  }
});

module.exports = router;
