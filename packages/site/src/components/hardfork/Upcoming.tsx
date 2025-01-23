import { font100 } from '../shared/styles';
import { Countdown } from './Countdown';

export const HardforkUpcoming = () => <>
    
  <h1 style={ font100 }>Upcoming Hard Forks</h1>
  
  <div className="timeline-container">
    <h2 className="timeline-title" id="pectra sticky" style={ font100 }>Prague-Electra</h2>
    <Countdown target={new Date('2024-12-31')}/>
    <div className="flip-container-grid">
      <a href="https://eips.ethereum.org/EIPS/eip-2537" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">BLS12-381</div>
            <div className="back estimate-button2">EIP-2537</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-2935" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">Pre Verkle Spec</div>
            <div className="back estimate-button2">EIP-2935</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-6110" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">On-chain Deps</div>
            <div className="back estimate-button2">EIP-6110</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-7002" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">Triggerable Exits</div>
            <div className="back estimate-button2">EIP-7002</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-7251" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">Increase Max EB</div>
            <div className="back estimate-button2">EIP-7251</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-7549" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">Move Attests.</div>
            <div className="back estimate-button2">EIP-7549</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-7685" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">Exec. Layer Reqs.</div>
            <div className="back estimate-button2">EIP-7685</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-7594" target="_blank">
        <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-button2">PeerDAS</div>
          <div className="back estimate-button2">EIP-7594</div>
        </div>
      </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-7692" target="_blank">
        <div className="flip-container">
        <div className="flipper">
          <div className="front estimate-button2">EOF</div>
          <div className="back estimate-button2">EIP-7692</div>
        </div>
      </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-7702" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-button2">Account Abstr.</div>
            <div className="back estimate-button2">EIP-7702</div>
          </div>
        </div>
      </a>
    </div>

    <h2 className="timeline-title" style={ font100 }>Deployment</h2>
    <ul className="timeline" style={ font100 }>
      <li id="futureforks2" className="deployment-futurefork has-xmark">Devnets</li>
      <li id="futureforks2" className="deployment-futurefork has-xmark">Sepolia</li>
      <li id="futureforks2" className="deployment-futurefork has-xmark" >Holesky</li>
      <li id="futureforks2" className="deployment-futurefork has-xmark">Live</li>
    </ul>
    <br/>
  </div>  
      
  <div className="timeline-container">
    <h2 className="timeline-title" id="osaka sticky" style={ font100 }>Osaka-Fulu</h2>
    <Countdown target={new Date('2025-12-31')}/>
    <div className="flip-container-grid">
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">Verkle Trees</div>
            <div className="back estimate-buttonO">Maybe</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a> 
      <a href="" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonO">?</div>
            <div className="back estimate-buttonO">?</div>
          </div>
        </div>
      </a>
    </div>
    <h2 className="timeline-title" style={ font100 }>Deployment</h2>
    <ul className="timeline" style={ font100 }>
      <li id="futureforks2" className="deployment-futurefork has-xmark">Devnets</li>
      <li id="futureforks2" className="deployment-futurefork has-xmark">Sepolia</li>
      <li id="futureforks2" className="deployment-futurefork has-xmark" >Holesky</li>
      <li id="futureforks2" className="deployment-futurefork has-xmark">Live</li>
    </ul>
    <br/>
  </div>
</>