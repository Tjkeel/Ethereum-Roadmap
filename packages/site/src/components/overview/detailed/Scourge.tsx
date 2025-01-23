import { Path } from "../progress/Path"
import { ProgressBar } from "../progress/Progress"
import { OtherStep, Step } from "../progress/Step"
import { DefaultProgressView } from "../progress/view"

const ScourgeBody = () => <>
  <div className="goalText"><b>Goal:</b> mitigate <b>centralization
    concerns</b> in Ethereum PoS
    design, particularly around <b>MEV</b>
    and <b>liquid staking / pooling</b>
  </div>
  <div id="ingap">.<br/>.<br/>.</div>
  <div className="trackGroup" id="scourgeTrackA">
    <div className="track" id="scourgeTrackAText">
      MEV track
    </div>
    <Step id='A' modelId='extraProtocolMEV'>
      Extra-protocol <br/>MEV markets
    </Step>
    <div className="arrowRight" id="scourge1">
      <div className="lineH"/>
      <img className="arrowR" src="assets/arrow.png" />
    </div>
    <OtherStep id='C' modelId='inclusionLists'>
      Inclusion lists
    </OtherStep>
    <div className="lineH" id="scourge2"/>
    <div className="lineV" id="scourge3"/>
    <div className="arrowRight" id="scourge4">
      <div className="lineH"/>
      <img className="arrowR" src="assets/arrow.png" />
    </div>
    <OtherStep id='B' modelId='exploreEPBS'>
      Explore ePBS
    </OtherStep>
    <div className="arrowRight" id="scourge5">
      <div className="lineH"/>
      <img className="arrowR" src="assets/arrow.png" />
    </div>
    <OtherStep id='D' modelId='exploreMEVBurn'>
      Explore MEV <br/>burn in ePBS
    </OtherStep>
    <div className="lineH" id="scourge6"/>
    <div className="lineV" id="scourge7"/>
    <OtherStep id='E' modelId='distributedBLockBuilding'>
      Distributed block <br/>building
    </OtherStep>
    <div className="lineH" id="scourge8"/>
    <div className="lineV" id="scourge9"/>
    <OtherStep id='F' modelId='exploreExecutionTickets'>
      Explore <br/>execution tickets
    </OtherStep>
    <div className="lineH" id="scourge10"/>
    <div className="lineV" id="scourge11"/>
    <OtherStep id='G' modelId='endgameBlockProduction' mile>
    Endgame block <br/>production <br/>pipeline
    </OtherStep>
    <Step id='H' modelId='appLayerMEVMinimization'>
      App-layer MEV <br/>minimzation
    </Step>
    <OtherStep id='I' modelId='explorePreconfirmations'>
      Explore <br/>preconfimations
    </OtherStep>
  </div>
  <div className="trackGroup" id="scourgeTrackB">
    <div className="track" id="scourgeTrackBText">
      Staking economics / <br/>experience track
    </div>
    <Step id='J' modelId='raiseMaxEffectiveBalance'>
      Raise max <br/>effective balance
    </Step>
    <Step id='K' modelId='improveNodeOperatorUsability'>
      Improve node <br/>operator usability
    </Step>
    <OtherStep id='L' modelId='exploreTotalStakeCapping'>
      Explore total <br/>stake capping
    </OtherStep>
    <Step id='M' modelId='exploreSolutionsToLiquidStakingCentralization'>
      Explore solutions <br/>to liquid staking <br/>centralization
    </Step>
  </div>
  <div className="arrowUp hideLinks" id="scourge14">
    <img className="arrowU" src="assets/arrow.png" />
    <div className="dashLineV"/>
  </div>
  <div className="dashLineV hideLinks" id="scourge15"/>
</>

export const Scourge = ({ detailed }: { detailed?: boolean }) =>
  <div className="rowGroup" style={{
    display: detailed ? 'grid' : 'none',
  }}>
    <a href="https://ethroadmap.com/scourge.html" className="sectionLink">
      <div className="scourge">
        <Path name='scourge'>
          <DefaultProgressView>
            <i className="fas fa-biohazard inIcon"></i>
            <h2 className="sectionTitle hideLinks">The Scourge</h2>
            <ScourgeBody />
            <ProgressBar detailed={true}/>
          </DefaultProgressView>
        </Path>
      </div>
    </a>
  </div>