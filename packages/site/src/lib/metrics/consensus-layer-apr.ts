
// Code for fetching Consensus APR via Firebase Function
export async function fetchConsensusLayerAPR() {
  return await fetch('/fetchConsensusAPR')
    .then((response) => response.json())
    .catch((cause) => {
      throw new Error('Error fetching Consensus Layer APR', { cause });
    })
    .then((data) => {
      if (!data || !data.result || !data.result.rows || data.result.rows.length === 0) {
        throw new Error('Failed to fetch Consensus Layer APR', { cause: data });
      }
      return data.result.rows[0].consensus_apr_percent;
    });
}
