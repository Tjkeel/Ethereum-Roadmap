const BEACONCHAIN_URL = `https://beaconcha.in/api/v1/validators/queue`;

//Code for entry queue NO API Key
export async function fetchEnteringValidatorQueue() {
  return await fetch(BEACONCHAIN_URL)
    .then((response) => response.json())
    .catch((cause) => {
      throw new Error('Error fetching entering validator queue:', { cause });
    })
    .then((data) => {
      if (data.status !== "OK" || !data.data) {
        throw new Error('Failed to load entering validator queue.', { cause: data });
      }
      return data.data.beaconchain_entering;
    });
}
