import { Path } from '../progress/Path';
import { ProgressBar } from '../progress/Progress';
import { OtherStep, Step } from '../progress/Step';
import { DefaultProgressView } from '../progress/view';

export const SurgeBody = () => <>
  <div className='goalText'><b>Goal:</b> 100,000 <b>transactions per
    second</b> and beyond (on rollups)
  </div>
  <div id='ingap'>.<br/>.</div>
  {/*
  optimisticRollupFraudProvers: 1,
  zkEVMs: 1,
  eip4844Spec: 1,
  eip4844Impl: 1,
  basicRollupScaling: 1,
  peerDAS: 1,
  efficientDASelfHealing: 1,
  fullRollupScaling: 1,
  crossChainStandards: 1,
  noSetupCommitments: 1,
  */}
  <Step id='A' modelId='optimisticRollupFraudProvers'>
    Optimistic rollup fraud provers
  </Step>
  <Step id='B' modelId='zkEVMs'>
    ZK-EVMs
  </Step>
  <Step id='C' modelId='eip4844Spec'>
    EIP-4844 <br/>specification
  </Step>
  <div className='arrowRight' id='surge1'>
    <div className='lineH' />
    <img className='arrowR' src='assets/arrow.png' />
  </div>
  <div className='track' id='surgeTrackA'>Prototype</div>
  <Step id='D' modelId='eip4844Impl'>
    EIP-4844 <br/>implementation
  </Step>
  <div className='arrowRight' id='surge3'>
    <div className='lineH' />
    <img className='arrowR' src='assets/arrow.png' />
  </div>
  <Step id='E' modelId='basicRollupScaling' mile>
    Basic <br/>rollup <br/>scaling
  </Step>
  <div className='arrowUp' id='surge4'>
    <img className='arrowU' src='assets/arrow.png' />
    <div className='lineV' />
  </div>
  <div className='lineV' id='surge5' /> {/* src='assets/lineV.png' TODO: check new-section-surge render */}
  <div className='track' id='surgeTrackB'>Limited training wheels <br/>(diverse 6-of-8 or stricter)</div>
  <OtherStep id='F' modelId='peerDAS'>
    peerDAS
  </OtherStep>
  <OtherStep id='G' modelId='efficientDASelfHealing'>
    Efficient DA <br/>self-healing
  </OtherStep>
  <div className='arrowRight' id='surge6'>
    <div className='lineH' />
    <img className='arrowR' src='assets/arrow.png' />
  </div>
  <div className='lineH' id='surge7' />
  <div className='lineV' id='surge8' />
  <OtherStep id='H' modelId='fullRollupScaling' mile>
    Full<br/>rollup <br/>scaling
  </OtherStep>
  <div className='track' id='surgeTrackC'>No training <br/>wheels</div>
  <div className='lineH' id='surge9' />
  <div className='lineH' id='surge10' />
  <div className='arrowUp' id='surge11'>
    <img className='arrowU' src='assets/arrow.png' />
    <div className='lineV' />
  </div>
  <div className='dashLineH hideLinks' id='surge12' />
  <div className='dashLineV hideLinks' id='surge13' />
  <OtherStep quant id='J' modelId='noSetupCommitments'>
    Q-sale, no-setup <br/>commitments
  </OtherStep>
  <Step id='I' modelId='crossChainStandards'>
    Improve cross-<br/>rollup standards <br/>+ interop
  </Step>
  <ProgressBar detailed/>
</>;

export const Surge = ({ detailed }: { detailed?: boolean }) =>
  <div className="rowGroup" style={{
    display: detailed ? 'grid' : 'none',
  }}>
    <a href="https://ethroadmap.com/surge.html" className="sectionLink">
      <div className="surge">
        <Path name="surge">
          <DefaultProgressView>          
            <i className='fas fa-water inIcon'></i>
            <h2 className='sectionTitle hideLinks'>The Surge</h2>
            { detailed ? <SurgeBody/> : <></> }
            <ProgressBar detailed/>
          </DefaultProgressView>
        </Path>
      </div>
    </a>
  </div>;
  