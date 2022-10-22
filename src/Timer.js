import { useState } from 'react';
import Button from './Button';
import ClockDisplay from './ClockDisplay';
import useTimer from './hooks/useTimer';
import TaskForm from './TaskForm';
import style from './Timer.module.css';
import TimerText from './TimerText';

function Timer(props) {

	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const { time, startTimer, stopTimer } = useTimer();

	const handleStartTimer = ({ title, description }) => {
		if (isTimerStarted) { // isTimerStarted est true => On veut arrêter le timer

			const savedTime = stopTimer();
			props.saveTime(savedTime, title, description);
			setIsTimerStarted(false);

		} else { // isTimerStarted est false => On veut démarrer le timer

			setIsTimerStarted(true);
			startTimer();

		}
	}

	return (
		<>
			<ClockDisplay time={ time } className={ style['clock-timer'] } />
			<TaskForm isTimerStarted={ isTimerStarted } onSubmit={ handleStartTimer } />
			<TimerText isTimerStarted={ isTimerStarted } />
		</>
	);
}

export default Timer;