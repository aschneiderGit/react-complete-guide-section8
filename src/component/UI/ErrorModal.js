import style from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDom from 'react-dom';

const BackDrop = (props) => {
	return <div className={style.backdrop} onClick={props.onClick} />;
};

const Modal = (props) => {
	return (
		<Card className={style.modal}>
			<header className={style.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={style.content}>
				<p>{props.message}</p>
			</div>
			<footer className={style.actions}>
				<Button onClick={props.onClick}> OK</Button>
			</footer>
		</Card>
	);
};
function ErrorModal(props) {
	return (
		<>
			{ReactDom.createPortal(
				<BackDrop onClick={props.onCloseModal} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDom.createPortal(
				<Modal
					message={props.message}
					title={props.title}
					onClick={props.onCloseModal}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
}

export default ErrorModal;
