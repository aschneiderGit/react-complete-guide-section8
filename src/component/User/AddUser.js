import {useRef, useState} from 'react';
import style from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModale from '../UI/ErrorModal';

function AddUser(props) {
	const [error, setError] = useState();

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandler = (event) => {
		event.preventDefault();
		const usernameValue = nameInputRef.current.value;
		const ageValue = ageInputRef.current.value;
		if (usernameValue.length === 0 || ageValue.length === 0) {
			setError({title: 'Empty Input', message: 'not all input are fill '});
		} else if (ageValue < 0) {
			setError({title: 'Wrong Value', message: 'Age must be positif '});
		} else if (usernameValue.length > 0 && +ageValue > 0) {
			const newUser = {
				id: Date.now(),
				name: usernameValue,
				age: ageValue,
			};
			props.onNewUserSubmit(newUser);
		}
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModale
					title={error.title}
					message={error.message}
					onCloseModal={errorHandler}
				/>
			)}
			<Card className={style.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" ref={nameInputRef} />
					<label htmlFor="age"> Age</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
}

export default AddUser;
