import { font100 } from "../shared/styles";

export const OtherTeams = () => <>
  <h2 className="timeline-title" style={ font100 }>Other Teams</h2>
  <div className="team-container">
    <a href="https://ethereum.foundation/" target="_blank" className="team3">Foundation</a>
    <a href="https://ethereum.org/" target="_blank" className="team3">Ethereum.org</a>
    <a href="https://www.ethereumcatherders.com/" target="_blank" className="team3">Cat Herders</a>
    <a href="https://ethereum-magicians.org/" target="_blank" className="team3">Magicians</a>
    <a href="https://ethglobal.com/" target="_blank" className="team3">EthGlobal</a>
    <a href="https://consensys.io" target="_blank" className="team3">Consensys</a>
    <a href="https://www.flashbots.net/" target="_blank" className="team3">Flashbots</a>
    <a href="https://www.ethportal.net/" target="_blank" className="team3">Portal Network</a>

    <a href="https://protocol-guild.readthedocs.io/en/latest/02-membership.html" target="_blank" className="team3">& More</a>
  </div>
</>;
