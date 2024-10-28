import { Head } from "~/components/shared/Head";
import { Tabs } from "~/components/tabs/Tabs";
import { Logo } from "~/components/logo/Logo";
import { Overview } from "~/components/overview/Overview";
import { HardforkTimeline } from "~/components/hardfork/Timeline";
import { HardforkRecent } from "~/components/hardfork/Recent";
import { Organizations } from "~/components/organizations/Organizations";
import { Foot } from "~/components/Foot";
import { HardforkUpcoming } from "./hardfork/Upcoming";
import { NetworkHealth } from "./network-health/NetworkHealth";
import '../home.css';

export const Home = () => <>
  <div className="container">  
    <Head title="Ethereum Roadmap"/>
    <Tabs/>
    <Logo/>
    <Overview/>
    <HardforkTimeline/>
    <HardforkRecent/>
    <HardforkUpcoming/>
    <Organizations/>
    <NetworkHealth/>
    {/*<script src="script.js"></script>*/}
  </div>

  <Foot/>
</>
