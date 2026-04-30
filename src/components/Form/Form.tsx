import { Field, Formik, ErrorMessage } from 'formik';
import type { User } from '../../types/types';
import * as yup from 'yup';
import css from './Form.module.css';

const initialValues: User = {
  name: '',
  surname: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  postalCode: 0,
  birthDate: new Date(),
  sex: 'male',
  hobbies: [],
  personality: '',
  isConfirmRules: true,
};

const phonePattern = /^\+380\d{9}$/;
const passwordPattern = /(?=.*\d+).{8,}/;
const isRequired = 'this field is required';

const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'required minimun 2 characters')
    .required(isRequired),
  surname: yup.string().required('this field is required'),
  email: yup
    .string()
    .email('you should use your real email')
    .required(isRequired),
  phone: yup
    .string()
    .matches(phonePattern, "the phone's format has to be +380xxxxxxxxx")
    .required(isRequired),
  password: yup
    .string()
    .required(isRequired)
    .min(8, 'the password should contain minimum 8 characters')
    .matches(passwordPattern, 'the password should contain at least 1 number'),
  confirmPassword: yup
    .string()
    .required(isRequired)
    .min(8, 'the password should contain minimum 8 characters')
    .oneOf([yup.ref('password')], 'password must match'),
  country: yup
    .string()
    .required(isRequired)
    .min(4, 'any country has at least 4 letters'),
  city: yup.string().required('this field is required').min(2, 'min 2 letters'),
  postalCode: yup
    .number()
    .required(isRequired)
    .min(3, 'postal code contains at least 3 numbers')
    .max(10, "postal code can't have more than 10 numbers"),
  birthDate: yup.date().required(isRequired),
  isConfirmRules: yup
    .boolean()
    .oneOf([true], 'you should check the box to accept our rules')
    .required(),
});
export const Form = () => {
  const handleSubmit = () => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <form className={css.formContainer}>
        <label htmlFor="">
          Name: <Field type="text" name="name" />
        </label>
      </form>
    </Formik>
  );
};
