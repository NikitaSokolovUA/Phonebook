import { Formik, Form, ErrorMessage } from 'formik';
import {
  SubmitButton,
  Input,
  LogForm,
  InputTitle,
  ErrorMsg,
} from './LogInForm.styled';
import schemaLogin from 'schema/schemaLogin';
import { login } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
import PasswordShowHide from 'components/PasswordShowHide';

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
        validationSchema={schemaLogin}
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
          <Input type="password" name="password" component={PasswordShowHide} />
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
