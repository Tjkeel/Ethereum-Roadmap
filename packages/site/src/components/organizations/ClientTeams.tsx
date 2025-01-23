import { font100 } from "../shared/styles";

export const ClientTeams = () => <>
  <h2 className="timeline-title" id="shapella sticky" style={ font100 }>Client Teams</h2>
  <div className="flip-container-grid">
    <a href="https://geth.ethereum.org/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Geth</div>
          <div className="back estimate-buttonT">Execution Layer</div>
        </div>
      </div>
    </a> 
    <a href="https://www.nethermind.io/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Nethermind</div>
          <div className="back estimate-buttonT">Execution Layer</div>
        </div>
      </div>
    </a> 
    <a href="https://besu.hyperledger.org/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Besu</div>
          <div className="back estimate-buttonT">Execution Layer</div>
        </div>
      </div>
    </a>
    <a href="https://erigon.tech/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Erigon</div>
          <div className="back estimate-buttonT">Execution Layer</div>
        </div>
      </div>
    </a> 
    <a href="https://www.paradigm.xyz/2022/12/reth" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Reth</div>
          <div className="back estimate-buttonT">Execution Layer</div>
        </div>
      </div>
    </a>
    <a href="https://prysmaticlabs.com/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Prysm</div>
          <div className="back estimate-buttonT">Consensus Layer</div>
        </div>
      </div>
    </a> 
    <a href="https://lighthouse.sigmaprime.io/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Lighthouse</div>
          <div className="back estimate-buttonT">Consensus Layer</div>
        </div>
      </div>
    </a> 
    <a href="https://consensys.io/teku" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Teku</div>
          <div className="back estimate-buttonT">Consensus Layer</div>
        </div>
      </div>
    </a> 
    <a href="https://nimbus.team/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Nimbus</div>
          <div className="back estimate-buttonT">Consensus Layer</div>
        </div>
    </div>
    </a> 
    <a href="https://lodestar.chainsafe.io/" target="_blank">
      <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-buttonT">Lodestar</div>
          <div className="back estimate-buttonT">Consensus Layer</div>
        </div>
      </div>
    </a>
  </div>
</>;
