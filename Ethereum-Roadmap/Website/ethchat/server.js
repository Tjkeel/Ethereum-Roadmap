const express = require('express');
const https = require('https');
const fs = require('fs');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const options = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

const server = https.createServer(options, app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

// Basic route that serves the chatroom.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chatroom.html'));
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);  // Emit message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = 443;
server.listen(PORT, () => {
    console.log(`Server running on HTTPS on port ${PORT}`);
});
