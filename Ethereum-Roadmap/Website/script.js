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

//Code for Eth Price in corner
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

// Code for fetching the latest gas price
async function fetchLatestGasPriceFromEtherscan() {
  const apiKey = 'EA1Z2KQWATY3EWKNUDZ39A9QCVWAAT5RFA'; // Etherscan API key
  // Using the 'gasoracle' action to get the recommended gas prices
  const url = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Accessing the 'SafeGasPrice' value from the response
    if (data && data.status === "1" && data.message === "OK" && data.result) {
      const gasPriceValue = data.result.SafeGasPrice; // Using 'SafeGasPrice' as an example
      // Display the 'SafeGasPrice' value directly without rounding as it's already in Gwei
      document.getElementById('gasPriceValue').textContent = `${gasPriceValue} Gwei`;
    } else {
      console.error('Failed to fetch latest gas price from Etherscan:', data);
      document.getElementById('gasPriceValue').textContent = 'Failed to load latest gas price.';
    }
  } catch (error) {
    console.error('Error fetching latest gas price from Etherscan:', error);
    document.getElementById('gasPriceValue').textContent = 'Error loading latest gas price.';
  }
}

// Call the function immediately to fetch the latest gas price
fetchLatestGasPriceFromEtherscan();

// Then set it to run every minute
setInterval(fetchLatestGasPriceFromEtherscan, 60000); // 60000 milliseconds = 1 minute

//Code for total ETH supply
async function fetchETHCirculatingSupply() {
  const queryId = '2256134';
  const apiKey = 'PKzYeXjqRjkuNFPnYO9deMCmTtf6MFUa';
  // Include the 'limit=1' parameter in the request URL
  const url = `https://api.dune.com/api/v1/query/${queryId}/results?limit=1`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-dune-api-key': apiKey,
      }
    });
    const data = await response.json();

    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const cirSupply = parseFloat(data.result.rows[0].cir_supply);
      const formattedCirSupply = (Math.round(cirSupply / 1e6 * 10) / 10).toFixed(1); // Round to nearest million with one decimal place
      document.getElementById('ETH-supply-value').textContent = `${formattedCirSupply}M ETH`;
    } else {
      console.error('Failed to fetch ETH Circulating Supply:', data);
      document.getElementById('ETH-supply-value').textContent = 'Failed to load ETH Supply.';
    }
  } catch (error) {
    console.error('Error fetching ETH Circulating Supply:', error);
    document.getElementById('ETH-supply-value').textContent = 'Error loading ETH Supply.';
  }
}

fetchETHCirculatingSupply();

//Code for ETH staked with latest query result
async function fetchLatestQueryResult() {
  const queryId = '1933048'; // Provided query ID
  const apiKey = 'PKzYeXjqRjkuNFPnYO9deMCmTtf6MFUa'; // Provided Dune Analytics API key
  const url = `https://api.dune.com/api/v1/query/${queryId}/results?limit=1`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-dune-api-key': apiKey,
      }
    });
    const data = await response.json();

    // Accessing the 'total_validators' value within the 'rows' array of the 'result' object
    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const totalValidatorsValue = data.result.rows[0].total_validators;
      // Round the 'total_validators' value to two decimal places
      const totalValidatorsFormatted = totalValidatorsValue.toFixed(2);
      document.getElementById('eth-staked').textContent = `${totalValidatorsFormatted}%`;
    } else {
      console.error('Failed to fetch latest query result:', data);
      document.getElementById('eth-staked').textContent = 'Failed to load latest query result.';
    }
  } catch (error) {
    console.error('Error fetching latest query result:', error);
    document.getElementById('eth-staked').textContent = 'Error loading latest query result.';
  }
}

fetchLatestQueryResult();

//Code for Lido Share percentage
async function fetchLidoShare() {
  const queryId = '1933075'; // Provided query ID
  const apiKey = 'PKzYeXjqRjkuNFPnYO9deMCmTtf6MFUa'; // Provided Dune Analytics API key
  const url = `https://api.dune.com/api/v1/query/${queryId}/results?limit=1`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-dune-api-key': apiKey,
      }
    });
    const data = await response.json();

    // Accessing the 'lido_percentage' value within the 'rows' array of the 'result' object
    if (data && data.result && data.result.rows && data.result.rows.length > 0) {
      const lidoPercentageValue = data.result.rows[0].lido_percentage;
      // Round the 'lido_percentage' value to the nearest whole number
      const lidoPercentageRounded = Math.round(lidoPercentageValue);
      // Include the icon after the percentage value
      document.getElementById('lido-share').innerHTML = `${lidoPercentageRounded}%`;
    } else {
      console.error('Failed to fetch latest query result:', data);
      document.getElementById('lido-share').textContent = 'Failed to load latest query result.';
    }
  } catch (error) {
    console.error('Error fetching latest query result:', error);
    document.getElementById('lido-share').textContent = 'Error loading latest query result.';
  }
}

fetchLidoShare();

//Code for entry queue
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

//Code for proposer slashes
async function fetchProposerSlashingsCount() {
  const queryId = '3428319';
  const apiKey = 'PKzYeXjqRjkuNFPnYO9deMCmTtf6MFUa';
  const url = `https://api.dune.com/api/v1/query/${queryId}/results`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-dune-api-key': apiKey,
      }
    });
    const data = await response.json();

    // Check if the data is in the expected format
    if (data && data.result && data.result.rows) {
      // Find the object for "Proposer Slashings"
      const proposerSlashings = data.result.rows.find(row => row.type === "Proposer Slashings");
      if (proposerSlashings) {
        // Update the HTML element with the count
        document.getElementById('slashed').textContent = proposerSlashings.count;
      } else {
        console.error('Proposer Slashings data not found');
        document.getElementById('slashed').textContent = 'Data not available';
      }
    } else {
      console.error('Unexpected data format:', data);
      document.getElementById('slashed').textContent = 'Failed to load data.';
    }
  } catch (error) {
    console.error('Error fetching Proposer Slashings count:', error);
    document.getElementById('slashed').textContent = 'Error loading data.';
  }
}

fetchProposerSlashingsCount();

//Consensus APR
async function fetchConsensusLayerAPR() {
  const queryId = '2256134';
  const apiKey = 'PKzYeXjqRjkuNFPnYO9deMCmTtf6MFUa';
  // Include the 'limit=1' parameter in the request URL
  const url = `https://api.dune.com/api/v1/query/${queryId}/results?limit=1`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-dune-api-key': apiKey,
      }
    });
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

fetchConsensusLayerAPR();

setInterval(() => {
  const calcboxflipContainer = document.querySelector('.calcboxflip-container');
  calcboxflipContainer.classList.toggle('flip');
}, 5000); // 5000 milliseconds = 5 seconds