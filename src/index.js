// filepath: /f:/DavesRepositories/nataliewintersJS/src/index.js
console.log('Starting server...');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Changed port to 3001

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Route for the main page
app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Route for the nataliegwinters page
app.get('/nataliegwinters', (req, res) => {
  console.log('Serving nataliegwinters.html');
  res.sendFile(path.join(__dirname, '..', 'nataliegwinters.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});