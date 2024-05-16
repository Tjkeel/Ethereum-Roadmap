// Color definitions for visual progress indicators
const progColor = {
    green: '#99C66D',
    purple: '#AE80B1',
    blue: '#6A9BE7',
    red: 'rgb(250 250 250 / 0%)'  // Add more sections as needed (flash needs to be transparent)
    // flash color set in position.css - /*flash color*/
};


// true = Hard forks - uses color(s)
// false = TTD & extra protocol - uses dark shading
const statusList = [
    // Merge
    ["mergeA", true, { green: 100, purple: 0, blue: 0, red: 0 }], /*Beacon chain launch*/
    ["mergeB", true, { green: 100, purple: 0, blue: 0, red: 0 }], /*Warmup fork (Altair)*/
    ["mergeC", false, 100],                                       /*Merge! No more PoW*/
    ["mergeD", true, { green: 0, purple: 100, blue: 0, red: 0 }], /*Withdrawals*/
    ["mergeE", false, 100],                                       /*Distributed validators*/
    ["mergeF", true, { green: 60, purple: 0, blue: 0, red: 0 }],  /*Secret leader election*/
    ["mergeG", true, { green: 50, purple: 0, blue: 0, red: 0 }],  /*Per-slot participant selection*/
    ["mergeH", true, { green: 35, purple: 0, blue: 0, red: 0 }],  /*SSF specification*/
    ["mergeI", true, { green: 10, purple: 15, blue: 0, red: 5 }], /*Implmentation*/
    ["mergeJ", false, 20],                                        /*Single slot finality (SSF)*/
    ["mergeK", true, { green: 0, purple: 0, blue: 0, red: 50 }],  /*Increase validator count*/
    ["mergeL", false, 20],                                        /*Ideal quantum-safe signatures*/
    // Surge
    ["surgeA", true, { green: 66, purple: 0, blue: 0, red: 0 }],  /*Optimistic rollup fraud provers*/
    ["surgeB", true, { green: 55, purple: 0, blue: 0, red: 0 }],  /*ZK-EVMs*/
    ["surgeC", true, { green: 100, purple: 0, blue: 0, red: 0 }], /*EIP-4844 specification*/
    ["surgeD", true, { green: 95, purple: 0, blue: 0, red: 0 }],  /*EIP-4844 implementation*/
    ["surgeE", false, 100],                                       /*Basic rollup scaling*/
    ["surgeF", true, { green: 60, purple: 0, blue: 0, red: 0 }],  /*peerDAS*/
    ["surgeG", true, { green: 20, purple: 0, blue: 0, red: 0 }],  /*Efficient DA self-healing*/
    ["surgeH", false, 50],                                        /*Full rollup scaling*/
    ["surgeI", true, { green: 30, purple: 0, blue: 0, red: 0 }],  /*Improve cross-rollup standards + interop*/
    ["surgeJ", false, 20],                                        /*Q-sale, no-setup commitments*/
];


statusList.forEach(item => {
    const ident = item[0];
    const isHardFork = item[1];
    if (document.getElementById(ident)) {
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
    }
});

setTimeout(() => {
    statusList.forEach(step => {
        const ident = step[0];
        if (document.getElementById(ident)) {
            document.getElementById(step[0]).style.backgroundPosition = '0%'; // Animate at start to slide in
        }
    });
}, 100);





//Dividing the logic between graphic and description

document.addEventListener('DOMContentLoaded', function() {
    const sections = ['merge', 'surge', 'scourge', 'verge', 'purge', 'splurge'];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let currentSection = sections.find(section => document.getElementById(`${section}A`));
    let currentSteps = [];
    let currentIndex = 0;

    if (currentSection) {
        alphabet.split('').forEach(letter => {
            let stepId = `${currentSection}${letter}`;
            if (document.getElementById(stepId)) {
                currentSteps.push(stepId); // Store step IDs directly
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
        // Ensure all steps are marked inactive then mark the current step active
        currentSteps.forEach(id => {
            document.getElementById(id).classList.remove('active');
        });
        document.getElementById(stepId).classList.add('active');
        currentIndex = currentSteps.indexOf(stepId); // Update currentIndex
    }

    // Arrow navigation using delegated event handling on the document
    document.addEventListener('click', function(event) {
        if (event.target.matches('.left-arrow-pointer') || event.target.closest('.left-arrow-pointer')) {
            let prevIndex = (currentIndex - 1 + currentSteps.length) % currentSteps.length;
            showDescription(currentSteps[prevIndex]);
        } else if (event.target.matches('.right-arrow-pointer') || event.target.closest('.right-arrow-pointer')) {
            let nextIndex = (currentIndex + 1) % currentSteps.length;
            showDescription(currentSteps[nextIndex]);
        }
    });

    // Add swipe functionality
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;
    let yDown = null;

    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) { // Left swipe
                let nextIndex = (currentIndex + 1) % currentSteps.length;
                showDescription(currentSteps[nextIndex]);
            } else { // Right swipe
                let prevIndex = (currentIndex - 1 + currentSteps.length) % currentSteps.length;
                showDescription(currentSteps[prevIndex]);
            }
        }
        xDown = null; // Reset values
        yDown = null;
    }

    // Automatically display the first description for the detected section
    if (currentSection && currentSteps.length > 0) {
        showDescription(currentSteps[0]);
    }
});
