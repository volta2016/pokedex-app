import { useState } from "react";

const useModal = () => {
	const [modal, setModal] = useState(false);

	const handleCloseModal = () => {
		setModal(false);
	};

	const handleOpenModal = () => {
		setModal(true);
	};

	return { modal, handleCloseModal, handleOpenModal };
};

export default useModal;
