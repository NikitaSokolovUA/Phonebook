import * as yup from 'yup';

const schemaLogin = yup.object().shape({
  email: yup.string().required('Input Email'),
  password: yup
    .string()
    .required('Password is Required')
    .min(8, 'min 8 symbols')
    .max(16),
});

export default schemaLogin;
