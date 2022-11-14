import { Formik, Form } from 'formik';
import { SubmitButton, Input, LogForm } from './LogInForm.styled';
import * as yup from 'yup';
import { login } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().min(8).max(16),
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
          <p>Email</p>
          <Input type="email" name="email" />
          <p>Password</p>
          <Input type="password" name="password" />
          <SubmitButton>Log In</SubmitButton>
        </Form>
      </Formik>
    </LogForm>
  );
};

export default LogInForm;
