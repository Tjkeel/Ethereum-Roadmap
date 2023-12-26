window.onload = function() {
  // Initialize progress bars on the merge.html page
  setMergeProgressBars();
};

function setMergeProgressBars() {
  updateProgress('transition-pos-progress', 100); // Transition to PoS is complete.
  updateProgress('ssf-progress', 75); // Estimate for SSF progress.
  updateProgress('more-validators-progress', 60); // Estimate for enabling more validators.
  updateProgress('quantum-safe', 10); // Estimate for enabling more validators.
}

function updateProgress(id, progress) {
  const progressBar = document.getElementById(id);
  const progressContainer = progressBar.closest('.progress-container');
  if (progress >= 100) {
    // Create a checkmark container and insert it outside the progress bar container
    const checkMarkContainer = document.createElement('div');
    checkMarkContainer.className = 'checkmark-container';
    checkMarkContainer.innerHTML = '<span class="checkmark">&#10003;</span>';

    progressContainer.parentElement.replaceChild(checkMarkContainer, progressContainer);
  } else {
    // Update the width of the progress bar if not 100% complete
    progressBar.style.width = progress + '%';
  }
}
