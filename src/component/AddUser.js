import {useState} from 'react';
import style from './AddUser.module.css';

function AddUser(props) {
	const [usernameValue, setUsernameValue] = useState('');
	const [ageValue, setAgeValue] = useState('');
	const addUserHandler = (event) => {
		event.preventDefault();
		if (usernameValue.length > 0 && ageValue > 0) {
			console.log(usernameValue + ageValue);
			setAgeValue('');
			setUsernameValue('');
		}
	};

	const changeValueHandler = (event) => {
		if (event.target.id === 'username') {
			setUsernameValue(event.target.value);
		} else if (event.target.id === 'age') {
			setAgeValue(event.target.value);
		}
	};
	return (
		<form className={style.input} onSubmit={addUserHandler}>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				id="username"
				value={usernameValue}
				onChange={changeValueHandler}
			/>
			<label htmlFor="age"> Age</label>
			<input
				id="age"
				type="number"
				value={ageValue}
				onChange={changeValueHandler}
			/>
			<button type="submit">Add User</button>
		</form>
	);
}

export default AddUser;
