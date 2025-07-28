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




// const express = require('express');
// const router = express.Router();
// require('dotenv').config();
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// router.post('/rewrite', async (req, res) => {
//   const { originalText } = req.body;
//   console.log("📩 Request received:", originalText);

//   try {
//     const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: `Rewrite this sentence better: "${originalText}"`
//               }
//             ]
//           }
//         ]
//       }),
//     });

//     const data = await response.json();
//     console.log("📦 Full Gemini response:", JSON.stringify(data, null, 2));

//     if (!data || !data.candidates || !data.candidates[0]) {
//       return res.status(500).json({ error: 'Invalid response from Gemini API' });
//     }

//     const rewrittenText = data.candidates[0].content.parts[0].text;
//     console.log("✍️ Rewritten:", rewrittenText);
//     res.json({ rewrittenText });
//   } catch (error) {
//     console.error("❌ Rewrite error:", error);
//     res.status(500).json({ error: 'Something went wrong with Gemini AI.' });
//   }
// });

// module.exports = router;
 