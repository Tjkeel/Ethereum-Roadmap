/**
 * Fetch 30 day ETH inflation rate from Firebase Functions
 */
import { makeFirebaseFetch } from "./fetch-from-firebase";

type Data = { annualIssue30d: number };

const { impl, mock } = makeFirebaseFetch<Data, number>(
  '/fetchEthStaked',
  'ETH staked data',
  (data) => data.annualIssue30d !== undefined,
  (data) => data.annualIssue30d * 100,
  .46,
);

export {
  impl as fetch30DayInflation,
  mock,
}
