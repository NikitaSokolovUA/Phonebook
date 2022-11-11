import { ContactTitle, Container, MainTitle } from './Contacts.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <>
      <Container>
        <MainTitle>PHONEBOOK</MainTitle>
        <ContactForm />
        <ContactTitle>CONTACTS</ContactTitle>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default Contacts;
