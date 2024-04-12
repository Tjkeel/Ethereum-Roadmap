// chatroom.js
function enterChat() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'ethereum'; // Change as required

    if (passwordInput === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chatroom').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}

function sendMessage() {
    const messageBox = document.getElementById('messageInput');
    const message = messageBox.value;
    const senderName = document.getElementById('senderName').value.trim();
    messageBox.value = ''; // Clear the message input after sending
    if (message.trim() !== '' && senderName !== '') {
        const messagesContainer = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = `${senderName}: ${message}`;
        messagesContainer.appendChild(newMessage);
    } else if (senderName === '') {
        alert('Please enter your name.');
    }
}
