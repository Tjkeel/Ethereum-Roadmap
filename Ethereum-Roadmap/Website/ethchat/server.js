const fs = require('fs');
const https = require('https');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const options = {
  key: fs.readFileSync('server.key'), // Path to the key file
  cert: fs.readFileSync('server.cert') // Path to the certificate file
};

// Apply CORS middleware to allow requests from your Firebase domain
app.use(cors({
  origin: 'https://ethroadmap.com' // Adjust if your domain is different
}));

// Create HTTPS server
const server = https.createServer(options, app);
const io = socketIo(server);

// Serve static files (adjust as needed for your setup)
app.use(express.static('public'));

// Define routes (adjust according to your needs)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Socket.io connection setup
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Listen on HTTPS port 443
const PORT = 443;
server.listen(PORT, () => {
  console.log(`Server running on HTTPS on port ${PORT}`);
});
