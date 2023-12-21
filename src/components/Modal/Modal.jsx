import { useState } from 'react';
import './modal.css'
import { createPortal } from "react-dom";
import Button from '../Button';

let portalElement = document.querySelector('#portal')

const Modal = ({ title, deleteCategory, setDeleteCategory }) => {
	
	const onCloseModal = () => {
		setDeleteCategory(false)
	}

	let modalContent = (
		<div>
			<h3>Do you want delete `{title}` category? </h3>
		<div className='commonportal'>
			<Button title={`Delete`}/>
			<Button title={`Cancel`} onClickFunction={onCloseModal}/>
		</div>
		</div>
	)


	return deleteCategory ? createPortal(modalContent, portalElement) : null;
}

export default Modal;
