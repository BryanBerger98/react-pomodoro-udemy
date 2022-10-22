import { createContext, useReducer } from "react";

const TasksContext = createContext({
	tasksData: {
		tasks: [],
		count: 0,
	},
	addTask: () => {},
	removeTask: () => {},
});

export { TasksContext };

const INITIAL_TASKS = {
	tasks: [],
	count: 0,
};

const tasksReducer = (state, action) => {
	if (action.type === 'ADD_TASK' && action.value) {
		const tasks = [...state.tasks, action.value];
		return {
			tasks,
			count: tasks.length,
		};
	}
	if (action.type === 'REMOVE_TASK' && !isNaN(+action.value)) {
		const tasks = [...state.tasks];
		tasks.splice(+action.value, 1);
		return {
			tasks,
			count: tasks.length,
		};
	}
	return state ? state : INITIAL_TASKS;
}

const TasksContextProvider = ({ children }) => {

	const [tasksData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS);

	const addTask = (task) => {
		dispatchTasks({
			type: 'ADD_TASK',
			value: task,
		});
	}

	const removeTask = (taskIndex) => {
		dispatchTasks({
			type: 'REMOVE_TASK',
			value: taskIndex,
		});
	}

	const value = {
		tasksData,
		addTask,
		removeTask,
	};

	return (
		<TasksContext.Provider value={ value }>
			{ children }
		</TasksContext.Provider>
	);
};

export default TasksContextProvider;