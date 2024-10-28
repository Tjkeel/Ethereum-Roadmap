// Code for fetching Lido Share percentage from Firebase Functions
export async function fetchLidoShare() {
  return await fetch('/fetchLidoShare')
    .then((response) => response.json())
    .catch((cause) => {
      throw new Error('Error fetching Lido share data', { cause });
    })
    .then((data) => {
      if (!data || !data.result || !data.result.rows || data.result.rows.length === 0) {
        throw new Error('Error fetching Lido share data', { cause: data });
      }
      return data.result.rows[0].lido_percentage;
    });
}

export const mock: typeof fetchLidoShare = async () => new Promise(
  (resolve) => setTimeout(() => resolve(28), 51)
);
