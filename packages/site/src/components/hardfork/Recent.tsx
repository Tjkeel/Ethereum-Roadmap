import { colorWhite, font100 } from "../shared/styles";
import { Countdown } from "./Countdown";

export const HardforkRecent = () => <>
  <h1 style={ font100 }>Recent Hard Forks</h1>

  <div className="timeline-container">
    
    <h2 className="timeline-title" id="dencun sticky" style={ font100 }>Cancun-Deneb</h2>
    <Countdown target={new Date('2024-03-13')}/>
    
    <div className="flip-container-grid">
      <a href="https://eips.ethereum.org/EIPS/eip-1153" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">Transient Storage</div>
            <div className="back estimate-buttonK">EIP-1153</div>
          </div>
        </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-4788" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">Beacon Root EVM</div>
            <div className="back estimate-buttonK">EIP-4788</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-4844" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">Blobs</div>
            <div className="back estimate-buttonK">EIP-4844</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-5656" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">MCOPY</div>
            <div className="back estimate-buttonK">EIP-5656</div>
          </div>
        </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-6780" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">Fix SELFDESTR.</div>
            <div className="back estimate-buttonK">EIP-6780</div>
          </div>
      </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-7044" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">Perp Valid Exits</div>
            <div className="back estimate-buttonK">EIP-7044</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-7045" target="_blank">
          <div className="flip-container">
            <div className="flipper">
              <div className="front estimate-buttonK">Incr Att Incl Slot</div>
              <div className="back estimate-buttonK">EIP-7045</div>
            </div>
          </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-7514" target="_blank">   
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">Cap Churn Limit</div>
            <div className="back estimate-buttonK">EIP-7514</div>
          </div>
        </div>
      </a>
      <a href="https://eips.ethereum.org/EIPS/eip-7516" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonK">BLOBBASEFEE</div>
            <div className="back estimate-buttonK">EIP-7516</div>
          </div>
        </div>
      </a> 
    </div>
    <h2 className="timeline-title" style={ font100 }>Deployment</h2>
    <ul className="timeline" style={ font100 }>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Devnets</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Goerli</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Sepolia</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark" >Holesky</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Live</li>
    </ul>
    <br/>
    <h2 className="timeline-title" style={ font100 }>Explainer Series</h2>
    <p>
      <a href="https://consensys.io/blog/ethereum-dencun-upgrade-explained-part-1" target="_blank"  style={ colorWhite } >Part I</a>,
      <a href="https://consensys.io/blog/ethereum-evolved-dencun-upgrade-part-2-eip-7044-eip-7045" target="_blank"  style={ colorWhite } >Part II</a>,  
      <a href="https://consensys.io/blog/ethereum-evolved-dencun-upgrade-part-3-eip-4788" target="_blank"  style={ colorWhite } >Part III</a>, 
      <a href="https://consensys.io/blog/ethereum-evolved-dencun-upgrade-part-4-eip-7514-and-eip-1153" target="_blank"  style={ colorWhite } >Part IV</a>,  
      <a href="https://consensys.io/blog/ethereum-evolved-dencun-upgrade-part-5-eip-4844" target="_blank"  style={ colorWhite } >Part V</a>
    </p>
    <br/>
  </div>

  <div className="timeline-container">

    <h2 className="timeline-title" id="shapella sticky" style={ font100 }>Shanghai-Capella</h2>
    <Countdown target={new Date('2023-04-12')}/>
    
    <div className="flip-container-grid">
      <a href="https://eips.ethereum.org/EIPS/eip-3651" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonS">Warm COINBASE</div>
            <div className="back estimate-buttonS">EIP-3651</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-3855" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonS">PUSH0</div>
            <div className="back estimate-buttonS">EIP-3855</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-3860" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonS">Limit initcode</div>
            <div className="back estimate-buttonS">EIP-3860</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-4895" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonS">Withdrawals</div>
            <div className="back estimate-buttonS">EIP-4895</div>
          </div>
        </div>
      </a> 
      <a href="https://eips.ethereum.org/EIPS/eip-6049" target="_blank">
        <div className="flip-container">
          <div className="flipper">
            <div className="front estimate-buttonS">Warn SELFDESTR.</div>
            <div className="back estimate-buttonS">EIP-6049</div>
          </div>
        </div>
      </a>
    </div>

    <h2 className="timeline-title" style={ font100 }>Deployment</h2>
    <ul className="timeline" style={ font100 }>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Devnets</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Sepolia</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark" >Goerli</li>
      <li id="futureforks2" className="deployment-futurefork has-checkmark">Live</li>
    </ul>
    <br/>
  </div>
</>