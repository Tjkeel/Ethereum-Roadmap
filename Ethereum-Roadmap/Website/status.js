// Color definitions for visual progress indicators
const progColor = {
    green: '#99C66D',
    purple: '#AE80B1',
    blue: '#6A9BE7',
    red: 'rgb(250 250 250 / 0%)'  // Add more sections as needed (flash needs to be transparent)
};

// true = Hard forks - uses color(s)
// false = TTD & extra protocol - uses dark shading
const mergeStatus = [
    ["mergeA", true, { green: 100, purple: 0, blue: 0, red: 0 }],
    ["mergeB", true, { green: 100, purple: 0, blue: 0, red: 0 }],
    ["mergeC", false, 100],
    ["mergeD", true, { green: 0, purple: 100, blue: 0, red: 0 }],
    ["mergeE", false, 100],
    ["mergeF", true, { green: 60, purple: 0, blue: 0, red: 0 }],
    ["mergeG", true, { green: 50, purple: 0, blue: 0, red: 0 }],
    ["mergeH", true, { green: 35, purple: 0, blue: 0, red: 0 }],
    ["mergeI", true, { green: 10, purple: 15, blue: 0, red: 5 }],
    ["mergeJ", false, 20],
    ["mergeK", true, { green: 0, purple: 0, blue: 0, red: 50 }],
    ["mergeL", false, 20]
];

function progress(group) {
    group.forEach(item => {
        const ident = item[0];
        const isHardFork = item[1];
        if (isHardFork) {
            let progStart = 0;
            let grad = 'linear-gradient(90deg, ';
            Object.entries(item[2]).forEach(([color, value], index, array) => {
                const progEnd = progStart + (value / 2);
                grad += `${progColor[color]} ${progStart}%, ${progColor[color]} ${progEnd}%`;
                progStart = progEnd;
                if (index !== array.length - 1) {
                    grad += ', ';
                }
            });
            grad += `, rgb(89 89 89) ${progStart}%, rgb(89 89 89) 100%)`;
            document.getElementById(ident).style.background = grad;
            document.getElementById(ident).style.backgroundSize = '200%';
            document.getElementById(ident).style.backgroundPosition = '100%';
            document.getElementById(ident).style.transition = "background-position 2s";
            document.getElementById(ident).style.animation = "fadeReds 3s ease infinite";
        } else {
            const progStart = item[2] / 2;
            const grad = `linear-gradient(90deg, #00000069 ${progStart}%, rgb(250 250 250 / 0%) ${progStart}%, rgb(250 250 250 / 0%) 100%)`;
            document.getElementById(ident).style.background = grad;
            document.getElementById(ident).style.backgroundSize = '200%';
            document.getElementById(ident).style.backgroundPosition = '100%';
            document.getElementById(ident).style.transition = "background-position 2s";
            document.getElementById(ident).classList.add("greyOut");
        }
    });

    setTimeout(() => {
        group.forEach(step => {
            document.getElementById(step[0]).style.backgroundPosition = '0%'; // Animate at start to slide in
        });
    }, 100);
}

// Call function on merge
if (document.getElementById('mergeA')) {
    progress(mergeStatus);
}

// Cache for description and step elements
let descriptionElements = document.querySelectorAll('.description-container');
let stepElements = {};
const sections = ['merge', 'surge', 'scourge', 'verge', 'purge', 'splurge'];
const steps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

sections.forEach(section => {
    steps.forEach(step => {
        const stepId = `${section}${step}`;
        const descId = `${stepId}-description`;
        stepElements[stepId] = document.getElementById(stepId);
        if (stepElements[stepId]) {
            stepElements[stepId].addEventListener('click', () => {
                // Hide all descriptions
                descriptionElements.forEach(desc => desc.style.display = 'none');
                // Show the clicked step's description
                const descElement = document.getElementById(descId);
                if (descElement) {
                    descElement.style.display = 'block';
                    descElement.classList.add('show');
                }
            });
        }
    });
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
        if (element) {
            element.style.display = 'block';
            setTimeout(() => { element.classList.add('show'); }, 10);
            updateActiveStep(id);
            resetAutoAdvanceTimer(); // Reset the auto-advance timer when a new description is shown
        }
    });
}

// Update the active step style
function updateActiveStep(activeDescriptionId) {
    // First, remove 'active' class from all steps to ensure only the current one is marked active
    Object.keys(stepElements).forEach(stepId => {
        if (stepElements[stepId]) stepElements[stepId].classList.remove('active');
    });
    // Then, add 'active' class only to the current step
    const activeStep = stepElements[activeDescriptionId.replace('-description', '')];
    if (activeStep) activeStep.classList.add('active');
}

// Function to navigate descriptions using arrows and swipe gestures
function navigateDescription(direction) {
    const indexList = Object.keys(stepElements);
    currentIndex = (currentIndex + (direction === 'next' ? 1 : -1) + indexList.length) % indexList.length;
    const descriptionId = `${indexList[currentIndex]}-description`;
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
    }, 30000); // Change description every 25 seconds
}

// Initialize and add event listeners
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        showDescription(`${sections[0]}A-description`);
        resetAutoAdvanceTimer(); // Start the auto-advance timer after initial display
    }, 500);

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
