import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';
import * as yup from 'yup';
import {
  Input,
  InputTitle,
  RegistForm,
  SubmitButton,
  ErrorMsg,
} from './RegistrationForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().min(8).max(16),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (initialValues, { resetForm }) => {
    dispatch(registration(initialValues));
    resetForm();
  };

  return (
    <RegistForm>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputTitle>Name</InputTitle>
          <Input type="text" name="name" />
          <ErrorMessage
            render={msg => <ErrorMsg>{msg}</ErrorMsg>}
            name="name"
          />
          <InputTitle>Email</InputTitle>
          <Input type="email" name="email" />
          <ErrorMessage
            render={msg => <ErrorMsg>{msg}</ErrorMsg>}
            name="email"
          />
          <InputTitle>Password</InputTitle>
          <Input type="password" name="password" />
          <ErrorMessage
            render={msg => <ErrorMsg>{msg}</ErrorMsg>}
            name="password"
          />

          <SubmitButton type="submit">Registration</SubmitButton>
        </Form>
      </Formik>
    </RegistForm>
  );
};

export default RegistrationForm;
