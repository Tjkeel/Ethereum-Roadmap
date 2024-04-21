// Firebase configuration - hardcoded directly into the script
var firebaseConfig = {
  apiKey: "AIzaSyDncyT8fijaVTo4-Ja2upEvWwh6HejImRg",
  authDomain: "ethereum-roadmap-d771b.firebaseapp.com",
  databaseURL: "https://ethereum-roadmap-d771b-default-rtdb.firebaseio.com",
  projectId: "ethereum-roadmap-d771b",
  storageBucket: "ethereum-roadmap-d771b.appspot.com",
  messagingSenderId: "458915500883",
  appId: "1:458915500883:web:51a25a93886dd82cb2c7a6",
  measurementId: "G-28SNWVHHVD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messagesRef = firebase.database().ref('messages');

document.addEventListener('DOMContentLoaded', function() {
    loadMessages();
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enterChat();
        }
    });
});

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

function loadMessages() {
    messagesRef.on('child_added', function(snapshot) {
        const data = snapshot.val();
        displayMessage(snapshot.key, data.text, data.name, data.time);
    });
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    const senderName = document.getElementById('senderName').value.trim();
    const timestamp = getFormattedDate(); // Get formatted date and time
    messageInput.value = ''; // Clear the message input after sending

    if (message.trim() !== '' && senderName !== '') {
        messagesRef.push({name: senderName, text: message, time: timestamp});
    } else {
        alert('Please enter your name.');
    }
}

function getFormattedDate() {
    const now = new Date();
    const utcDate = now.toUTCString();  // Convert to a string in UTC time
    const dateParts = utcDate.split(' ');  // Split the UTC string to extract relevant parts
    const formattedDate = `${dateParts[2]} ${dateParts[1]}, ${dateParts[3]} at ${dateParts[4].substr(0, 5)} UTC`;
    return formattedDate;
}

function displayMessage(id, text, name, time) {
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');

    // Create span for the username and apply CSS class
    const nameSpan = document.createElement('span');
    nameSpan.className = 'message-name';
    nameSpan.textContent = `${name}: `;

    // Create span for the time and apply CSS class
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = ` at ${time}`;

    // Assemble the message content
    newMessage.appendChild(nameSpan);
    newMessage.append(text);  // Text follows the username directly
    newMessage.appendChild(timeSpan);  // Time is added after the text
    messagesContainer.appendChild(newMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
