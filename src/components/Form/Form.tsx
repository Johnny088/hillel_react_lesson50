import { Formik } from 'formik';
import type { User } from '../../types/types';
import * as yup from 'yup';
const initialValues: User = {
  name: '',
  surname: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
};

const phonePattern = /^\+380\d{9}$/;
const passwordPattern = /(?=.*\d+).{8,}/;

const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'required minimun 2 characters')
    .required('this field is required'),
  surname: yup.string().required('this field is required'),
  email: yup
    .string()
    .email('you should use your real email')
    .required('this field is required'),
  phone: yup
    .string()
    .matches(phonePattern, "the phone's format has to be +380xxxxxxxxx")
    .required('this field is required'),
  password: yup
    .string()
    .required('this field is required')
    .min(8, 'the password should contain minimum 8 characters')
    .matches(passwordPattern, 'the password should contain at least 1 number'),
});
export const Form = () => {
  const handleSubmit = () => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <form></form>
    </Formik>
  );
};
