// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

// Route to get the latest React version
app.get('/api/react', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/repos/facebook/react/releases/latest');
    res.json({ version: response.data.tag_name });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch React version' });
  }
});


// Route to get the latest Angular.js version
app.get('/api/angular', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/repos/angular/angular/releases/latest');
    console.log("asdasdasdasdasdsadsa", response.data);
    res.json({ version: response.data.tag_name });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Angular.js version' });
  }
});



// Route to get the latest Vue.js version
app.get('/api/vue', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/repos/vuejs/vue/releases/latest');
    res.json({ version: response.data.tag_name });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Vue.js version' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});