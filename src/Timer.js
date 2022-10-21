import { useState } from 'react';
import ClockDisplay from './ClockDisplay';
import style from './Timer.module.css';

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
			<button className={ `${style['clock-btn']} ${style[`clock-btn-${ isTimerStarted ? 'stop' : 'start' }`]}` } onClick={ handleStartTimer }>{ isTimerStarted ? 'Stop' : 'Start' }</button>
		</>
	);
}

export default Timer;