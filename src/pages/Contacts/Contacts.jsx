import { ContactTitle, MainTitle, AddContactBtn } from './Contacts.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useAuth } from 'hooks/useAuth';
import NotLoggedInContainer from 'components/NotLoggedInContainer';
import Container from 'components/Container';

const Contacts = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        {isLoggedIn ? (
          <>
            {/* <MainTitle>PHONEBOOK</MainTitle>
            <ContactForm /> */}
            <ContactTitle>CONTACTS</ContactTitle>
            <AddContactBtn type="button">Add Contact</AddContactBtn>
            <Filter />
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
