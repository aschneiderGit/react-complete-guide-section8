import React from 'react';
import UsersList from './component/UserList';

function App() {
	const users = [
		{id: 1, name: 'Max', age: 31},
		{id: 2, name: 'Aimé', age: 24},
		{id: 3, name: 'Laurence', age: 55},
	];
	return (
		<div>
			<UsersList usersData={users} />
		</div>
	);
}

export default App;
