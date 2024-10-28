import { PropsWithChildren } from "react";
import { Arrow } from "./Arrow";

const Finished = ({ path, children}: PropsWithChildren<{ path: string }>) => <>
  <a
    href={`https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/${path}.md`}
    target="_blank">
      <li>{children}</li>
  </a>
  <Arrow />
</>

const Ongoing = ({ id, sticky, last, children}: PropsWithChildren<{ id: string, sticky: string, last?: boolean }>) => <>
  <a href={`#${sticky} sticky`}><li id={id}>{children}</li></a>
  {last ? <></> : <Arrow/>}
</>

export const ExecutionGraphic = () =>
  <ul className="timeline" style={{fontWeight: 100}}>
    <Finished path="homestead">Homestead</Finished>
    <Finished path="dao-fork">DAO Fork</Finished>
    <Finished path="tangerine-whistle">Tangerine Whistle</Finished>
    <Finished path="spurious-dragon">Spurious Dragon</Finished>
    <Finished path="byzantium">Byzantium</Finished>
    <Finished path="constantinople">Constantinople</Finished>
    <Finished path="berlin">Berlin</Finished>
    <Finished path="london">London</Finished>
    <Ongoing id="shanghai" sticky="shapella">Shanghai</Ongoing>
    <Ongoing id="cancun" sticky="dencun">Cancun</Ongoing>
    <Ongoing id="prague" sticky="pectra">Prague</Ongoing>
    <Ongoing id="osaka" sticky="osaka" last>Osaka</Ongoing>
  </ul>
