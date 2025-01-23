import { Path } from "../progress/Path";
import { ProgressBar } from "../progress/Progress";
import { Step, OtherStep } from "../progress/Step";
import { DefaultProgressView } from "../progress/view";

const MergeBody = () => <>
  <div className="goalText">
    <b>Goal:</b> have an ideal, simple, robust
    and decentralized <b>proof-of-stake
    consensus</b>
  </div>
  <div id="ingap">.<br/>.</div>
  <Step
    id="A"
    modelId="beaconChain"
  >
    Beacon chain <br/>launch
  </Step>
  <div className="arrowRight" id="merge1">
    <div className="lineH"/>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <Step
    id="B"
    modelId='warmup'
  >
    Warmup fork <br/>(Altair)
  </Step>
  <div className="lineH" id="merge2"/>
  <div className="arrowUp" id="merge3">
    <img className="arrowU" src="assets/arrow.png" />
    <div className="lineV"/>
  </div>
  <Step
    id="C"
    modelId='merge'
    mile
  >
    Merge! <br/>No more <br/>PoW
  </Step>
  <div className="lineH" id="merge4"/>
  <div className="lineV" id="merge5"/>
  <div className="arrowRight" id="merge6">
    <div className="lineH"/>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <Step
    id="D"
    modelId='withdrawals'
  >
    Withdrawals
  </Step>
  <Step
    id="E"
    modelId='distributedValidators'
  >
    Distributed <br/>validators
  </Step>
  <OtherStep
    id="F"
    modelId="secretLeaderElection"
  >
    Secret leader <br/>election
  </OtherStep>
  <OtherStep
    id="G"
    modelId="perSlotParticipants"
  >
    Per-slot <br/>participant <br/>selection
  </OtherStep>
  <div className="arrowRight" id="merge8">
    <div className="lineH"/>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <OtherStep
    id="H"
    modelId="singleSlotFinalitySpec"
  >
    SSF <br/>specification
  </OtherStep>
  <div className="lineH" id="merge9"/>
  <div className="arrowDown" id="merge10">
    <div className="lineV"/>
    <img className="arrowD" src="assets/arrow.png" />
  </div>
  <Step
    id="I"
    modelId="singleSlotFinalityImpl"
  >
    Implementation
  </Step>
  <div className="lineH" id="merge11"/>
  <div className="arrowUp" id="merge12">
    <img className="arrowU" src="assets/arrow.png" />
    <div className="lineV"/>
  </div>
  <OtherStep
    id="J"
    modelId="singleSlotFinality"
    mile
  >
    Single <br/>slot finality<br/>(SSF)
  </OtherStep>
  <div className="lineH" id="merge13"/>
  <div className="lineV" id="merge14"/>
  <div className="arrowRight" id="merge15">
    <div className="lineH"/>
    <img className="arrowR" src="assets/arrow.png" />
  </div>
  <Step
    id="K"
    modelId="increaseValidatorCount"
  >
    Increase <br/>validator count
  </Step>
  <OtherStep
    id="L"
    modelId="idealQuantumSafeSignatures"
    quant
  >
    Ideal quantum-<br/>safe signatures
  </OtherStep>
</>;

export const Merge = ({ detailed }: { detailed?: boolean }) =>
  <div className="rowGroup" style={{
    display: detailed ? 'grid' : 'none',
  }}>
    <a href="https://ethroadmap.com/merge.html" className="sectionLink">
      <div className="merge">
        <Path name="merge">
          <DefaultProgressView>
            <i className="fas fa-code-branch inIcon"/>
            <h2 className="sectionTitle hideLinks">The Merge</h2>
            { detailed ? <MergeBody/> : <></> }
            <ProgressBar detailed/>
          </DefaultProgressView>
        </Path>
      </div>
    </a>
  </div>;
