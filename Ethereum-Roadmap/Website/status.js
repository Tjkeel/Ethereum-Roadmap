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

// The below functions are all for the descriptions and their features


// Function to hide all description containers smoothly
function hideAllDescriptions() {
    const descriptions = document.querySelectorAll('.description-container');
    descriptions.forEach(function(description) {
        description.classList.remove('show');
        setTimeout(() => { description.style.display = 'none'; }, 500);
    });
}

// Function to show a specific description container smoothly
function showDescription(id) {
    const element = document.getElementById(id);
    hideAllDescriptions();
    setTimeout(() => {
        element.style.display = 'block';
        setTimeout(() => { element.classList.add('show'); }, 10);
    }, 500);
    updateActiveStep(id);
}

// Update the active step style
function updateActiveStep(activeDescriptionId) {
    const allSteps = document.querySelectorAll('.step');
    allSteps.forEach(step => {
        const descriptionId = `merge${step.id.replace('merge', '')}-description`;
        step.classList.toggle('active', descriptionId === activeDescriptionId);
    });
}

// Function to navigate descriptions using arrows and reset the cycling timer
function navigateDescription(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % steps.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + steps.length) % steps.length;
    }
    let descriptionId = `merge${steps[currentIndex]}-description`;
    showDescription(descriptionId);
    resetCyclingTimer(); // Reset the timer whenever an arrow is clicked
}

// Variables to manage automatic cycling and user interaction
let currentIndex = 0;
const steps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
let cycleTimer;

// Function to reset the cycling timer
function resetCyclingTimer() {
    clearInterval(cycleTimer);
    cycleTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % steps.length;
        showDescription(`merge${steps[currentIndex]}-description`);
    }, 15000); // Change description every 15 seconds
}

// Function to start or restart the cycling of descriptions with initial delay
function startCyclingDescriptions() {
    resetCyclingTimer(); // Start cycling descriptions after initial display
}

// Add event listeners to steps and arrows after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        showDescription('mergeA-description');
        startCyclingDescriptions();
    }, 1000);

    steps.forEach(function(step) {
        let stepId = 'merge' + step;
        let descriptionId = stepId + '-description';
        let stepElement = document.getElementById(stepId);

        stepElement.addEventListener('click', function() {
            showDescription(descriptionId);
            currentIndex = steps.indexOf(step);
            resetCyclingTimer(); // Reset the timer whenever a step is clicked
        });
    });

    document.querySelectorAll('.description-container').forEach(container => {
        let leftArrow = container.querySelector('.left-arrow-pointer');
        let rightArrow = container.querySelector('.right-arrow-pointer');

        leftArrow.addEventListener('click', () => navigateDescription('prev'));
        rightArrow.addEventListener('click', () => navigateDescription('next'));
    });
});