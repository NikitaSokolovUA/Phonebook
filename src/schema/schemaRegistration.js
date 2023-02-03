import * as yup from 'yup';

const schemaRegistration = yup.object().shape({
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

export default schemaRegistration;
