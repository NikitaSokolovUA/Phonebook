import { ContactTitle, MainTitle } from './Contacts.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { useAuth } from 'hooks/useAuth';
import NotLoggedInContainer from 'components/NotLoggedInContainer';
import Container from 'components/Container';
import { useState } from 'react';
import Modal from 'components/Modal';
import EditMenu from 'components/EditMenu';

const Contacts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        {isLoggedIn ? (
          <>
            <MainTitle>PHONEBOOK</MainTitle>
            {modalIsOpen && (
              <Modal toggleModal={() => setModalIsOpen(!modalIsOpen)}>
                <ContactForm toggleModal={() => setModalIsOpen(!modalIsOpen)} />
              </Modal>
            )}
            <EditMenu toggleModal={() => setModalIsOpen(!modalIsOpen)} />
            <ContactTitle>CONTACTS</ContactTitle>
            <ContactList />
          </>
        ) : (
          <NotLoggedInContainer />
        )}
      </Container>
    </>
  );
};

export default Contacts;
