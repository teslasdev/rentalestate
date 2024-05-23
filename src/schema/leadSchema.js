import * as yup from 'yup';

export const leadSchema = yup.object({
  // Lead Information:
  leadName: yup.string().required('Lead Name Is required'),
  leadEmail: yup.string().email().required('Lead Email Is required'),
  leadPhoneNumber: yup.number()
  .typeError('Phone number must be a number')
  .min(1000000000, 'Phone number is invalid')
  .max(99999999999999, 'Phone number is invalid')
  .required('Lead Phone Number is required'),
});
