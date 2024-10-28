import { EthPrice } from './EthPrice';
import { GasPrice } from './GasPrice';
import './tabs.css';

export const Tabs = () => <div className="tabs-container">
    <span id="inprogress"><span style={{ color: "white", fontWeight: "normal" }}>Next Upgrade</span><br/><a href="#pectra sticky" style={{color:"#F1A196", textDecoration:"none"}}>Prague-Electra</a></span>
    <a href="https://ethroadmap.com/" style={{background: "rgba(255, 255, 255, 0.1)"}} className="tab"><i className="fas fa-home"></i> <span className="tooltip">Home</span></a>
    <span className="tabdivider" />
    <a href="https://ethroadmap.com/merge.html" className="tab"><i className="fas fa-code-branch"></i> <span className="tooltip">Merge</span> </a>
    <a href="https://ethroadmap.com/surge.html" className="tab"><i className="fas fa-water"></i> <span className="tooltip">Surge</span> </a>
    <a href="https://ethroadmap.com/scourge.html" className="tab"><i className="fas fa-biohazard"></i> <span className="tooltip">Scourge</span> </a>
    <a href="https://ethroadmap.com/verge.html" className="tab"><i className="fas fa-square-check"></i><span className="tooltip">Verge</span></a>
    <a href="https://ethroadmap.com/purge.html" className="tab"><i className="fas fa-broom"></i><span className="tooltip">Purge</span></a>
    <a href="https://ethroadmap.com/splurge.html" className="tab"><i className="fas fa-hat-wizard"></i><span className="tooltip">Splurge</span></a>
    <div className="price-container">
      <GasPrice/>
      <EthPrice/>
    </div>
  </div>;