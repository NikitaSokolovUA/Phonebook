import {
  ContactItem,
  ListContact,
  Contact,
  ContactNumber,
  DeleteBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';

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
            <Contact>
              {name} <ContactNumber>{number}</ContactNumber>
            </Contact>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Deleted
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ListContact>
  );
};

export default ContactList;
