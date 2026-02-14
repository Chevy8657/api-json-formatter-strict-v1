'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '256kb' })); // Increased limit for larger JSON payloads

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.post('/v1/format', (req, res) => {
  const { input } = req.body;

  if (typeof input !== 'object' || input === null) {
    return res.status(400).json({ error: 'Input must be a valid JSON object.' });
  }

  try {
    // Re-stringifies with 2-space indentation
    const output = JSON.stringify(input, null, 2);
    res.status(200).send(output); 
  } catch (err) {
    res.status(400).json({ error: 'Invalid JSON structure.' });
  }
});

app.listen(process.env.PORT || 10000);
