import { ConsensusDetail } from "./timeline/ConsensusDetail";
import { ConsensusGraphic } from "./timeline/ConsensusGraphic";
import { ExecutionDetail } from "./timeline/ExecutionDetail";
import { ExecutionGraphic } from "./timeline/ExecutionGraphic";

export const HardforkTimeline = () => <>
  <h1 style={{ fontWeight: 100 }}>Hard Fork Timeline</h1>
  <div className="timeline-container">
    <h2 className="timeline-title" style={{ fontWeight: 100 }}>Execution Layer Hard Forks</h2>  
    <ExecutionGraphic/>
    <ExecutionDetail/>
    <br/>
  </div>
  <div className="timeline-container">
    <h2 className="timeline-title" style={{ fontWeight: 100 }}>Consensus Layer Hard Forks</h2>  
    <ConsensusGraphic/>
    <ConsensusDetail/>
    <br/>
  </div>
</>;
