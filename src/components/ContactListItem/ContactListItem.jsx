import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import {
  ContactName,
  ContactNumber,
  ContactListBtn,
  ContactItemBtn,
} from './ContactListItem.styled';
import { useState } from 'react';
import Modal from 'components/Modal';
import EditContactForm from 'components/EditContactForm';

const ContactListItem = ({ id, name, number }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={() => setModalIsOpen(!modalIsOpen)}>
          <EditContactForm
            id={id}
            toggleModal={() => setModalIsOpen(!modalIsOpen)}
          />
        </Modal>
      )}
      <div>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </div>
      <ul>
        <ContactListBtn>
          <ContactItemBtn
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Deleted
          </ContactItemBtn>
        </ContactListBtn>
        <ContactListBtn>
          <ContactItemBtn
            type="button"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            Edit
          </ContactItemBtn>
        </ContactListBtn>
      </ul>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
