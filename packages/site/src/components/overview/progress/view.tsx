import { useSpring, animated } from "@react-spring/web";
import { createContext, PropsWithChildren, useContext } from "react";

/**
 * Make a background style with color intervals filled by weighted progress. 
 * 
 * @param colors - The sequence of colors to use for each progress interval.
 * @param progress - The weight of progress in each interval.
 * @returns A gradient string to be used as the background style of a div.
 */
const makeProgressGradient = (
  colors: string[],
  progress: number[],
) => {
  console.log('MAKE_PROG', progress);
  let accum = [0];
  for (const prog of progress) {
    accum.push(accum[accum.length - 1] + prog);
  }
  console.log('ACCUM', accum);
  const intervals = Array(accum.length - 1).fill(0).map(
    (_, i) => [accum[i], accum[i + 1], colors[i]],
  ) as [number, number, string][];
  const gradients = ((intervals.length
    ? [
      ...intervals.filter(
        ([start, end]) => start !== end,
      ),
      // Use grey for remaining gradient.
      [intervals[intervals.length - 1][1], 100, 'rgb(89 89 89)'],
    ]
    : [[0, 1, 'rgb(89 89 89)']]
  ) as [number, number, string][]).map(
    ([start, end, color]) => `${color} ${start}%, ${color} ${end}%`,
  );
  console.log("GRAD:", gradients);
  return `linear-gradient(90deg, ${gradients.join(', ')})`;
}

export const ProgressViewContext = createContext<string[]>([]);

export const ProgressView = ({
  colors, children,
}: PropsWithChildren<{
  colors: string[],
}>) => {
  return <ProgressViewContext.Provider
    value={colors}
  >
    { children }
  </ProgressViewContext.Provider>;
}

export const DefaultProgressView = ({
  children
}: PropsWithChildren) =>
  <ProgressView colors={[
    '#78D0DE', // teal
    '#99C66D', // green
    '#AE80B1', // purple
    '#6A9BE7', // blue
    // flash needs to be transparent
    'rgb(250 250 250 / 0%)', // red
    'rgba(0, 0, 0, 0)', // black
  ]}>
    { children }
  </ProgressView>;

export const StepView = ({
  id, progress, mile, children,
}: PropsWithChildren<{
  id: string,
  progress: number[];
  mile?: boolean,
}>) => {
  const spring = useSpring({
    from: {
      backgroundPosition: '100%',
    },
    to: {
      backgroundPosition: '0%',
    },
  });
  const progressView = useContext(ProgressViewContext);
  if (!progressView) {
    throw new Error('StepView must be child of ProgressView');
  }
  const totalProgress = progress.reduce((prev, curr) => prev + curr, 0)
  if (totalProgress > 100) {
    throw new Error('total progress must be <= 100');
  }
  const colors = progressView;
  const gradient = makeProgressGradient(colors, progress);
  
  return <animated.div
    className={`${ mile ? 'mile' : 'step' } hideLinks`}
    id={id}
    style={{
      background: gradient,
      backgroundSize: '200%',
      ...spring,
      animation: "fadeReds 3s ease infinite",
    }}>
    { children }
  </animated.div>
}
