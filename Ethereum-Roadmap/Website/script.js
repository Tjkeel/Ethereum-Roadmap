window.onload = function() {
  setProgressBar('merge-progress', [
    { width: 50, color: '#99C66D' }, // Green
    { width: 20, color: '#AE80B1' }, // Purple
    { width: 5, color: '#6A9BE7' },  // Blue
    { width: 5, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('surge-progress', [
    { width: 10, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 65, color: '#6A9BE7' }, // Blue
    { width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('scourge-progress', [
    { width: 15, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 0, color: '#6A9BE7' },  // Blue
	{ width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('verge-progress', [
    { width: 15, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 0, color: '#6A9BE7' },  // Blue
    { width: 5, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('purge-progress', [
    { width: 20, color: '#99C66D' }, // Green
    { width: 5, color: '#AE80B1' },  // Purple
    { width: 5, color: '#6A9BE7' },  // Blue
    { width: 0, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);

  setProgressBar('splurge-progress', [
    { width: 30, color: '#99C66D' }, // Green
    { width: 0, color: '#AE80B1' },  // Purple
    { width: 0, color: '#6A9BE7' },  // Blue
    { width: 30, color: '#F1A196' },  // Red
    // Add more sections as needed
  ]);
};

// Combined setProgressBar function
function setProgressBar(progressBarId, sections) {
  const progressBar = document.getElementById(progressBarId);
  if (progressBar) {
    progressBar.innerHTML = ''; // Clear existing sections

    sections.forEach((section) => {
      const sectionDiv = document.createElement('div');
      sectionDiv.style.width = `${section.width}%`;
      sectionDiv.style.height = '100%';
      sectionDiv.style.display = 'inline-block';

      // Check if this is the section that needs the flashing effect
      if (section.color === '#F1A196') {
        // Apply the animation to the Pectra color section
        sectionDiv.style.animation = 'fadeRed 3s infinite';
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

//Make Pectra color in progress bar flash transparent setup
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


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("roadmapImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Update the countdown every second for Shanghai-Capella
setInterval(updateCountdown3, 1000);

function updateCountdown3() {
  const callDate = new Date('2023-04-12');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.abs(Math.floor((diff % (1000 * 60)) / 1000));

  // Update the countdown display
  document.getElementById('days3').textContent = days;
  document.getElementById('hours3').textContent = hours;
  document.getElementById('minutes3').textContent = minutes;
  document.getElementById('seconds3').textContent = seconds;
}


// Update the countdown every second for Cancun-Deneb
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const callDate = new Date('2024-03-13T13:55:35Z');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second for Prague-Electra
setInterval(updateCountdown2, 1000);

function updateCountdown2() {
  const callDate = new Date('2024-12-31');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days2').textContent = days;
  document.getElementById('hours2').textContent = hours;
  document.getElementById('minutes2').textContent = minutes;
  document.getElementById('seconds2').textContent = seconds;
}

// Update the countdown every second for Osaka-F(unkown)
setInterval(updateCountdown4, 1000);

function updateCountdown4() {
  const callDate = new Date('2025-12-31');
  const now = new Date();
  const diff = callDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days4').textContent = days;
  document.getElementById('hours4').textContent = hours;
  document.getElementById('minutes4').textContent = minutes;
  document.getElementById('seconds4').textContent = seconds;
}


//Code for Modals within each of the six development paths
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const lastUpdated = document.getElementById('last-updated');
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    lastUpdated.textContent = formattedDate;
});

//Code for Eth Price in corner NO API Key
function fetchEthPrice() {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      const ethPrice = data.ethereum.usd;
      const priceElement = document.getElementById('eth-price');
      priceElement.textContent = `$${Math.round(ethPrice)}`;
    })
    .catch(error => console.error('Error fetching ETH price:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  fetchEthPrice(); // Initial fetch when the document is loaded
  setInterval(fetchEthPrice, 60000); // Refresh every minute
});

// Code for fetching the latest gas price from Firebase Functions
async function fetchLatestGasPriceFromFirebase() {
  try {
    const response = await fetch('/fetchGasPrice');
    const data = await response.json();

    if (data && data.status === "1" && data.message === "OK" && data.result) {
      const gasPriceValue = data.result.SafeGasPrice;
      document.getElementById('gasPriceValue').textContent = `${gasPriceValue} Gwei`;
    } else {
      console.error('Failed to fetch latest gas price:', data);
      document.getElementById('gasPriceValue').textContent = 'Failed to load latest gas price.';
    }
  } catch (error) {
    console.error('Error fetching latest gas price:', error);
    document.getElementById('gasPriceValue').textContent = 'Error loading latest gas price.';
  }
}

// Call the function immediately to fetch the latest gas price
fetchLatestGasPriceFromFirebase();
setInterval(fetchLatestGasPriceFromFirebase, 60000);

// Code for fetching total inflation from Firebase Functions
async function fetch30DayInflationFromFirebase() {
  try {
    const response = await fetch('/fetch30DayInflation');
    const data = await response.json();
    console.log("Front-end received data:", data); // Log data received by the front-end

    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const annualIssue30d = data.result.rows[0].annual_issue_30d;  // Ensure this matches the actual API response
      const annualIssue30dFormatted = (annualIssue30d * 100).toFixed(2);
      document.getElementById('30DayInflation').textContent = `${annualIssue30dFormatted}%`;
    } else {
      console.error('Failed to fetch 30-day inflation:', data);
      document.getElementById('30DayInflation').textContent = 'Data not available';
    }
  } catch (error) {
    console.error('Error fetching 30-day inflation:', error);
    document.getElementById('30DayInflation').textContent = 'Error loading data.';
  }
}

fetch30DayInflationFromFirebase();


// Code for fetching ETH staked information from Firebase Functions
async function fetchEthStakedFromFirebase() {
  try {
    const response = await fetch('/fetchEthStaked');
    const data = await response.json();

    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const totalValidatorsValue = data.result.rows[0].total_validators;
      const totalValidatorsFormatted = Math.round(totalValidatorsValue);
      document.getElementById('eth-staked').textContent = `${totalValidatorsFormatted}%`;
    } else {
      console.error('Failed to fetch ETH staked data:', data);
      document.getElementById('eth-staked').textContent = 'Failed to load data.';
    }
  } catch (error) {
    console.error('Error fetching ETH staked data:', error);
    document.getElementById('eth-staked').textContent = 'Error loading data.';
  }
}

fetchEthStakedFromFirebase();

// Code for fetching Lido Share percentage from Firebase Functions
async function fetchLidoShareFromFirebase() {
  try {
    const response = await fetch('/fetchLidoShare');
    const data = await response.json();

    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const lidoPercentageValue = data.result.rows[0].lido_percentage;
      const lidoPercentageRounded = Math.round(lidoPercentageValue);
      document.getElementById('lido-share').innerHTML = `${lidoPercentageRounded}%`;
    } else {
      console.error('Failed to fetch Lido share data:', data);
      document.getElementById('lido-share').textContent = 'Failed to load data.';
    }
  } catch (error) {
    console.error('Error fetching Lido share data:', error);
    document.getElementById('lido-share').textContent = 'Error loading data.';
  }
}

fetchLidoShareFromFirebase();

// Code for fetching percent restaked via Firebase Function
async function fetchRestakedRatioFromFirebase() {
  try {
    const response = await fetch('/fetchRestakedRatio');
    const data = await response.json();

    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const restakedRatio = data.result.rows[0].restaked_ratio;
      const restakedPercent = Math.round(restakedRatio * 100);
      document.getElementById('restaked').textContent = `${restakedPercent}%`;
    } else {
      console.error('Restaked data not found or unexpected data format:', data);
      document.getElementById('restaked').textContent = 'Data not available';
    }
  } catch (error) {
    console.error('Error fetching restaked ratio:', error);
    document.getElementById('restaked').textContent = 'Error loading data.';
  }
}

fetchRestakedRatioFromFirebase(); // Call the function to execute the fetch and update

// Code for fetching Consensus APR via Firebase Function
async function fetchConsensusLayerAPRFromFirebase() {
  try {
    const response = await fetch('/fetchConsensusAPR');
    const data = await response.json();

    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const consensusAprPercent = parseFloat(data.result.rows[0].consensus_apr_percent).toFixed(2);
      document.getElementById('APR').textContent = `${consensusAprPercent}%`;
    } else {
      console.error('Failed to fetch Consensus Layer APR:', data);
      document.getElementById('APR').textContent = 'Failed to load APR.';
    }
  } catch (error) {
    console.error('Error fetching Consensus Layer APR:', error);
    document.getElementById('APR').textContent = 'Error loading APR.';
  }
}

fetchConsensusLayerAPRFromFirebase();

// Set an interval for periodic flipping of a container element as a separate behavior
setInterval(() => {
  const calcboxflipContainer = document.querySelector('.calcboxflip-container');
  calcboxflipContainer.classList.toggle('flip');
}, 5000); // 5000 milliseconds = 5 seconds

//Code for entry queue NO API Key
async function fetchEnteringValidatorQueue() {
  const url = `https://beaconcha.in/api/v1/validators/queue`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK" && data.data) {
      const enteringValidators = data.data.beaconchain_entering;
      // Round to the nearest thousand and append 'K Validators'
      const roundedEnteringValidators = Math.round(enteringValidators / 1000) + 'K Validators';
      document.getElementById('validator-queue').textContent = roundedEnteringValidators;
    } else {
      console.error('Failed to fetch entering validator queue:', data);
      document.getElementById('validator-queue').textContent = 'Failed to load entering validator queue.';
    }
  } catch (error) {
    console.error('Error fetching entering validator queue:', error);
    document.getElementById('validator-queue').textContent = 'Error loading entering validator queue.';
  }
}

fetchEnteringValidatorQueue();