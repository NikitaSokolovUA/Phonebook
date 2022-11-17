import { Formik, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  ContactFormTitle,
  FormContainer,
  Input,
  SubmitButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().min(7, 'min 7 symbols').max(20),
});

const ContactForm = ({ toggleModal }) => {
  const InitialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitForm = (InitialValues, { resetForm }) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === InitialValues.name.toLowerCase()
      )
    ) {
      return alert(`${InitialValues.name} is already in contact list`);
    }

    dispatch(addContact(InitialValues));
    toggleModal();
    resetForm();
  };

  return (
    <FormContainer>
      <ContactFormTitle>Add new contact</ContactFormTitle>
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

          <SubmitButton type="submit">Save</SubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
