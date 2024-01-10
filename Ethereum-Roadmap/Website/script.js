window.onload = function() {
  setProgressBar('merge-progress', 70, 5, 0);
  setProgressBar('surge-progress', 10, 65, 0); 
  setProgressBar('scourge-progress', 15, 0, 0); 
  setProgressBar('verge-progress', 10, 0, 50); 
  setProgressBar('purge-progress', 20, 5, 0); 
  setProgressBar('splurge-progress', 35, 5, 0); 

};

function setProgressBar(id, greenWidth, blueWidth, redWidth) {
  const progressBar = document.getElementById(id);
  if (progressBar) {
    const totalWidth = greenWidth + blueWidth + redWidth;
    progressBar.style.width = `${totalWidth}%`; 
    progressBar.style.setProperty('--blue-width', `${blueWidth / totalWidth * 100}%`);
    progressBar.style.setProperty('--red-width', `${redWidth / totalWidth * 100}%`);
    progressBar.style.setProperty('--green-width', `${greenWidth / totalWidth * 100}%`);

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

// Update the countdown every second for Cancun-Deneb
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const callDate = new Date('2024-03-15');
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
setInterval(updateCountdown2, 1000);

function updateCountdown2() {
  const callDate = new Date('2025-03-31');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days2').textContent = days;
  document.getElementById('hours2').textContent = hours;
  document.getElementById('minutes2').textContent = minutes;
  document.getElementById('seconds2').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown2, 1000);

//Code for Modals within each of the six development paths
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
