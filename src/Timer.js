import { useContext, useState } from 'react';
import Button from './Button';
import ClockDisplay from './ClockDisplay';
import { TasksContext } from './contexts/Tasks';
import useTimer from './hooks/useTimer';
import TaskForm from './TaskForm';
import style from './Timer.module.css';
import TimerText from './TimerText';

function Timer() {

	const [isTimerStarted, setIsTimerStarted] = useState(false);
	const { time, startTimer, stopTimer } = useTimer();

	const { addTask } = useContext(TasksContext);

	const handleStartTimer = ({ title, description }) => {
		if (isTimerStarted) { // isTimerStarted est true => On veut arrêter le timer

			const savedTime = stopTimer();
			addTask({
				time: savedTime,
				date: new Date(),
				title,
				description,
			});
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