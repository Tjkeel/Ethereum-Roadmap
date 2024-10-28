import { PropsWithChildren } from "react"
import { DevPath } from "~/lib/types"
import { font100 } from "../shared/styles"
import { Path } from "./progress/Path"
import { ProgressBar } from "./progress/Progress"
import { DefaultProgressView } from "./progress/view"

const Section = ({ path, iconClassName, zIndex, children } : PropsWithChildren<{
  path: DevPath;
  iconClassName: string;
  zIndex: number;
}>) =>
  <div className="section2" onClick={() => window.location.href=`${path}.html`} style={{zIndex}}>
    <div className="name-logo">
      <i className={`fas ${iconClassName}`} style={{marginBottom: "8px"}}/>
      <h2 style={ font100 }>{ children }</h2>
    </div>
    <Path name={path}>
      <DefaultProgressView>
        <ProgressBar detailed/>
      </DefaultProgressView>
    </Path>
  </div>

// TODO: s/old/simple/
export const Simple = ({ detailed }: {
  detailed?: boolean,
}) => <div id="oldSection" style={{
  display: detailed ? 'none' : 'block',
}}>
  <div className="timeline-container">
    <div id="roadmap" style={ font100 }>
      <Section path='merge' iconClassName='fa-code-branch inIcon' zIndex={10}>
        The Merge
      </Section>
      <Section path='surge' iconClassName='fa-water' zIndex={9}>
        The Surge
      </Section>
      <Section path='scourge' iconClassName='fa-biohazard' zIndex={8}>
        The Scourge
      </Section>
      <Section path='verge' iconClassName='fa-square-check' zIndex={7}>
        The Verge
      </Section>
      <Section path='purge' iconClassName='fa-broom' zIndex={6}>
        The Purge
      </Section>
      <Section path='splurge' iconClassName='fa-hat-wizard' zIndex={5}>
        The Splurge
      </Section>
    </div>
  </div>
</div>
