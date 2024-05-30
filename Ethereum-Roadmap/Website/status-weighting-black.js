// Color definitions for visual progress indicators
const progColor = {
	teal: '#78D0DE',
    green: '#99C66D',
    purple: '#AE80B1',
    blue: '#6A9BE7',
    red: 'rgb(250 250 250 / 0%)'  // Add more sections as needed (flash needs to be transparent)
    // flash color set in position.css - /*flash color*/
};

const colorList = {
    teal: '#78D0DE',
    green: '#99C66D',
    purple: '#AE80B1',
    blue: '#6A9BE7',
    red: '#F1A196',
    black: 'rgb(30 28 28)'  
};

const forkList = {
    teal: 'Extra Protocol', // Teal
    green: 'Pre-Shapella', // Green
    purple: 'Shapella', // Purple
    blue: 'Dencun',  // Blue
    red: 'Pectra',  // Red
    black: 'On-Going Research'
}



// true = Hard forks - uses color(s)
// false = TTD & extra protocol - uses dark shading
const statusList = {
    merge: [
        ["mergeA", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1.2}],  // Beacon chain launch
        ["mergeB", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1}],    // Warmup fork (Altair)
        ["mergeC", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1.8}],  // Merge! No more PoW
        ["mergeD", true, { teal: 0, green: 0, purple: 100, blue: 0, red: 0 }, {weighting: 1}],    // Withdrawals
        ["mergeE", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],    // Distributed validators
        ["mergeF", false, 60, {weighting: 1}],                                                    // Secret leader election
        ["mergeG", false, 50, {weighting: 1.1}],                                                  // Per-slot participant selection
        ["mergeH", false, 50, {weighting: 1}],                                                    // SSF specification
        ["mergeI", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1.1}],    // Implmentation
        ["mergeJ", false, 20, {weighting: 1.1}],                                                  // Single slot finality (SSF)
        ["mergeK", true, { teal: 0, green: 0, purple: 0, blue: 10, red: 40 }, {weighting: 1.1}],  // Increase validator count
        ["mergeL", false, 20, {weighting: 1}],                                                    // Ideal quantum-safe signatures
    ],
    surge: [
        ["surgeA", true, { teal: 66.66, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],  // Optimistic rollup fraud provers
        ["surgeB", true, { teal: 66.66, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],  // ZK-EVMs
        ["surgeC", true, { teal: 0, green: 0, purple: 0, blue: 100, red: 0 }, {weighting: 1}],    // EIP-4844 specification
        ["surgeD", true, { teal: 0, green: 0, purple: 0, blue: 100, red: 0 }, {weighting: 1}],    // EIP-4844 implementation
        ["surgeE", true, { teal: 0, green: 0, purple: 0, blue: 100, red: 0 }, {weighting: 1}],    // Basic rollup scaling
        ["surgeF", false, 50, {weighting: 1}],                                                    // peerDAS
        ["surgeG", false, 20, {weighting: 1}],                                                    // Efficient DA self-healing
        ["surgeH", false, 50, {weighting: 1}],                                                    // Full rollup scaling
        ["surgeI", true, { teal: 30, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],     // Improve cross-rollup standards + interop
        ["surgeJ", false, 20, {weighting: 1}],                                                   // Q-sale, no-setup commitments
    ],
    scourge: [
        ["scourgeA", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],   // Extra-protocol MEV markets
        ["scourgeB", false, 50, {weighting: 1}],                                                   // Explore ePBS
        ["scourgeC", false, 80, {weighting: 1}],                                                   // Inclusion lists
        ["scourgeD", false, 20, {weighting: 1}],                                                   // Explore MEV burn in ePBS
        ["scourgeE", false, 20, {weighting: 1}],                                                   // Distributed block building
        ["scourgeF", false, 20, {weighting: 1}],                                                   // Exsplore execution tickets
        ["scourgeG", false, 50, {weighting: 1}],                                                   // Endgame block production <br>pipeline
        ["scourgeH", true, { teal: 20, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],    // App-layer MEV minimzation
        ["scourgeI", false, 20, {weighting: 1}],                                                   // Explore preconfimations
        ["scourgeJ", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 100 }, {weighting: 1}],   // Raise max effective balance
        ["scourgeK", true, { teal: 0, green: 0, purple: 10, blue: 10, red: 25 }, {weighting: 1}],  // Improve node operator usability
        ["scourgeL", false, 20, {weighting: 1}],                                                   // Explore total stake capping
        ["scourgeM", true, { teal: 20, green: 0, purple: 0, blue: 20, red: 20 }, {weighting: 1}],  // Explore solutions to liquid staking centralization
    ],
    verge: [
        ["vergeA", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1}], // Most serious EVM DoS issues solved
        ["vergeB", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1}], // Basic light client support (sync <br>committees)
        ["vergeC", false, 80, {weighting: 1}],                                                 // SNARK based light clients
        ["vergeD", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],   // SNARK for consensus state transition
        ["vergeE", false, 80, {weighting: 1}],                                                 // Verkle tree spec + impl
        ["vergeF", false, 50, {weighting: 1}],                                                 // Code chunking + gas cost updates
        ["vergeG", false, 80, {weighting: 1}],                                                 // Transition spec+ impl
        ["vergeH", false, 50, {weighting: 1}],                                                 // Verkle trees
        ["vergeI", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],   // SNARK for Verkle proofs
        ["vergeJ", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],   // SNARK for L1 EVM
        ["vergeK", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],   // Explore EVM verification precompile
        ["vergeL", false, 10, {weighting: 1}],                                                 // Fully SNARKed Ethereum
        ["vergeM", false, 10, {weighting: 1}],                                                 // Quantum-safe SNARKs (eg. <br>STARKs)
        ["vergeN", false, 20, {weighting: 1}],                                                 // SNARK / STARK ASICs
    ],
    purge: [
        ["purgeA", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1}],  // Eliminate most gas refunds
        ["purgeB", false, 100, {weighting: 1}],                                                 // EIP-4444 specification
        ["purgeC", false, 20, {weighting: 1}],                                                  // EIP-4444 implementation
        ["purgeD", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],  // Beacon chain fast sync
        ["purgeE", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}],  // P2P history (eg. Portal)
        ["purgeF", false, 50, {weighting: 1}],                                                  // History expiry (EIP-4444)
        ["purgeG", true, { teal: 0, green: 0, purple: 0, blue: 100, red: 0 }, {weighting: 1}],  // Ban SELF-DESTRUCT
        ["purgeH", false, 20, {weighting: 1}],                                                  // Simplify gas mechanics
        ["purgeI", false, 20, {weighting: 1}],                                                  // Precompiles EVM impls
        ["purgeJ", false, 30, {weighting: 1}],                                                  // Address space extension
        ["purgeK", false, 50, {weighting: 1}],                                                  // State expiry
        ["purgeL", false, 20, {weighting: 1}],                                                  // LOG reform
        ["purgeM", false, 20, {weighting: 1}],                                                  // Remove old tx types
        ["purgeN", false, 20, {weighting: 1}],                                                  // Serialization harmonization
    ],
    splurge: [
        ["splurgeA", true, { teal: 0, green: 100, purple: 0, blue: 0, red: 0 }, {weighting: 1}], // EIP-1559
        ["splurgeB", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}], // EIP-4337 specification
        ["splurgeC", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }, {weighting: 1}], // ERC-4337
        ["splurgeD", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 100 }, {weighting: 1}], // Voluntary EOA conversion
        ["splurgeE", true, { teal: 0, green: 0, purple: 0, blue: 0, red: 100 }, {weighting: 1}], // In-protocol enshrining
        ["splurgeF", false, 50, {weighting: 1}],                                                 // Endgame account abstraction
        ["splurgeG", false, 90, {weighting: 1}],                                                 // EOF
        ["splurgeH", false, 75, {weighting: 1}],                                                 // Big modular arithmetic
        ["splurgeI", true, { teal: 0, green: 20, purple: 0, blue: 20, red: 20 }, {weighting: 1}],// Further EVM improvements
        ["splurgeJ", false, 50, {weighting: 1}],                                                 // Endgame EVM
        ["splurgeK", false, 20, {weighting: 1}],                                                 // Endgame EIP-1559
        ["splurgeL", false, 10, {weighting: 1}],                                                 // Explore deep crypto (eg. <br>obfuscation)
        ["splurgeM", false, 10, {weighting: 1}],                                                 // Explore delay- encrypted
        ["splurgeN", false, 40, {weighting: 1}],                                                 // VDFs
    ]
};

Object.entries(statusList).forEach(([groupKey, group]) => {
    group.forEach(item => {
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
                const grad = `linear-gradient(90deg, rgb(0 0 0 / 0%) ${progStart}%, rgb(89 89 89) ${progStart}%, rgb(89 89 89) 100%)`;
                document.getElementById(ident).style.background = grad;
                document.getElementById(ident).style.backgroundSize = '200%';
                document.getElementById(ident).style.backgroundPosition = '100%';
                document.getElementById(ident).style.transition = "background-position 2s";
                document.getElementById(ident).classList.add("greyOut");
                document.getElementById(ident).style.animation = 'fadeBlack2 3s infinite';
            }
        }
    })
})

setTimeout(() => {
    Object.entries(statusList).forEach(([groupKey, group]) => {
        group.forEach(step => {
            const ident = step[0];
            if (document.getElementById(ident)) {
                document.getElementById(step[0]).style.backgroundPosition = '0%'; // Animate at start to slide in
            }
        });
    }, 100);
})



let progressBars = [];

Object.entries(statusList).forEach(([groupKey, group]) => {
    barName = groupKey + "-progress"
    if(document.getElementById(barName)) {
        let colors = ["teal", "green", "purple", "blue", "red"];
        let colorSums = {};
        let weightSum = 0
        let stepCount = 0

        // Initialize color sums
        colors.forEach(color => colorSums[color] = 0);
        colorSums["black"] = 0
        group.forEach(step => {
            if (step[1] === true && typeof step[2] === 'object') {
                weightSum += step[3].weighting
                stepCount += 1
                colors.forEach(color => {
                    if (step[2][color] !== undefined) {
                        colorSums[color] += step[2][color] * step[3]['weighting'];
                    };
                });
            } else if (step[1] === false) {
                weightSum += step[3].weighting
                stepCount += 1
                colorSums['black'] += step[2] * step[3]['weighting'];
            }
        });
        let wAvg = (weightSum / stepCount) * 100
        colorS = colors
        colorS.push("black")
        colorS.forEach(color => colorSums[color] /= stepCount)
        colorS.forEach(color => colorSums[color] /= wAvg);
        colorS.forEach(color => colorSums[color] *= 100);
        progressList = []
        colorS.forEach(coloR => {
            coloRWidth = colorSums[coloR]
            coloRcolor = colorList[coloR]
            colorRname = forkList[coloR]
            progressList.push({width: coloRWidth, color: coloRcolor, name: colorRname})
        })
        progressBars.push({barName: barName, progressList: progressList});
    };
});

window.onload = function() {
    progressBars.forEach(({barName, progressList}) => {
        setProgressBarW(barName, progressList);
    });
}



function setProgressBarW(progressBarId, sections) {
  // List of progress bars to update
  const progressBarIds = [progressBarId, progressBarId + '2'];

  progressBarIds.forEach(id => {
    const progressBar = document.getElementById(id);
    if (progressBar) {
      progressBar.innerHTML = ''; // Clear existing sections

      sections.forEach((section) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.style.width = `${section.width}%`;
        sectionDiv.style.height = '100%';
        sectionDiv.style.display = 'inline-block';
        sectionDiv.setAttribute("tips", section.name);
        sectionDiv.setAttribute("tips-col", section.color);

        // Check if this is the section that needs the flashing effect
        if (section.color === '#F1A196') {
          // Apply the animation to the Pectra color section
          sectionDiv.style.animation = 'fadeRed 3s infinite';
        } else if (section.color === 'rgb(30 28 28)') {
            // Apply the animation to the on-going research color section
          sectionDiv.style.animation = 'fadeBlack 3s infinite';
        } else {
          // Apply the standard background color for other sections
          sectionDiv.style.backgroundColor = section.color;
        }

        // Initially set width to 0% for the animation effect
        sectionDiv.style.width = '0%';
        progressBar.appendChild(sectionDiv);

        // Apply transition with a slight delay to ensure it's rendered
        setTimeout(() => {
          sectionDiv.style.transition = 'width 2s ease'; // Apply a transition to the width
          sectionDiv.style.width = `${section.width}%`; // Set to target width
        }, 100); // Slight delay to ensure rendering
      });
    }
  });
}

// Inject CSS for the fadeRed animation
function injectAnimationStyles() {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
    @keyframes fadeRed {
      0% { background-color: #F1A196; }
      50% { background-color: transparent; }
      100% { background-color: #F1A196; }
    }
  `;
  document.getElementsByTagName('head')[0].appendChild(style);
}

injectAnimationStyles();

// Hover tips for progress bar
function tips() {
  const elements = [...document.querySelectorAll('[tips]')]
  let i = 0; // Counter for unique class names
  for (const el of elements) {
    const tip = document.createElement('div')
    tip.classList.add('tooltipBar')
    tip.textContent = el.getAttribute('tips')
    tip.style.backgroundColor = el.getAttribute('tips-col')
    el.style.position = 'relative'
    tip.style.position = 'absolute'
    tip.style.left = 'calc(50% + 2px)' // + 2px for border...
    tip.style.transform = 'translateX(-50%)'
    tip.style.top = 'calc(100% + 11px)'
    el.appendChild(tip)

    // Create a unique class for this tooltip
    const uniqueClass = 'tooltipBar-' + i;
    tip.classList.add(uniqueClass);

    // Create a style element for the triangle
    const tipColorT = el.getAttribute('tips-col')
    const style = document.createElement('style')
    style.innerHTML = `
      .${uniqueClass}::before {
        border-bottom: 10px solid ${tipColorT};
      }
    `;
    document.head.appendChild(style);

    i++; // Increment the counter
  }
}

setTimeout(tips, 500)

