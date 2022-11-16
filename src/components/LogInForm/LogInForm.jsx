import { Formik, Form, ErrorMessage } from 'formik';
import {
  SubmitButton,
  Input,
  LogForm,
  InputTitle,
  ErrorMsg,
} from './LogInForm.styled';
import * as yup from 'yup';
import { login } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().required('Input Email'),
  password: yup
    .string()
    .required('Password is Required')
    .min(8, 'min 8 symbols')
    .max(16),
});

const LogInForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const handleSubmit = (initialValues, { resetForm }) => {
    dispatch(login(initialValues));
    resetForm();
  };
  return (
    <LogForm>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
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

          <SubmitButton>Log In</SubmitButton>
        </Form>
      </Formik>
    </LogForm>
  );
};

export default LogInForm;
