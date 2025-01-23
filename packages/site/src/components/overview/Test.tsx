import { animated, useTrail, config, } from "@react-spring/web"

const invis = (color: number): string => `#${color.toString(16)}00`;
const full = (color: number): string => `#${color.toString(16)}FF`;

type Props = {
  colors?: number[],
  fadeColor?: number,
};

const defaultProps: Required<Props> = {
  colors: [
    0xfe9b92,  // red
    0xfee94d,  // yellow
    0x86d747,  // green
    0xca70c2,  // magenta
    0x52d3e0,  // cyan
    0x589ced,  // blue
  ],
  fadeColor: 0x595959,
};

type HardForkName = string;


type Task = {
  name: string,
  fork: HardForkName,
  weight: number, // 0 < weight < +oo
  progress: number, // 0 <= progress <= weight
}

type ForkProgress = {
  fork: HardForkName,
  color: number,
  tasks: Task[],
}

export const TestSpring = (props: Props) => {
  const { colors, fadeColor } = {
    ...defaultProps,
    ...props,
  };
  const [trails] = useTrail(6, (i) => ({
    from: { background: invis(colors[i]), x: 0, width: 0 },
    // Although we only have one 'to' for this part of the animation,
    // we use an array with one element to prepare the api to accept
    // a chain of springs in the second part.
    to: [
      // Without this duplicate entry, react-spring immediately calls
      // onRest for all trail elements except the 0th. The reason for this
      // behavior is unclear to me.
      { background: invis(colors[i]), x: 0, width: 0 },
      { background: full(colors[i]), x: 0, width: 40 },
    ],
    reset: true,
    // When the animation completes,
    onRest: (_, ctrl) => {
      // we push a new animation using the attached api.
      ctrl.start({
        from: { background: full(colors[i]) },
        to: [
          { background: full(fadeColor) },
          { background: full(colors[i]) },
        ],
        // We make this one loop indefinitely,
        loop: true,
        // smooth and slow.
        config: config.molasses,
      });
    },
  }), []);

  return <div style={{display: 'flex', flexDirection: 'row'}}>
    {trails.map((style, index) => <animated.div style={{
      height: 40,
      x: 40 * index,
      ...style,
    }}/>)}
  </div>;
}
