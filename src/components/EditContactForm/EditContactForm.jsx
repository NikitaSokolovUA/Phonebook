import { Formik, Form, ErrorMessage } from 'formik';
import { useContact } from 'hooks/useContact';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';
import {
  ContactFormTitle,
  FormContainer,
  Input,
  SubmitButton,
} from './EditContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().min(7, 'минимум 7 символов').max(20),
});

const EditContactForm = ({ id, toggleModal }) => {
  const dispatch = useDispatch();
  const InitialValues = useContact(id);
  const contacts = useSelector(selectContacts);

  const onSubmitForm = (credentials, { resetForm }) => {
    const submitValues = {
      id,
      credentials,
    };
    const contactsWithoutEdit = contacts.filter(contact => contact.id !== id);

    if (
      contactsWithoutEdit.find(
        contact =>
          contact.name.toLowerCase() ===
          submitValues.credentials.name.toLowerCase()
      )
    ) {
      return alert(
        `${submitValues.credentials.name} is already in contact list`
      );
    }

    dispatch(editContact(submitValues));
    toggleModal();
    resetForm();
  };

  return (
    <FormContainer>
      <ContactFormTitle>Edit Contact</ContactFormTitle>
      <Formik
        initialValues={InitialValues}
        validationSchema={schema}
        onSubmit={onSubmitForm}
      >
        <Form>
          <Input type="text" name="name" />
          <ErrorMessage name="name" />
          <Input type="text" name="number" />
          <ErrorMessage name="number" />

          <SubmitButton type="submit">Change</SubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default EditContactForm;
