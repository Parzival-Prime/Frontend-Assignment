import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// To get the current directory in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'assets')));

// Or serve static files from the "build" directory (for React apps)
// app.use(express.static(path.join(__dirname, 'build')));

// For single-page applications (SPA) like React, fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 5000 (or any desired port)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
