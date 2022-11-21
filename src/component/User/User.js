import style from './User.module.css';

function User(props) {
	const label = props.name + ` (${props.age} years old)`;
	return (
		<ul className={style.user}>
			<div>{label}</div>
		</ul>
	);
}

export default User;
