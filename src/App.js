import React, {useState} from 'react';
import AddUser from './component/User/AddUser';
import UsersList from './component/User/UserList';

function App() {
	const DEFAULT_USERS = [
		{id: 1, name: 'Max', age: 31},
		{id: 2, name: 'Aimé', age: 24},
		{id: 3, name: 'Laurence', age: 55},
	];

	const [users, setUsers] = useState(DEFAULT_USERS);
	const newUserHandler = (newUser) => {
		setUsers((prevUsers) => [newUser, ...prevUsers]);
	};
	return (
		// React.Fragment can be call with empty <> </>
		<React.Fragment>
			<AddUser usersData={users} onNewUserSubmit={newUserHandler} />
			<UsersList usersData={users} />
		</React.Fragment>
	);
}

export default App;
