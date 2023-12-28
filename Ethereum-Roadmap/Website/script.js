window.onload = function() {
  // Hypothetical progress values for each section based on the most recent roadmap chart
  setProgressBar('merge-progress', 80); // Assuming "The Merge" is about 80% complete
  setProgressBar('surge-progress', 50); // Assuming "The Surge" is about 50% complete
  setProgressBar('scourge-progress', 30); // Assuming "The Scourge" is about 30% complete
  setProgressBar('verge-progress', 20); // Assuming "The Verge" is about 20% complete
  setProgressBar('purge-progress', 10); // Assuming "The Purge" is about 10% complete
  setProgressBar('splurge-progress', 5); // Assuming "The Splurge" is just starting, about 5% complete
};

// Function to update the progress bar
function setProgressBar(id, progress) {
  const progressBar = document.getElementById(id);
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("roadmapImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
function updateCountdown() {
  const callDate = new Date('2024-03-31');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

//Code for Modals within each of the six development paths
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}