// Code for fetching percent restaked via Firebase Function
export async function fetchRestakedRatio() {
  return await fetch('/fetchRestakedRatio')
    .then((response) => response.json())
    .catch((cause) => {
      throw new Error('Error fetching restaked ratio', { cause });
    })
    .then((data) => {
      if (!data || !data.result || !data.result.rows || data.result.rows.length === 0) {
        throw new Error('Restaked data not found or unexpected data format', { cause: data });
      }
      return data.result.rows[0].restaked_ratio;
    });
}

export const mock: typeof fetchRestakedRatio = async () => new Promise(
  (resolve) => setTimeout(() => resolve(.1), 51)
);
