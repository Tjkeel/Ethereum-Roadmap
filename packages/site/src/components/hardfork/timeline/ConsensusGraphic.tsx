import { Arrow } from "./Arrow";
import { font100 } from "../../shared/styles";

export const ConsensusGraphic = () => <ul className="timeline" style={ font100 }>
<a href="https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.md" target="_blank"><li>Altair</li></a>
<Arrow/>
<a href="https://github.com/ethereum/consensus-specs/blob/dev/specs/bellatrix/beacon-chain.md" target="_blank"><li>Bellatrix</li></a>
<Arrow/>
<a href="#shapella sticky"><li id="capella">Capella</li></a>
<Arrow/>
<a href="#dencun sticky"><li id="deneb">Deneb</li></a>
<Arrow/>
<a href="#pectra sticky"><li id="electra">Electra</li></a>
<Arrow/>
<a href="#osaka sticky"><li id="funknown">Fulu</li></a>
</ul>