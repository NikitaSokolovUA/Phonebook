import * as yup from 'yup';

const schemaContactForm = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().min(7, 'min 7 symbols').max(20),
});

export default schemaContactForm;
