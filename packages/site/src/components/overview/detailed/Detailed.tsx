import { font100 } from "~/components/shared/styles"
import { Data } from "../data"
import { Merge } from "./Merge"
import { Purge } from "./Purge"
import { Scourge } from "./Scourge"
import { Splurge } from "./Splurge"
import { Surge } from "./Surge"
import { Verge } from "./Verge"

// TODO: s/new/detailed/
export const Detailed = ({ detailed }: { detailed: boolean }) =>
  <div id="newSection" style={{display: "block"}}>
    <div id="roadmap" style={ font100 }>
      <Merge detailed={detailed} />
      <Surge detailed={detailed} />
      <Scourge detailed={detailed} />
      <Verge detailed={detailed} />
      <Purge detailed={detailed} />
      <Splurge detailed={detailed} />
    </div>
  </div>;
