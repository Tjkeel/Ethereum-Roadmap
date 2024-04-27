mergeStatus = [
  // Beacon chain launch
  ["mergeA",[100]],

  // Warmup fork (Altair)
  ["mergeB",[100]],

  // Merge! No more PoW
  ["mergeC", false],

 // Withdrawals
  ["mergeD",[100]],

  // Distributed validators
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















// Cache for description and step elements
let descriptionElements = document.querySelectorAll('.description-container');
let stepElements = {};
const steps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
steps.forEach(step => {
    stepElements[step] = document.getElementById(`merge${step}`);
});

// Function to hide all description containers smoothly, then perform callback
function hideAllDescriptions(callback) {
    descriptionElements.forEach(description => {
        description.classList.remove('show');
        setTimeout(() => { description.style.display = 'none'; }, 490);
    });
    setTimeout(callback, 500);
}

// Function to show a specific description container smoothly
function showDescription(id) {
    hideAllDescriptions(() => {
        const element = document.getElementById(id);
        element.style.display = 'block';
        setTimeout(() => { element.classList.add('show'); }, 10);
        updateActiveStep(id);
        resetAutoAdvanceTimer(); // Reset the auto-advance timer when a new description is shown
    });
}

// Update the active step style
function updateActiveStep(activeDescriptionId) {
    // First, remove 'active' class from all steps to ensure only the current one is marked active
    Object.keys(stepElements).forEach(step => {
        stepElements[step].classList.remove('active');
    });
    // Then, add 'active' class only to the current step
    Object.keys(stepElements).forEach(step => {
        if (`merge${step}-description` === activeDescriptionId) {
            stepElements[step].classList.add('active');
        }
    });
}

// Function to navigate descriptions using arrows and swipe gestures
function navigateDescription(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % steps.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + steps.length) % steps.length;
    }
    let descriptionId = `merge${steps[currentIndex]}-description`;
    showDescription(descriptionId);
}

// Add swipe functionality
function addSwipeEvents(element) {
    let touchstartX = 0;
    let touchendX = 0;

    element.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, false);

    element.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (touchendX + 50 < touchstartX) {
            navigateDescription('next');
        }
        if (touchendX - 50 > touchstartX) {
            navigateDescription('prev');
        }
    }, false);
}

// Variables to manage user interaction and automatic cycling
let currentIndex = 0;
let autoAdvanceTimer;

// Function to reset the auto-advance timer
function resetAutoAdvanceTimer() {
    clearInterval(autoAdvanceTimer);
    autoAdvanceTimer = setInterval(() => {
        navigateDescription('next');
    }, 25000); // Change description every 25 seconds
}

// Initialize and add event listeners
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        showDescription('mergeA-description');
        resetAutoAdvanceTimer(); // Start the auto-advance timer after initial display
    }, 500);

    steps.forEach(step => {
        let descriptionId = `merge${step}-description`;
        let stepElement = stepElements[step];

        stepElement.addEventListener('click', () => {
            showDescription(descriptionId);
            currentIndex = steps.indexOf(step);
            resetAutoAdvanceTimer(); // Reset timer on manual navigation
        });
    });

    descriptionElements.forEach(container => {
        addSwipeEvents(container);
        let leftArrow = container.querySelector('.left-arrow-pointer');
        let rightArrow = container.querySelector('.right-arrow-pointer');

        leftArrow.addEventListener('click', () => {
            navigateDescription('prev');
            resetAutoAdvanceTimer(); // Reset timer on arrow click
        });
        rightArrow.addEventListener('click', () => {
            navigateDescription('next');
            resetAutoAdvanceTimer(); // Reset timer on arrow click
        });
    });
});
