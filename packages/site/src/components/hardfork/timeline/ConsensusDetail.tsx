import { fontBold } from "../../shared/styles";

export const ConsensusDetail = () => <div className="detailed-timeline">
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Launch</span><br/>Dec 1, 2020</div>
    <div className="timeline-content">
      <p>This marked the beginning of Ethereum's transition to a proof-of-stake consensus mechanism, and the genesis of what is now the consensus layer.</p>
    </div>
  </div>
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Altair</span><br/>Oct 27, 2021</div>
    <div className="timeline-content">
      <p>The first upgrade to the Beacon Chain. It introduced several improvements, including sync committees.</p>
    </div>
  </div>
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Bellatrix</span><br/>Sep 6, 2022</div>
    <div className="timeline-content">
      <p>A preparatory upgrade for the Beacon Chain that set the stage for the merge.</p>
    </div>
  </div>
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Merge </span><br/> Sep 15, 2022</div>
    <div className="timeline-content">
      <p>The transition from proof-of-work to proof-of-stake, triggered by reaching the Terminal Total Difficulty, and was not a hard fork.</p>
    </div>
  </div>
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Capella </span><br/> Apr 12, 2023</div>
    <div className="timeline-content">
      <p>Enabled validator withdrawals from the Beacon Chain, completing the transition to PoS.</p>
    </div>
  </div>
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Deneb </span><br/> Mar 13, 2024</div>
    <div className="timeline-content">
      <p>Scaled Layer2s through EIP-4844 with Blobs + other auxiliary improvements.</p>
    </div>
  </div>
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Electra </span><br/> End of 2024</div>
    <div className="timeline-content">
      <p>The community is still debating what exactly to include. Could go live at the end of 2024.</p>
    </div>
  </div>  
  <div className="timeline-event">
    <div className="timeline-date"><span style={ fontBold }>Fulu</span><br/>End of 2025</div>
    <div className="timeline-content">
      <p>Far out. Who knows! Verkle Trees are getting some love</p>
    </div>
  </div>
</div>