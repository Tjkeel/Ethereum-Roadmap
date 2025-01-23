import { Path } from "../progress/Path";
import { ProgressBar } from "../progress/Progress";
import { OtherStep, Step } from "../progress/Step";
import { DefaultProgressView } from "../progress/view";

const SplurgeBody = () => <>
  <div className="goalText"><b>Goal:</b> fix <b>everything else</b></div>
  <div id="ingap">.<br/>.<br/>.<br/>.<br/></div>
  <Step id='A' modelId='eip1559'>
    EIP-1559
  </Step>
  <div className="arrowRight" id="splurge1">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <div id="splurgeBB">
    <Step id='B' modelId='eip4337Spec'>
      EIP-4337 <br/>specification
    </Step>
  </div>
  <div className="arrowRight" id="splurge2">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <div className="trackGroup" id="splurgeTrackA">
    <div className="track" id="splurgeTrackAText">Account abstraction track</div>
    <Step id='C' modelId='erc4337'>
      ERC-4337
    </Step>
    <div className="arrowRight" id="splurge3">
      <div className="lineH"></div>
      <img className="arrowR" src="assets/arrow.png" />
    </div>
    <Step id='D' modelId='voluntaryEoaConversion'>
      Voluntary <br/>EOA <br/>conversion
    </Step>
    <div className="arrowRight" id="splurge4">
      <div className="lineH"></div>
      <img className="arrowR" src="assets/arrow.png" />
    </div>
    <Step id='E' modelId='inProtocolEnshrining'>
      In-protocol <br/>enshrining
    </Step>
  </div>
  <div className="trackGroup" id="splurgeTrackB">
    <div className="track" id="splurgeTrackBText">EVM improvements track</div>
    <OtherStep id='G' modelId='ethereumObjectFormat'>
      EOF
    </OtherStep>
    <OtherStep id='H' modelId='bigModularArithmetic'>
      Big modular <br/>arithmetic
    </OtherStep>
    <Step id='I' modelId='furtherEvmImprovements'>
      Further EVM <br/>improvements
    </Step>
  </div>
  <div className="arrowRight" id="splurge5">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <div className="arrowRight" id="splurge6">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep mile id='J' modelId='endgameEvm'>
    Endgame <br/>EVM
  </OtherStep>
  <OtherStep id='K' modelId='endgameEip1559'>
    Endgame <br/>EIP-1559
  </OtherStep>
  <OtherStep mile id='F' modelId='endgameAccountAbstraction'>
    Endgame <br/>account <br/>abstraction
  </OtherStep>
  <OtherStep id='L' modelId='exploreDeepCrypto'>
    Explore deep <br/>crypto (eg. <br/>obfuscation)
  </OtherStep>
  <OtherStep id='M' modelId='exploreDelayEncrypted'>
    Explore delay- <br/>encrypted
  </OtherStep>
  <OtherStep id='N' modelId='verifiableDelayFunctions'>
    VDFs
  </OtherStep>
  <div className="arrowDown hideLinks" id="splurge7">
    <div className="lineV"></div>
    <img className="arrowD" src="assets/arrow.png" />
  </div>
</>

export const Splurge = ({ detailed }: { detailed?: boolean }) =>
  <div className="rowGroup" style={{
    display: detailed ? 'grid' : 'none',
  }}>
    <a href="https://ethroadmap.com/splurge.html" className="sectionLink">
      <div className="splurge">
        <Path name="splurge">
          <DefaultProgressView>          
            <i className='fas fa-hat-wizard inIcon'></i>
            <h2 className='sectionTitle hideLinks'>The Splurge</h2>
            { detailed ? <SplurgeBody/> : <></> }
            <ProgressBar detailed/>
          </DefaultProgressView>
        </Path>
      </div>
    </a>
  </div>; 
