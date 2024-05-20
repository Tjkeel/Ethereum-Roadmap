//Dividing the logic between graphics and descriptions

document.addEventListener('DOMContentLoaded', function() {
    const sections = ['merge', 'surge', 'scourge', 'verge', 'purge', 'splurge'];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let currentSection = sections.find(section => document.getElementById(`${section}A`));
    let currentSteps = [];
    let currentIndex = 0;
    let autoAdvanceTimer;

    if (currentSection) {
        alphabet.split('').forEach(letter => {
            let stepId = `${currentSection}${letter}`;
            if (document.getElementById(stepId)) {
                currentSteps.push(stepId); // Store step IDs directly
                document.getElementById(stepId).addEventListener('click', () => {
                    currentIndex = currentSteps.indexOf(stepId);
                    showDescription(stepId);
                });
            }
        });
    }

    function showDescription(stepId) {
        let descId = `${stepId}-description`;
        document.querySelectorAll('.description-container').forEach(desc => {
            desc.style.display = 'none';
            desc.classList.remove('show');
        });
        const element = document.getElementById(descId);
        if (element) {
            element.style.display = 'block';
            setTimeout(() => element.classList.add('show'), 10);
        }
        currentSteps.forEach(id => {
            document.getElementById(id).classList.remove('active');
        });
        document.getElementById(stepId).classList.add('active');
        resetAutoAdvanceTimer();
    }

    function navigateDescription(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % currentSteps.length;
        } else {
            currentIndex = (currentIndex - 1 + currentSteps.length) % currentSteps.length;
        }
        showDescription(currentSteps[currentIndex]);
    }

    function resetAutoAdvanceTimer() {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = setInterval(() => {
            navigateDescription('next');
        },450000); // Auto-advance every 45 seconds
    }

    document.addEventListener('click', function(event) {
        if (event.target.matches('.left-arrow-pointer') || event.target.closest('.left-arrow-pointer')) {
            navigateDescription('prev');
        } else if (event.target.matches('.right-arrow-pointer') || event.target.closest('.right-arrow-pointer')) {
            navigateDescription('next');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            navigateDescription('next');
        } else if (event.key === 'ArrowLeft') {
            navigateDescription('prev');
        }
    });

    // Add swipe functionality
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;

    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        xDown = firstTouch.clientX;
    }

    function handleTouchMove(evt) {
        if (!xDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let xDiff = xDown - xUp;

        if (Math.abs(xDiff) > 0) {
            if (xDiff > 0) {
                navigateDescription('next');
            } else {
                navigateDescription('prev');
            }
        }
        xDown = null;
    }

    if (currentSection && currentSteps.length > 0) {
        showDescription(currentSteps[0]);
    }
});
