import ClockDisplay from './ClockDisplay';
import style from './TimersTable.module.css';

function TimersTable(props) {

	return (
		<table className={ style['timers-table'] }>
				<thead>
					<tr>
						<th>Date</th>
						<th>Task</th>
						<th>Description</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{
						props.timers.map((timer) => (
							<tr onClick={ () => props.onDisplayTimerDetails(timer) } key={ timer.date.getMilliseconds() }>
								<td>{ timer.date.toLocaleDateString() } at { timer.date.toLocaleTimeString() }</td>
								<td>{ timer.title }</td>
								<td>{ timer.description }</td>
								<td><ClockDisplay time={ timer.time } /></td>
							</tr>
						))
					}
				</tbody>
			</table>
	);
}

export default TimersTable;