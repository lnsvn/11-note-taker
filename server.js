// Import express.js
const express = require('express');
// Import 'path' package
const path = require('path');

// Port the server will run
const PORT = process.env.PORT || 3001;

// Initialize instance of Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware pointing to the public folder
app.use(express.static('public'));

// GET route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// LISTEN for incoming connections on the specified port 
app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));