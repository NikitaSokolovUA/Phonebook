import { Overlay, ModalWindow, CloseBtn } from './Modal.styled';
import { PropTypes } from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import { useEffect } from 'react';

const Modal = ({ toggleModal, children }) => {
  const closeModalOnOverlay = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const closeModalOnEscPush = e => {
      const KEY_CODE_ESCAPE = 'Escape';

      if (e.code === KEY_CODE_ESCAPE) {
        toggleModal();
      }
    };

    window.addEventListener('keydown', closeModalOnEscPush);

    return () => window.removeEventListener('keydown', closeModalOnEscPush);
  }, [toggleModal]);

  const handleCloseModal = () => {
    toggleModal();
  };

  return (
    <Overlay onClick={closeModalOnOverlay}>
      <ModalWindow>
        <CloseBtn type="button" onClick={handleCloseModal}>
          <GrFormClose />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
