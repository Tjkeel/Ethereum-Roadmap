window.onload = function() {
  setProgressBar('merge-progress', [
    { width: 50, color: '#99C66D' }, // Green
    { width: 20, color: '#AE80B1' }, // Purple
    { width: 5, color: '#6A9BE7' },  // Blue
    { width: 10, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('surge-progress', [
    { width: 10, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 65, color: '#6A9BE7' }, // Blue
    { width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('scourge-progress', [
    { width: 15, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 0, color: '#6A9BE7' },  // Blue
	{ width: 25, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('verge-progress', [
    { width: 10, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 0, color: '#6A9BE7' },  // Blue
    { width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('purge-progress', [
    { width: 20, color: '#99C66D' }, // Green
    { width: 5, color: '#AE80B1' },  // Purple
    { width: 5, color: '#6A9BE7' },  // Blue
    { width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('splurge-progress', [
    { width: 35, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 0, color: '#6A9BE7' },  // Blue
    { width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);
};

function setProgressBar(id, sections) {
  const progressBar = document.getElementById(id);
  if (progressBar) {
    progressBar.innerHTML = ''; // Clear existing sections
    const totalWidth = sections.reduce((acc, section) => acc + section.width, 0);
    progressBar.style.width = `${totalWidth}%`; // Set the total width of the progress bar

    sections.forEach((section, index) => {
      const sectionDiv = document.createElement('div');
      sectionDiv.style.width = '0%'; // Initially set width to 0%
      sectionDiv.style.height = '100%';
      sectionDiv.style.backgroundColor = section.color;
      sectionDiv.style.display = 'inline-block';
      progressBar.appendChild(sectionDiv);

      // Apply transition with a slight delay to ensure it's rendered
      setTimeout(() => {
        sectionDiv.style.transition = 'width 2s ease'; // Apply a transition to the width
        sectionDiv.style.width = `${(section.width / totalWidth) * 100}%`; // Set to target width
      }, 0);
    });
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

// Update the countdown every second for Shanghai-Capella
setInterval(updateCountdown3, 1000);

function updateCountdown3() {
  const callDate = new Date('2023-04-12');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.abs(Math.floor((diff % (1000 * 60)) / 1000));

  // Update the countdown display
  document.getElementById('days3').textContent = days;
  document.getElementById('hours3').textContent = hours;
  document.getElementById('minutes3').textContent = minutes;
  document.getElementById('seconds3').textContent = seconds;
}


// Update the countdown every second for Cancun-Deneb
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const callDate = new Date('2024-03-13T13:55:35Z');
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

// Update the countdown every second for Prague-Electra
setInterval(updateCountdown2, 1000);

function updateCountdown2() {
  const callDate = new Date('2024-12-31');
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


//Code for Modals within each of the six development paths
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const lastUpdated = document.getElementById('last-updated');
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    lastUpdated.textContent = formattedDate;
});
