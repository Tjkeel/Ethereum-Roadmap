document.addEventListener('DOMContentLoaded', () => {
  // Hypothetical progress values for each section based on the most recent roadmap chart
  setProgressBar('merge-progress', 80); // Assuming "The Merge" is about 80% complete
  setProgressBar('surge-progress', 50); // Assuming "The Surge" is about 50% complete
  setProgressBar('scourge-progress', 30); // Assuming "The Scourge" is about 30% complete
  setProgressBar('verge-progress', 20); // Assuming "The Verge" is about 20% complete
  setProgressBar('purge-progress', 10); // Assuming "The Purge" is about 10% complete
  setProgressBar('splurge-progress', 5); // Assuming "The Splurge" is just starting, about 5% complete
});

// Function to update the progress bar
function setProgressBar(id, progress) {
  const progressBar = document.getElementById(id);
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
}
