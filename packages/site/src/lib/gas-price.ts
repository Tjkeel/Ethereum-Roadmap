/**
 * Fetch the latest gas price from Firebase Functions.
 * 
 * @returns A promise for the gas price, rounded to the nearest whole unit.
 * @throws If the response was malformed or the fetch failed.
 */
export async function fetchGasPrice(): Promise<number> {
  return fetch('https://api.blocknative.com/gasprices/blockprices?chainid=1')
    .then(response => response.json())
    .then(data => {
      if (!data || !data.blockPrices || data.blockPrices.length < 1 || !data.blockPrices[0].baseFeePerGas) {
        throw new Error(`Failed to fetch gas price`, { cause: data });
      }
      return Math.round(data.blockPrices[0].baseFeePerGas);
    });
}

export const mock: typeof fetchGasPrice = async () => new Promise(
  (resolve) => setTimeout(() => resolve(15), 40)
);
