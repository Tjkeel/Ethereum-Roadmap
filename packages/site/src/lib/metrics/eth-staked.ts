/**
 * Fetch ETH staked information from Firebase Functions
 */
import { makeFirebaseFetch } from "./fetch-from-firebase";

type Data = { result?: { rows: { total_validators: number }[] } };

const { impl, mock } = makeFirebaseFetch<Data, number>(
  '/fetchEthStaked',
  'ETH staked data',
  (data) => (data.result?.rows && data.result.rows.length > 0) as boolean,
  (data) => Math.round(data.result?.rows[0].total_validators as number),
  51,
);

export {
  impl as fetchEthStaked,
  mock,
}
