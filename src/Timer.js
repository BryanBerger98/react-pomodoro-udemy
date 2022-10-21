import { useState } from 'react';
import Button from './Button';
import ClockDisplay from './ClockDisplay';
import style from './Timer.module.css';
import TimerText from './TimerText';

let timerId;

function Timer(props) {

	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const [time, setTime] = useState(0);

	const handleStartTimer = () => {
		if (isTimerStarted) { // isTimerStarted est true => On veut arrêter le timer

			clearInterval(timerId);

			props.saveTime(time);

			setIsTimerStarted(false);
			setTime(0);

		} else { // isTimerStarted est false => On veut démarrer le timer

			setIsTimerStarted(true);

			timerId = setInterval(() => {
				setTime((prevTime) => {
					return prevTime + 1;
				});
			}, 1000);
		}
	}

	return (
		<>
			<ClockDisplay time={ time } className={ style['clock-timer'] } />
			<Button isTimerStarted={ isTimerStarted } onClick={ handleStartTimer } />
			<TimerText isTimerStarted={ isTimerStarted } />
		</>
	);
}

export default Timer;