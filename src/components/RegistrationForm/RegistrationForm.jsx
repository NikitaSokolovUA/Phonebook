import PasswordShowHide from 'components/PasswordShowHide';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';
import schemaRegistration from 'schema/schemaRegistration';
import PasswordStrengthBar from 'react-password-strength-bar';

import {
  Input,
  InputTitle,
  RegistForm,
  SubmitButton,
  ErrorMsg,
  CheckBox,
  CheckText,
} from './RegistrationForm.styled';

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
        validationSchema={schemaRegistration}
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
            <Input
              type="password"
              name="password"
              component={PasswordShowHide}
            />
            <PasswordStrengthBar password={values.password} />
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
