import * as yup from 'yup';

export const leadSchema = yup.object({
  // Lead Information:
  name: yup.string().required('Name Is required'),
  email: yup.string().email().required('Email Is required'),
  phoneNumber: yup.number()
  .typeError('Phone number must be a number')
  .min(1000000000, 'Phone number is invalid')
  .max(99999999999999, 'Phone number is invalid')
  .required('Phone Number is required'),
});
