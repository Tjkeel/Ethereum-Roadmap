import { font100 } from "../shared/styles";
import { ClientTeams } from "./ClientTeams";
import { OtherTeams } from "./OtherTeams";

export const Organizations = () => <>
  <h1 style={ font100 }>Key Organizations</h1>
  <p className="intro-text" style={{ maxWidth: "800px", ...font100 }}>
  For decentralization and redundancy sake, Ethereum opted for a multi-client approach. Every Ethereum upgrade must
  be coordinated and developed in tandem with the five teams in the appropriate layer.
  </p>
  <div className="timeline-container">
    <ClientTeams/>
    <OtherTeams/>
  </div>
</>;
