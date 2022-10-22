import TextField from './Forms/TextField';
import TextareaField from './Forms/TextareaField';
import Button from './Button';
import { useState } from 'react';

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

function TaskForm({ isTimerStarted, onSubmit }) {

	const initialFormValue = {
		title: '',
		description: '',
	};

	const [formValue, setFormValue] = useState(initialFormValue);
	const [error, setError] = useState(null);

	const handleSubmitForm = (event) => {
		event.preventDefault();
		if (error) {
			alert(`${error.field}: ${error.message}`);
			return;
		}
		onSubmit(formValue);
		if (isTimerStarted) {
			setFormValue(initialFormValue);
		}
	}

	const handleInputChange = (field, value) => {

		setFormValue({...formValue, [field]: value});
		
		if (field === 'description' && value && value.length > 10) {
			setError({
				field,
				message: 'Description must have less than 10 characters',
			});
			return;
		}

		if (field === 'title' && (!value || value.length < 4)) {
			setError({
				field,
				message: 'Title must have at least 4 characters',
			});
			return;
		}

		setError(null);
	}

	return (
		<form onSubmit={ handleSubmitForm } style={ style.form }>
			<TextField labelTitle='Titre' placeholder='Titre de votre tâche' value={ formValue.title } onChange={ (v) => handleInputChange('title', v) } name='title' error={ error } />
			<TextareaField labelTitle='Description' placeholder='Écrivez votre description ici...' value={ formValue.description } onChange={ (v) => handleInputChange('description', v) } name='description' error={ error } />
			<Button type='submit' isTimerStarted={ isTimerStarted } />
		</form>
	);
}

export default TaskForm;