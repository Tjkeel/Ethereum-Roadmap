// Establish a connection to the server via Socket.IO
// Updated to handle self-signed certificates in development environments
// Adjust the URL to your public IP or domain where your Node.js server is running
const socket = io('67.84.57.112:443', {secure: true, rejectUnauthorized: false});

// Function to handle password entry and show chatroom
function enterChat() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'ethereum'; // Set your room password here

    if (passwordInput === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chatroom').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}

// Function to send messages
function sendMessage() {
    const messageBox = document.getElementById('messageInput');
    const message = messageBox.value;
    const senderName = document.getElementById('senderName').value.trim();
    messageBox.value = ''; // Clear the message input after sending

    if (message.trim() !== '' && senderName !== '') {
        // Emit the message to the server
        socket.emit('chat message', `${senderName}: ${message}`);
    } else if (senderName === '') {
        alert('Please enter your name.');
    }
}

// Function to receive messages and add to the message container
socket.on('chat message', function(msg) {
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = msg;
    messagesContainer.appendChild(newMessage);
    // Automatically scroll to the latest message
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// Optional: Listen for 'Enter' key to send messages
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});