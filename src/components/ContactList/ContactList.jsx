import { ContactItem, ListContact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import ContactListItem from 'components/ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilterContacts);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchContacts(controller));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <ListContact>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </ContactItem>
        );
      })}
    </ListContact>
  );
};

export default ContactList;
