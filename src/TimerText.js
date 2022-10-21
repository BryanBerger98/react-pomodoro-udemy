import { memo } from 'react';

function TimerText({ isTimerStarted }) {

	return (
		<p>
			{ isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté' }
		</p>
	);
}

export default memo(TimerText);