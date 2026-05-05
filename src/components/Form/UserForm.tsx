import { Field, Formik, ErrorMessage, Form, type FormikHelpers } from 'formik';
import type { User } from '../../types/types';
import * as yup from 'yup';
import css from './Form.module.css';

const initialValues: User = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  postalCode: 0,
  birthDate: new Date().toISOString().split('T')[0],
  sex: 'male',
  hobbies: [],
  personality: '',
  password: '',
  confirmPassword: '',
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
    .min(100, 'postal code contains at least 3 numbers'),
  birthDate: yup.date().required(isRequired),
  hobbies: yup.array().length(2, 'you should choose at least two hobbies'),
  personality: yup
    .string()
    .max(300, 'length has to be not more than 300 symbols'),
  isConfirmRules: yup
    .boolean()
    .oneOf([true], 'you should check the box to accept our rules')
    .required(),
});

export const UsersForm = () => {
  const handleSubmit = (values: User, formikHelpers: FormikHelpers<User>) => {
    console.log(values);
    // formikHelpers.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.formContainer}>
        <label>
          Name: <Field type="text" name="name" />
          <ErrorMessage name="name" className={css.errorState} component="p" />
        </label>

        <label>
          Surname: <Field type="text" name="surname" />
          <ErrorMessage
            name="surname"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          Email: <Field type="email" name="email" />
          <ErrorMessage name="email" className={css.errorState} component="p" />
        </label>

        <label>
          Phone: <Field type="text" name="phone" />
          <ErrorMessage name="phone" className={css.errorState} component="p" />
        </label>

        <label>
          Country: <Field type="text" name="country" />
          <ErrorMessage
            name="country"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          City: <Field type="text" name="city" />
          <ErrorMessage name="city" className={css.errorState} component="p" />
        </label>

        <label>
          Postal code: <Field type="text" name="postalCode" />
          <ErrorMessage
            name="postalCode"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          Birthdate: <Field type="date" name="birthDate" />
          <ErrorMessage
            name="birthDate"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          <Field type="radio" value="male" name="sex" />
          male
        </label>
        <label>
          <Field value="female" type="radio" name="sex" />
          female
        </label>
        <label>
          <Field value="other" type="radio" name="sex" />
          other
        </label>
        <fieldset className={css.hobyContainer}>
          <legend>Hobbies</legend>
          <label>
            <Field type="checkbox" value="skydiving" name="hobbies" />
            skydiving
          </label>
          <label>
            <Field type="checkbox" value="singing" name="hobbies" />
            singing
          </label>
          <label>
            <Field type="checkbox" value="fishing" name="hobbies" />
            fishing
          </label>
          <label>
            <Field type="checkbox" value="videogaming" name="hobbies" />
            videogaming
          </label>
          <label>
            <Field type="checkbox" value="working out" name="hobbies" />
            working out
          </label>
          <label>
            <Field type="checkbox" value="traveling" name="hobbies" />
            traveling
          </label>
          <label>
            <Field type="checkbox" value="reading" name="hobbies" />
            reading
          </label>
          <label>
            <Field type="checkbox" value="studying" name="hobbies" />
            studying
          </label>
          <label>
            <Field type="checkbox" value="learning lenguages" name="hobbies" />
            learning lenguages
          </label>
          <label>
            <Field type="checkbox" value="taking photos" name="hobbies" />
            taking photos
          </label>
          <label>
            <Field type="checkbox" value="dansing" name="hobbies" />
            dansing
          </label>
          <label>
            <Field type="checkbox" value="other" name="hobbies" />
            'other'
          </label>
          <ErrorMessage
            name="hobbies"
            className={css.errorState}
            component="p"
          />
        </fieldset>

        <label>
          Password: <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          Confirm Password: <Field type="password" name="confirmPassword" />
          <ErrorMessage
            name="confirmPassword"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          Personality: <Field as="textarea" name="personality" />
          <ErrorMessage
            name="personality"
            className={css.errorState}
            component="p"
          />
        </label>

        <label>
          Confirm rules:
          <Field type="checkbox" name="isConfirmRules" />
          <ErrorMessage
            name="isConfirmRules"
            className={css.errorState}
            component="p"
          />
        </label>
        <button className={css.submitBtn}> register</button>
      </Form>
    </Formik>
  );
};
