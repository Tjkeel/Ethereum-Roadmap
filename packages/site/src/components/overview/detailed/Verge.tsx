import { Path } from "../progress/Path";
import { ProgressBar } from "../progress/Progress";
import { OtherStep, Step } from "../progress/Step";
import { DefaultProgressView } from "../progress/view";

const VergeBody = () => <>
  <div className="goalText"><b>Goal:</b> <b>verifying</b> blocks should be super easy - download
    N bytes of data, perform a few basic computations, verify
    a SNARK and you're done
  </div>
  <div id="ingap">.<br/>.<br/>.</div>
  <Step id='A' modelId='evmDos'>
    Most serious <br/>EVM DoS <br/>issues solved
  </Step>
  <Step id='B' modelId='basicLightClientSupport'>
    Basic light <br/>client support <br/>(sync <br/>committees)
  </Step>
  <div className="arrowRight" id="verge1">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep id='E' modelId='verkleTreeSpecAndImpl'>
    Verkle tree <br/>spec + impl
  </OtherStep>
  <div className="arrowRight" id="verge2">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep id='C' modelId='snarkLightClients'>
    SNARK based <br/>light clients
  </OtherStep>
  <div className="lineH" id="verge3"></div>
  <div className="lineV" id="verge4"></div>
  <div className="lineH" id="verge5"></div>
  <div className="lineV" id="verge6"></div>
  <div className="arrowRight" id="verge7">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <div className="arrowDown" id="verge8">
    <div className="lineV"></div>
    <img className="arrowD" src="assets/arrow.png" />
  </div>
  <div className="arrowUp" id="verge9">
    <img className="arrowU" src="assets/arrow.png" />
    <div className="lineV"></div>
  </div>
  <OtherStep id='F' modelId='codeChunkingAndGasCostUpdates'>
    Code chunking + gas cost updates
  </OtherStep>
  <OtherStep id='H' modelId='verkleTrees'>
    Verkle <br/>trees
  </OtherStep> 
  <div className="arrowRight" id="verge10">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep id='G' modelId='transitionSpecAndImpl'>
    Transition spec <br/>+ impl
  </OtherStep>
  <Step id='J' modelId='snarkL1Evm'>
    SNARK for L1 <br/>EVM
  </Step>
  <div className="arrowRight" id="verge11">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <div className="arrowDown" id="verge12">
    <div className="lineV"></div>
    <img className="arrowD" src="assets/arrow.png" />
  </div>
  <Step id='I' modelId='snarkVerkleProofs'>
    SNARK for <br/>Verkle proofs
  </Step>
  <div className="arrowRight" id="verge13">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <Step id='D' modelId='snarkConsensusStateTransition'>
    SNARK for <br/>consensus state <br/>transition
  </Step>
  <div className="lineH" id="verge14"></div>
  <div className="arrowUp" id="verge15">
    <img className="arrowU" src="assets/arrow.png" />
    <div className="lineV"></div>
  </div>
  <OtherStep mile id='L' modelId='fullySnarkedEthereum'>
    Fully <br/>SNARKed <br/>Ethereum
  </OtherStep>
  <div className="arrowRight" id="verge16">
    <div className="lineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <Step id='N' modelId='snarkStarkAsics'>
    SNARK / <br/>STARK ASICs
  </Step>
  <Step id='K' modelId='exploreEvmVerificationPrecompile'>
    Explore EVM <br/>verification <br/>precompile
  </Step>
  <OtherStep quant id='M' modelId='quantumSafeSnarks'>
    Quantum-safe <br/>SNARKs (eg. <br/>STARKs)
  </OtherStep>
  <div className="dashLineH hideLinks" id="verge17"></div> 
  <div className="dashLineV hideLinks" id="verge19"></div> 
  <div className="dashLineV hideLinks" id="verge21"></div>
  <div className="dashLineV hideLinks" id="verge22"></div>
  <div className="dashLineH hideLinks" id="verge23"></div>
  <div className="arrowRight hideLinks" id="verge20">
    <div className="dashLineH"></div>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <div className="dashLineH hideLinks" id="verge24"></div>
  <div className="arrowUp hideLinks" id="verge25">
    <img className="arrowU" src="assets/arrow.png" />
    <div className="dashLineV"></div>
  </div>
  <div className="dashLineV hideLinks" id="verge26"></div>
  <div className="progress-bar" id="verge-progress"></div>
</>

export const Verge = ({ detailed }: { detailed?: boolean }) =>
  <div className="rowGroup" style={{
    display: detailed ? 'grid' : 'none',
  }}>
    <a href="https://ethroadmap.com/verge.html" className="sectionLink">
      <div className="verge">
        <Path name="verge">
          <DefaultProgressView>          
            <i className="fas fa-square-check inIcon"></i>
            <h2 className="sectionTitle hideLinks">The Verge</h2>
            { detailed ? <VergeBody/> : <></> }
            <ProgressBar detailed/>
          </DefaultProgressView>
        </Path>
      </div>
    </a>
  </div>;
