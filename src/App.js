import Timer from './Timer';
import TimersTable from './TimersTable';
import style from './App.module.css';
import { useContext, useState } from 'react';
import useTimeParser from './hooks/useTimeParser';
import { ThemeContext } from './contexts/Theme';

function App() {

	const { theme, toggleTheme } = useContext(ThemeContext);

	const { parseSecondsToHMS } = useTimeParser();

	const displayTimerDetails = (timer) => {
		alert(`${timer.date.toLocaleDateString()} at ${timer.date.toLocaleTimeString()} \n${parseSecondsToHMS(timer.time)}`);
	}

	return (
		<div className={ `${style.container} ${style[theme]}` }>
			<h1 className={ style['main-title'] }>Pomodoro Timer</h1>
			<button onClick={ toggleTheme }>Toggle to { theme === 'light' ? 'dark' : 'light' }</button>
			<Timer />
			<TimersTable onDisplayTimerDetails={ displayTimerDetails } />
		</div>
	);
}

export default App;