import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';
import * as yup from 'yup';
import {
  Input,
  InputTitle,
  RegistForm,
  SubmitButton,
  ErrorMsg,
  CheckBox,
  CheckText,
} from './RegistrationForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must Confirm'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    toggle: false,
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  };

  const handleSubmit = (initialValues, { resetForm }) => {
    const credentials = ({ name, email, password }) => ({
      name,
      email,
      password,
    });

    dispatch(registration(credentials(initialValues)));

    resetForm();
  };

  return (
    <RegistForm>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
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
            <InputTitle>Confirm Password</InputTitle>
            <Input type="password" name="confirmPass" />
            <ErrorMessage
              render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              name="confirmPass"
            />
            <CheckBox>
              <Field type="checkbox" name="toggle" />
              <CheckText>I agreed to Presss Terms and Conditions</CheckText>
            </CheckBox>

            <SubmitButton type="submit" disabled={!values.toggle}>
              Registration
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </RegistForm>
  );
};

export default RegistrationForm;
