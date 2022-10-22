import { useContext } from 'react';
import ClockDisplay from './ClockDisplay';
import { TasksContext } from './contexts/Tasks';
import style from './TimersTable.module.css';

function TimersTable(props) {

	const { tasksData, removeTask } = useContext(TasksContext);

	return (
		<table className={ style['timers-table'] }>
				<thead>
					<tr>
						<th>Date</th>
						<th>Task</th>
						<th>Description</th>
						<th>Time</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						tasksData.tasks.map((task, index) => (
							<tr key={ task.date.getMilliseconds() }>
								<td>{ task.date.toLocaleDateString() } at { task.date.toLocaleTimeString() }</td>
								<td>{ task.title }</td>
								<td>{ task.description }</td>
								<td><ClockDisplay time={ task.time } /></td>
								<td>
									<button onClick={ () => removeTask(index) }>Delete</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
	);
}

export default TimersTable;