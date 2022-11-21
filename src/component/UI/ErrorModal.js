import style from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

function ErrorModale(props) {
	return (
		<div>
			<div className={style.backdrop} onClick={props.onCloseModal} />
			<Card className={style.modal}>
				<header className={style.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={style.content}>
					<p>{props.message}</p>
				</div>
				<footer className={style.actions}>
					<Button onClick={props.onCloseModal}> OK</Button>
				</footer>
			</Card>
		</div>
	);
}

export default ErrorModale;
