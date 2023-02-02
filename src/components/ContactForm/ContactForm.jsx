import { Formik, Form, ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import schemaContactForm from 'schema/schemaContactForm';
import {
  ContactFormTitle,
  Input,
  MaskInput,
  LabelName,
  ButtonWrapper,
  Btn,
  ErrorMsg,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const phoneNumberMask = [
  '+',
  '3',
  '8',
  ' ',
  '(',
  '0',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

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
    <>
      <ContactFormTitle>Add new contact</ContactFormTitle>
      <Formik
        initialValues={InitialValues}
        validationSchema={schemaContactForm}
        onSubmit={onSubmitForm}
      >
        {({ dirty, errors }) => (
          <Form>
            <LabelName htmlFor="name">Name</LabelName>
            <Input type="text" name="name" id="name" error={errors.number} />
            <ErrorMessage name="name">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>

            <LabelName htmlFor="phone">Phone Number</LabelName>
            <Field name="number">
              {({ field }) => (
                <MaskInput
                  {...field}
                  mask={phoneNumberMask}
                  id="phone"
                  placeholder="+38 (0__) ___-__-__"
                  type="text"
                  error={errors.number}
                />
              )}
            </Field>
            <ErrorMessage name="number">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>

            <ButtonWrapper>
              <Btn type="reset" disabled={!dirty}>
                Reset
              </Btn>
              <Btn type="submit">Submit</Btn>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
