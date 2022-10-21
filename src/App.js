import Timer from './Timer';
import TimersTable from './TimersTable';
import style from './App.module.css';

function secondsToHms(timeInSeconds) {
	timeInSeconds = Number(timeInSeconds);
	const h = Math.floor(timeInSeconds / 3600);
	const m = Math.floor(timeInSeconds % 3600 / 60);
	const s = Math.floor(timeInSeconds % 3600 % 60);

	const hDisplay = h < 10 ? '0' + h : h;
	const mDisplay = m < 10 ? '0' + m : m;
	const sDisplay = s < 10 ? '0' + s : s;

	return `${hDisplay}:${mDisplay}:${sDisplay}`;
};

function App() {

	let timers = [
		{
			date: new Date(),
			time: 265,
		},
	];

	const saveTime = (time) => {
		const date = new Date();
		timers = [...timers, { time, date }];
	};

	const displayTimerDetails = (timer) => {
		alert(`${timer.date.toLocaleDateString()} at ${timer.date.toLocaleTimeString()} \n${secondsToHms(timer.time)}`);
	}

	return (
		<div className={ style.container }>
			<h1 className={ style['main-title'] }>Pomodoro Timer</h1>
			<Timer saveTime={ saveTime } />
			<TimersTable timers={ timers } onDisplayTimerDetails={ displayTimerDetails } />
		</div>
	);
}

export default App;