import { fontBold } from "../../shared/styles";

export const ExecutionDetail = () =>
  <div className="detailed-timeline">
    <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>Genesis</span><br/>July 30, 2015</div>
      <div className="timeline-content">
        <p>Ethereum's first block, also known as Frontier, occurred nearly two years after its ideation.</p>
      </div>
    </div>
        <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>Hack and Fork</span><br/>June - July, 2016</div>
      <div className="timeline-content">
        <p>A large VC fund (The DAO) crowdsourced by the Ethereum community was hacked. A controversial hard fork was implemented to recover the lost funds.</p>
      </div>
    </div>
    <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>EVM Upgrades</span><br/>2016 - 2021</div>
      <div className="timeline-content">
        <p>Six hard forks over five years upgraded the EVM and were independent of the Beacon chain, although a few changes at the end were preparatory.</p>
      </div>
    </div>
    <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>Shanghai</span><br/>Apr 12, 2023</div>
      <div className="timeline-content">
        <p>Enabled validator withdrawals from the Beacon Chain, completing the transition to PoS.</p>
      </div>
    </div>
    <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>Cancun</span><br/>Mar 13, 2024</div>
      <div className="timeline-content">
        <p>Scaled Layer2s through EIP-4844 with Blobs + other auxiliary improvements.</p>
      </div>
    </div>
    <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>Prague</span><br/>End of 2024</div>
      <div className="timeline-content">
        <p>The community is still debating what exactly to include. Could go live at the end of 2024.</p>
      </div>
    </div>
    <div className="timeline-event">
      <div className="timeline-date"><span style={fontBold}>Osaka</span><br/>End of 2025</div>
      <div className="timeline-content">
        <p>Far out. Who knows! Verkle Trees are getting some love</p>
      </div>
    </div>
  </div>;
