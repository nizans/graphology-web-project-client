import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';
import { NavLink } from 'react-router-dom';
import Spinner from 'components/UI/Spinner';
import { useContext } from 'react';
import { AuthContext } from 'context/authContext';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
const strings = {
  required: 'שדה דרוש',
  invalidEmail: 'כתובת אימייל לא תקינה',
  passwordMinLenghth: 'הסיסמא צריכה להכיל לפחות 6 תוים',
  email: 'אימייל',
  password: 'סיסמא',
  login: 'התחבר',
  title: 'התחברות מנהל',
  forgotPassword: 'שחכתי סיסמא',
  successLogin: 'התחברת בהצלחה, מיד תועבר',
};

const Login = () => {
  const { login, isFetching, error, success, reset } = useContext(AuthContext);
  const { push } = useHistory();

  useEffect(() => () => reset(), [reset]);

  useEffect(() => {
    if (success) push('/admin');
  }, [success, push]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(strings.required).email(strings.invalidEmail),
      password: Yup.string().min(6, strings.passwordMinLenghth).required(strings.required),
    }),
    onSubmit: values => {
      login(values);
    },
  });

  return (
    <div className=" flex justify-center items-center border-p-gray-dark border-2 px-14 py-9 rounded-2xl pt-12">
      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
        <h1 className="_text-bold-3xl pb-4">{strings.title}</h1>

        <FormField formik={formik} htmlFor="email" placeholder={strings.email} />
        <FormField formik={formik} htmlFor="password" type="password" placeholder={strings.password} />

        <div className="h-12 w-full flex justify-center items-center">
          {isFetching ? (
            <Spinner size={12} />
          ) : (
            <div className="flex flex-col justify-center items-center">
              <button type="submit" className="bg-p-brown _text-3xl px-12 py-1 rounded-xl hover:bg-p-brown-dark ">
                {strings.login}
              </button>
              <NavLink to="/admin/restore">{strings.forgotPassword}</NavLink>
            </div>
          )}
        </div>

        <label className="h-10 mt-2">{(error && error.message) || (success && strings.successLogin)}</label>
      </form>
    </div>
  );
};

export default Login;
