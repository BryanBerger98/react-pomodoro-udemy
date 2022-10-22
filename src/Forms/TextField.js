import { useId } from "react";

const style = {
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
        width: '100%'
    },
    input: {
        padding: '.5rem .8rem',
        borderRadius: 10,
        border: 'none',
        width: '100%'
    }
}

function TextField({ placeholder, labelTitle, value, onChange, error, name }) {

	const id = useId();

	const handleChange = (event) => {
		onChange(event.target.value);
	}

	return (
		<div style={ style.inputGroup }>
			<label htmlFor={id}>{ labelTitle }</label>
			<input style={ style.input } type="text" id={id} placeholder={ placeholder } value={ value } onChange={ handleChange } />
			{ error && error.field === name && <p style={{ color: 'red' }}>{ error.message }</p> }
		</div>
	);
}

export default TextField;