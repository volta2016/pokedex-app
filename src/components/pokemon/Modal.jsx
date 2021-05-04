import React from "react";
import { ReactComponent as Close } from "../../assets/img/close.svg";

const Modal = (props) =>
	props.isOpen ? (
		<div className="modal">
			<figure onClick={props.onClose} className="modal__close">
				<Close className="modal__close-icon" />
			</figure>
			<div className="modal__container">{props.children}</div>
		</div>
	) : (
		""
	);

export default Modal;
