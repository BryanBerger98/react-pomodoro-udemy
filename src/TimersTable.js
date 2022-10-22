import { useContext, useState } from 'react';
import { TasksContext } from './contexts/Tasks';
import TaskRow from './TaskRow';
import style from './TimersTable.module.css';

function TimersTable(props) {

	const [check, setCheck] = useState(false);

	const { tasksData, removeTask } = useContext(TasksContext);

	return (
		<>
			<h3>{tasksData.count} Task{tasksData.count > 1 ? 's' : ''} registered</h3>
			<div>
				<input type="checkbox" id="check" onChange={ e => setCheck(e.target.checked)} />
				<label htmlFor="check">Check</label>
			</div>
			<table className={style['timers-table']}>
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
							<TaskRow task={ task } index={ index } removeTask={ removeTask } key={ Date.parse(task.date) - index } />
						))
					}
				</tbody>
			</table>
		</>
	);
}

export default TimersTable;