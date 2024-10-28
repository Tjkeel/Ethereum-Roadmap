/**
 * Fetch the latest gas price from Firebase Functions.
 * 
 * @returns A promise for the gas price, rounded to the nearest whole unit.
 * @throws If the response was malformed or the fetch failed.
 */
export async function fetchGasPrice(): Promise<number> {
  return fetch('/fetchGasPrice')
    .then(response => response.json())
    .then(data => {
      if (!data || data.status !== "1" || data.message !== "OK" || !data.result) {
        throw new Error(`Failed to fetch gas price`, { cause: data });
      }
      return Math.round(data.result.SafeGasPrice);
    });
}

export const mock: typeof fetchGasPrice = async () => new Promise(
  (resolve) => setTimeout(() => resolve(15), 40)
);
