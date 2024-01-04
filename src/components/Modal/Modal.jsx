import { useState } from 'react';
import './modal.css'
import { createPortal } from "react-dom";
import Button from '../Button';

let portalElement = document.querySelector('#portal')

const Modal = ({ title, deleteCategory, setDeleteCategory, onDeleteDataToApi }) => {
	let [flagshowMessageDelete, setFlagshowMessageDelete] = useState(true)
	const onCloseModal = () => {
		setDeleteCategory(false)
	}
	const onDeleteHandler = () => {
		
		setFlagshowMessageDelete(false)
		setTimeout(() => {onDeleteDataToApi()}, 2000);
	}

	let modalContentDeleteQuestion = (
		<div className='modal'>
			<h3>Do you want delete `{title}` category? </h3>
			<div className='modal__button'>
				<Button title={`Delete`} onClickFunction={onDeleteHandler}/>
				<Button title={`Cancel`} onClickFunction={onCloseModal}/>
			</div>

		</div>
	)

	let modalContentDeleted = (
		<div className='modal'>
			<p>Category <b>"{title}"</b> was deleted </p>
		</div>
	)

	let modalContent = flagshowMessageDelete?modalContentDeleteQuestion:modalContentDeleted;
	console.log(flagshowMessageDelete);
	return deleteCategory ? createPortal(modalContent, portalElement) : null;
}

export default Modal;
