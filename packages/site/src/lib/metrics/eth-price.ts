const COINGECKO_URL = 
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

/**
 * Fetch the latest usd price of eth from coingecko.
 * 
 * @returns A promise for the eth price, rounded to the nearest whole unit.
 * @throws If the response was malformed or the fetch failed.
 */
export async function fetchEthPrice(): Promise<number> {
  return fetch(COINGECKO_URL)
    .then(response => response.json())
    .then(data => Math.round(data.ethereum.usd));
}
