mergeStatus = [
  // Beacon chain launch
  ["mergeA",[100]],

  // Warmup fork (Altair)
  ["mergeB",[100]],

  // Merge! No more PoW
  ["mergeC", false],

  // Distributed validators
  ["mergeD",[100]],

  // Withdrawals
  ["mergeE",[100]],

  // Secret leader election
  ["mergeF",[60]], 

  // Per-slot participant selection
  ["mergeG",[50]],

  // SSF specification
  ["mergeH",[35]],

  // Implmentation
  ["mergeI",[0]],

  // Single slot finality (SSF)
  ["mergeJ", false],

  // Ideal quantum-safe signatures
  ["mergeK", false],

  // Increase validator count
  ["mergeL",[0]]
]

function progress(group) {
  for (step=0; step < group.length; step++) {
    if (group[step][1] != false) {
      ident = group[step][0]
      prog = group[step][1].slice(-1)
      grad = `linear-gradient(90deg, rgb(153 198 109) ${prog}%, rgb(250 250 250 / 0%) ${prog}%)`
      document.getElementById(ident).style.background = grad;
    }
  }
}

progress(mergeStatus)

// Function to hide all description containers smoothly
function hideAllDescriptions() {
    const descriptions = document.querySelectorAll('.description-container');
    descriptions.forEach(function(description) {
        description.classList.remove('show'); // Remove 'show' class to start fade out
        setTimeout(() => { description.style.display = 'none'; }, 500); // Set display to none after transition completes
    });
}

// Function to show a specific description container smoothly
function showDescription(id) {
    const element = document.getElementById(id);
    hideAllDescriptions(); // First hide all containers smoothly
    setTimeout(() => {
        element.style.display = 'block'; // Set display to block before adding 'show'
        setTimeout(() => { element.classList.add('show'); }, 10); // Add 'show' class to start fade in
    }, 500); // Ensure other descriptions fade out before showing the new one
}

// Variables to manage automatic cycling and user interaction
let currentIndex = 0; // Start with the first description
const steps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']; // Steps that have descriptions
let cycleTimer; // Timer for cycling descriptions

// Function to start or restart the cycling of descriptions with initial delay
function startCyclingDescriptions() {
    if (cycleTimer) {
        clearInterval(cycleTimer); // Clear existing timer if it exists
    }
    cycleTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % steps.length; // Move to the next index, wrap around at the end
        let descriptionId = `merge${steps[currentIndex]}-description`;
        showDescription(descriptionId);
    }, 10000); // Change description every 10 seconds
}

// Add event listeners to steps after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay the initial display and cycling of descriptions
    setTimeout(() => {
        showDescription('mergeA-description'); // Show the first description with fade in
        startCyclingDescriptions(); // Start cycling descriptions after initial display
    }, 1000); // Delay before starting everything

    // Setup event listeners for each step
    steps.forEach(function(step) {
        let stepId = 'merge' + step; // ID of the step, e.g., 'mergeA'
        let descriptionId = stepId + '-description'; // Corresponding description ID

        document.getElementById(stepId).addEventListener('click', function() {
            showDescription(descriptionId);
            currentIndex = steps.indexOf(step); // Update current index to this step
            clearInterval(cycleTimer); // Stop automatic cycling on user click
        });
    });
});


