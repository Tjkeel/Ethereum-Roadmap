import { useSpring, animated } from "@react-spring/web";
import { useContext } from "react"
import { DataContext } from "../data";
import { PathContext } from "./Path"
import { ProgressViewContext } from "./view";

type ForkProgressChunkArgs = {
  width: number,
  color: string,
  fade?: 'red' | 'black',
}

const ForkProgressChunk = ({
  width, color, fade,
}: ForkProgressChunkArgs) => {
  if ( fade === 'black' ) {
    console.log('WIDTH, COLOR:', width, color);
  }
  const spring = useSpring({
    from: {
      width: '0%',
    },
    to: {
      width: `${width}%`,
    },
  });
  const animation = fade
    ? {
      animation: fade === 'red'
        ? 'fadeReds 3s infinite'
        : fade === 'black'
          ? 'fadeBlack 3s infinite'
          : '',
    }
    : {
      backgroundColor: color,
    };
  return <animated.div style={{
    color,
    height: '100%',
    display: 'inline-block',
    ...animation,
    ...spring,
  }}/>;
}

/**
 * 
 * 
 * @param param0 
 */
export const ProgressBar = ({ detailed }: { detailed?: boolean }) => {
  // TODO: accept a GraphQL query instead of demanding context?
  const path = useContext(PathContext);
  if (path === null) {
    throw new Error('Step must be inside a Path');
  }
  const colors = useContext(ProgressViewContext);
  const data = useContext(DataContext);
  const totalWork = Object.values(data.tasks[path] as object).reduce(
    (prev, curr) => prev + curr,
  );
  type Fade = 'red' | 'black' | undefined;
  const pathProgress = data.forks.map(
    ({ contributions }, index) => path in contributions
       ? {
        width: 100 * (Object.values(contributions[path] as object) as number[]).reduce(
          (prev, curr) => prev + curr,
        ) / totalWork,
        color: colors[index],
        fade: index === data.forks.length - 2
          ? 'red'
          : index === data.forks.length - 1
            ? 'black'
            : undefined
      }
      : undefined,
  ).filter((value) => value !== undefined) as {
    width: number,
    color: string,
    fade: Fade,
  }[];
  return <div
    className='progress-bar'
    id={`${path}-progress${ detailed ? '' : '-2' }`}
  >
    { ...pathProgress.map(
      ({ width, color, fade }) => <ForkProgressChunk
        width={width}
        color={color}
        /* TODO: be more explicit about fade */
        fade={fade}
      />,
    )}
  </div>;
};
