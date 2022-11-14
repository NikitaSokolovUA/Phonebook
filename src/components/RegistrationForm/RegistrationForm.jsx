import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';
import * as yup from 'yup';
import { Input, RegistForm, SubmitButton } from './RegistrationForm.styled';

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
          <p>Name</p>
          <Input type="text" name="name" />
          <p>Email</p>
          <Input type="email" name="email" />
          <p>Password</p>
          <Input type="password" name="password" />

          <SubmitButton type="submit">Registration</SubmitButton>
        </Form>
      </Formik>
    </RegistForm>
  );
};

export default RegistrationForm;
