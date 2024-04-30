
// colors
progColor = {
    green: '#99C66D', purple: '#AE80B1', blue: '#6A9BE7', red: '#F1A196' // Add more sections as needed
}


// true = Hard forks - uses color(s)
// false = TTD & extra protocol - uses dark shading

mergeStatus = [

  // Beacon chain launch
  ["mergeA", true, {
    green: 100, // Green
    purple: 0, // Purple
    blue: 0,  // Blue
    red: 0  // Red
    // Add more sections as needed
    }
  ],

  // Warmup fork (Altair)
  ["mergeB", true, {
    green: 100, // Green
    purple: 0, // Purple
    blue: 0,  // Blue
    red: 0  // Red
    // Add more sections as needed
    }
  ],

  // Merge! No more PoW
  ["mergeC", false,
    100 // % complete 
  ],

 // Withdrawals
  ["mergeD", true, {
    green: 0, // Green
    purple: 100, // Purple
    blue: 0,  // Blue
    red: 0  // Red
    // Add more sections as needed
    }
  ],

  // Distributed validators
  ["mergeE", false,
    100 // % complete 
  ],

  // Secret leader election
  ["mergeF", true, {
    green: 60, // Green
    purple: 0, // Purple
    blue: 0,  // Blue
    red: 0  // Red
    // Add more sections as needed
    }
  ],

  // Per-slot participant selection
  ["mergeG", true, {
    green: 50, // Green
    purple: 0, // Purple
    blue: 0,  // Blue
    red: 0  // Red
    // Add more sections as needed
    }
  ],

  // SSF specification
  ["mergeH", true, {
    green: 35, // Green
    purple: 0, // Purple
    blue: 0,  // Blue
    red: 0  // Red
    // Add more sections as needed
    }
  ],

  // Implmentation
  ["mergeI", true, {
    green: 10, // Green
    purple: 15, // Purple
    blue: 0,  // Blue
    red: 5  // Red
    // Add more sections as needed
    }
  ],

  // Single slot finality (SSF)
  ["mergeJ", false,
    20 // % complete 
  ],

  // Increase validator count
  ["mergeK", true, {
    green: 0, // Green
    purple: 0, // Purple
    blue: 0,  // Blue
    red: 50  // Red
    }
  ],

  // Ideal quantum-safe signatures
  ["mergeL", false,
    20 // % complete
    // Add more sections as needed 
  ]
]

// Store to flash red on
yesRed = [] // [[ID: gradient], [ID: gradient] ... ] <--- FLASH on

// Store to flash red off 
noRed = [] // [[ID: gradient], [ID: gradient] ... ] <--- FLASH off

function progress(group) {
    for (step=0; step < group.length; step++) {
        ident = group[step][0]
        if (group[step][1] != false) {
            progGreen = group[step][2].green
            progPurple = group[step][2].purple
            progBlue = group[step][2].blue
            progRed = group[step][2].red
            progStart = 0
            progEnd = progGreen
            grad = `linear-gradient(90deg, ${progColor.green} ${progEnd}%, ` // Green
            progStart = progEnd
            progEnd += progPurple
            grad += `${progColor.purple} ${progStart}%, ${progColor.purple} ${progEnd}%, ` // Purple
            progStart = progEnd
            progEnd += progBlue
            grad += `${progColor.blue} ${progStart}%, ${progColor.blue} ${progEnd}%, ` // Blue
            progStart = progEnd
            if (progRed > 0) { // if progress includes red store a gradient without red in noRed <--- FLASH off
                noRed.push([ident, grad + `rgb(250 250 250 / 0%) ${progStart}%, rgb(250 250 250 / 0%) 100%)`])
            }
            progEnd += progRed
            grad += `${progColor.red} ${progStart}%, ${progColor.red} ${progEnd}%, ` // Red
            progStart = progEnd
            grad += `rgb(250 250 250 / 0%) ${progStart}%, rgb(250 250 250 / 0%) 100%)` // Remaing (transparent)
            if (progRed > 0) { // if progress includes red store a gradient with red in yesRed <--- FLASH on
                yesRed.push([ident, grad])
            }
            document.getElementById(ident).style.background = grad;
        }
        else {
            progStart = group[step][2]
            grad = `linear-gradient(90deg, #00000069 ${progStart}%, rgb(250 250 250 / 0%) ${progStart}%, rgb(250 250 250 / 0%) 100%)` // dark shading
            document.getElementById(ident).style.background = grad;
        }
    }
}


// call function on merge
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
