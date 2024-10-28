import { animated, useSpring } from "@react-spring/web";
import { createContext, PropsWithChildren, useContext } from "react";
import { DevPath } from "~/lib/types";
import { DataContext, ProgressData, tasks } from "../data";
import { PathContext } from "./Path";
import { StepView } from "./view";

type ProgressProps = {
  totalWeight: number;
  currentWeight: number;
}

type ProgressRecord = Record<string, ProgressProps>;

export const ProgressContext = createContext<ProgressRecord>({});

type Props = {
  id: string, // typeof tasks[DevPath],
  modelId: string,
  mile?: boolean,
}

export const MergeData: Record<
  string, {
    [key in DevPath]?: Record<
      string, number
    >
  }
> = {
  misc: {
    merge: {
      distributedValidators: .4,
      withdrawals: 1.8,
    }
  }
}

const extractProgress = (
  path: keyof ProgressData['tasks'],
  modelId: string,
  data: ProgressData,
) => {
  const tasks = data.tasks[path];
  const totalWork: number = tasks[modelId as keyof typeof tasks];
  const relevantForks = Object.fromEntries(data.forks.filter(
    ({ contributions }) => contributions[path] !== undefined &&
      Object.keys(contributions[path]!).includes(modelId)
  ).map(
    ({ name, contributions }) => [name, (contributions[path] as any)[modelId]]
  ));
  const progress = data.forks.map(
    ({ name }) => name in relevantForks
      ? relevantForks[name] / totalWork
      : 0,
  );
  return progress;
}

export const Step = ({
  id, modelId, mile, children,
}: PropsWithChildren<Props>) => {
  const path = useContext(PathContext);
  if (path === null) {
    throw new Error('Step must be inside a Path');
  }
  const data = useContext(DataContext);
  const extractedProgress = extractProgress(path, modelId, data).map(
    (prog) => Math.round(50 * prog),
  );
  const thisId = `${path}${id}`;
  return <StepView
    id={thisId}
    progress={extractedProgress}
    mile={mile}
  >
    { children }
  </StepView>
}

export const HardForkStep = Step;

const makeOtherGrad = (grad: number): string =>
  `linear-gradient(${[
    `90deg`,
    `rgb(0 0 0 / 0%) ${grad / 2}%`,
    `rgb(89 89 89) ${grad / 2}%`,
    'rgb(89 89 89) 100%',
  ].join(', ')})`;

export const OtherStep = ({
  id, modelId, mile, children, quant,
}: PropsWithChildren<Props> & { quant?: boolean })  => {
  const path = useContext(PathContext);
  if (path === null) {
    throw new Error('Step must be inside a Path');
  }
  const data = useContext(DataContext);
  const extractedProgress = extractProgress(path, modelId, data).map(
    (prog) => Math.round(100 * prog),
  ).reduce(
    (prev, curr) => prev + curr,
  );
  const thisId = `${path}${id}`;
  const spring = useSpring({
    from: {
      backgroundPosition: '100%'
    },
    to: {
      backgroundPosition: '0%'
    },
  });
  const classBase = quant
    ? 'quant'
    : mile
      ? 'mile'
      : 'step';
  return <animated.div
    className={`${ classBase } greyOut`}
    id={thisId}
    style={{
      background: makeOtherGrad(extractedProgress),
      backgroundSize: '200%',
      ...spring,
      animation: 'fadeBlack2 3s infinite',
    }}>
    { children }
  </animated.div>;
}
