const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),  // Ensure these paths are correct
  cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

// Configuring CORS to allow requests from your domain
app.use(cors({
  origin: 'https://ethroadmap.com',  // Adjust based on your actual deployment origin
  credentials: true  // Allows cookies and credentials to be sent along with the requests
}));

// Create HTTPS server
const server = https.createServer(options, app);
const io = socketIo(server, {
  cors: {
    origin: 'https://ethroadmap.com',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io setup for handling WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chat message', (msg) => {
        // Broadcasting message to all connected clients
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chatroom.html'));
});

app.get('/chatroom', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chatroom.html'));
});

// Listen on HTTPS port 443
const PORT = 443;
server.listen(PORT, () => {
    console.log(`Server running on HTTPS on port ${PORT}`);
}).on('error', (e) => {
    console.error('Failed to start server:', e);
});
