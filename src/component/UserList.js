import User from './User';
import style from './UserList.module.css';

function UsersList(props) {
	return (
		<li className={style['user-list']}>
			{props.usersData.map((user) => (
				<User key={user.id} name={user.name} age={user.age} />
			))}
		</li>
	);
}

export default UsersList;
