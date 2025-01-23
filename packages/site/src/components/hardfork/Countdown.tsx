import { useEffect, useState } from "react"
import { colorWhite, font100 } from "../shared/styles"

type Props = {
  target: Date;
  period?: number;
}

type State = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const DEFAULT_PERIOD = 1000;

const CountdownKey = ({ label, state }: { label: keyof State, state: State }) =>
  <>
    <span className='countdown-time' id={label} style={ font100 }>
      { state[label] ?? '' }
    </span> {label}
  </>;

/**
 * A {@link React.Component} that renders a countdown to a specific date.
 * Displays days, hours, minutes and seconds until the target date.
 * If the target date is in the past, renders negative days and counts up.
 * 
 * @param props.target - The {@link Date} at which the countdown will read 0.
 * @param props.period - How many milliseconds to wait between updates.
 * Defaults to {@link DEFAULT_PERIOD}.
 * @returns The react component.
 */
export const Countdown = ({ target, period }: Props) => {
  const [state, setState] = useState<State>({});
  const update = () => {
    const now = new Date();
    const diff = +target - +now;

    // Calculate days, hours, minutes, seconds.
    setState({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: Math.abs(Math.floor((diff % (1000 * 60)) / 1000))
    });
  }
  useEffect(() => {
    update();
    const id = setInterval(update, period ?? DEFAULT_PERIOD);
    return () => clearInterval(id);
  }, []);

  return <div className='countdown-container' >
    <div id='countdown' style={{ ...font100, ...colorWhite }}>
      <CountdownKey label='days' state={state}/>
      <CountdownKey label='hours' state={state}/>
      <CountdownKey label='minutes' state={state}/>
      <CountdownKey label='seconds' state={state}/>
    </div> 
  </div>;
}
