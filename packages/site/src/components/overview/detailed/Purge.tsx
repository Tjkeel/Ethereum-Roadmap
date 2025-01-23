/*/
eliminateMostGasRefunds: 1,
eip4444Spec: 1,
eip4444Impl: 1,
beaconChainFastSync: 1,
p2pHistory: 1,
historyExpiry: 1,
banSelfDestruct: 1,
simplifyGasMechanics: 1,
evmPrecompilesImpl: 1,
addressSpaceExtension: 1,
stateExpiry: 1,
logReform: 1,
removeOldTransactionTypes: 1,
/*/

import { Path } from "../progress/Path";
import { ProgressBar } from "../progress/Progress";
import { OtherStep, Step } from "../progress/Step";
import { DefaultProgressView } from "../progress/view";

const PurgeBody = () => <>
  <div className="goalText"><b>Goal:</b> <b>simplify</b> the protocol, <b>eliminate technical
    debt</b> amd <b>limit costs</b> of participating in the network by
    clearing old history
  </div>
  <div id="ingap">.<br/>.</div>
  <Step id='A' modelId='eliminateMostGasRefunds'>
    Eliminate most <br/>gas refunds
  </Step>
  <OtherStep id='B' modelId='eip4444Spec'>
    EIP-4444 <br/>specification
  </OtherStep>
  <div className="arrowRight" id="purge1">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep id='C' modelId='eip4444Impl'>
    EIP-4444 <br/>implementation
  </OtherStep>
  <div className="lineH" id="purge2"></div>
  <div className="lineV" id="purge3"></div>
  <div className="lineH" id="purge4"></div>
  <div className="lineH" id="purge5"></div>
  <div className="lineV" id="purge6"></div>
  <Step id='D' modelId='beaconChainFastSync'>
    Beacon chain <br/>fast sync
  </Step>
  <div className="lineH" id="purge7"></div>
  <div className="lineV" id="purge8"></div>
  <div className="arrowRight" id="purge9">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <Step id='E' modelId='p2pHistory'>
    P2P history <br/>(eg. Portal)
  </Step>
  <div className="lineH" id="purge10"></div>
  <div className="lineV" id="purge11"></div>
  <div className="trackGroup" id="purgeTrackA"> 
    <div className="track" id="purgeTrackAText">EVM simplification track</div>
    <OtherStep id='G' modelId='banSelfDestruct'>
      Ban SELF- <br/>DESTRUCT
    </OtherStep>
    <OtherStep id='H' modelId='simplifyGasMechanics'>
      Simplify gas <br/>mechanics
    </OtherStep>
    <OtherStep id='I' modelId='evmPrecompilesImpl'>
      Precompiles <br/>EVM impls
    </OtherStep>
  </div>
  <div className="lineH hideLinks" id="purge16"></div>
  <div className="lineV hideLinks" id="purge17"></div>
  <OtherStep mile id='F' modelId='historyExpiry'>
    History <br/>expiry <br/>(EIP-4444)
  </OtherStep>
  <OtherStep id='J' modelId='addressSpaceExtension'>
    Address space <br/>extension
  </OtherStep>
  <div className="arrowRight" id="purge12">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep id='L' modelId='logReform'>
    LOG reform 
  </OtherStep>
  <OtherStep id='M' modelId='removeOldTransactionTypes'>
    Remove old tx <br/>types
  </OtherStep>
  <div className="arrowRight" id="purge13">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep id='K' modelId='stateExpiry'>
    State expiry 
  </OtherStep>
  <OtherStep id='N' modelId='serializationHarmonization'>
    Serialization <br/>harmonization
  </OtherStep>
  <div className="dashLineH hideLinks" id="purge14"></div>
  <div className="dashLineV hideLinks" id="purge15"></div>
</>

export const Purge = ({ detailed }: { detailed?: boolean }) =>
  <div className="rowGroup" style={{
    display: detailed ? 'grid' : 'none',
  }}>
    <a href="https://ethroadmap.com/purge.html" className="sectionLink">
      <div className="purge">
        <Path name="purge">
          <DefaultProgressView>          
            <i className='fas fa-broom inIcon'></i>
            <h2 className='sectionTitle hideLinks'>The Purge</h2>
            { detailed ? <PurgeBody/> : <></> }
            <ProgressBar detailed/>
          </DefaultProgressView>
        </Path>
      </div>
    </a>
  </div>;
  