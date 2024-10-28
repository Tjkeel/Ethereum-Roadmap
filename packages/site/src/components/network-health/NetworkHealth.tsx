import { PropsWithChildren, useEffect, useState } from "react";
import { mock as fetch30DayInflation } from "~/lib/metrics/30-day-inflation";
import { mock as fetchEthStaked } from "~/lib/metrics/eth-staked";
import { fetchConsensusLayerAPR } from "~/lib/metrics/consensus-layer-apr";
import { fetchEnteringValidatorQueue } from "~/lib/metrics/entering-validator-queue";
import { fetchGethShare } from "~/lib/metrics/geth-share";
import { mock as fetchLidoShare } from "~/lib/metrics/lido-share";
import { mock as fetchRestakedRatio } from "~/lib/metrics/restaked-share";
import { fetchStage2L2s } from "~/lib/metrics/stage-2-layer-2";
import { numberToWord } from "~/lib/utils";
import { font100, fontBold } from "../shared/styles";

function Metric<Content> ({
  fetchMetric,
  isHazard,
  formatContent,
  children
}: PropsWithChildren<{
  fetchMetric: () => Promise<Content>,
  isHazard?: (content: Content) => boolean,
  formatContent?: (content: Content) => string,
}>) {
  const [content, setContent] = useState<Content>();
  const hazard = content !== undefined && isHazard?.(content);
  const fmt = formatContent ?? String;
  useEffect(() => {
    fetchMetric().then((value) => setContent(value));
  });
  return <div className={'calculation-box' + (hazard ? ' hazard' : '')}>
    <span style={ fontBold }>{children}</span>
    {content === undefined
      ? <span>Loading...</span>
      : <span>{fmt(content)}</span>
    }
    {hazard
      ? <i className="fas fa-exclamation-triangle icon-overlay"/>
      : <></>
    }
  </div>;
}

export const NetworkHealth = () => <>
  <h1 style={ font100 }>Network Health</h1>
  <div className="calculation-container">
    <Metric
      fetchMetric={fetch30DayInflation}
      formatContent={(content) => `${content}%`}
    >
      ETH Inflation
    </Metric>
    <Metric
      fetchMetric={async () => " 30M"}
    >
      Gas Limit
    </Metric>
    <Metric
      fetchMetric={fetchEthStaked}
      formatContent={(content) => `${content}%`}
    >
      ETH Staked
    </Metric>
    <Metric
      fetchMetric={fetchLidoShare}
      isHazard={(lidoPercentageValue) => lidoPercentageValue > 20}
      formatContent={(lidoPercentageValue) => `${Math.round(lidoPercentageValue)}%`}
    >
      Lido Share
    </Metric>
    <Metric
      fetchMetric={fetchEnteringValidatorQueue}
      formatContent={
        (enteringValidators) => `${Math.round(enteringValidators / 1000)}K Validators`
      }
    >
      Entry Queue
    </Metric>
    <Metric
      fetchMetric={fetchRestakedRatio}
      formatContent={(restakedRatio) => `${Math.round(restakedRatio * 100)}%`}
    >
      Restaked Share
    </Metric>
    <Metric
      fetchMetric={fetchConsensusLayerAPR}
      formatContent={(consensusAPRPercent) => parseFloat(consensusAPRPercent).toFixed(2)}
    >
      Consensus APR
    </Metric>
    <Metric
      fetchMetric={fetchStage2L2s}
      isHazard={(l2Count) => l2Count < 1}
      formatContent={numberToWord}
    >
      L2s at Stage 2
    </Metric>
    <Metric
      fetchMetric={async () => " 36% "}
    >
      Prism Share
    </Metric>
    <Metric
      fetchMetric={fetchGethShare}
      isHazard={(gethShare) => gethShare > 30}
      formatContent={(gethShare) => `${Math.round(gethShare)}%`}
    >
      Geth Share
    </Metric>
  </div>
</>;
