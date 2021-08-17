import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../common/FormField';
import { NavLink, useLocation } from 'react-router-dom';

const strings = {
  required: 'שדה דרוש',
  invalidEmail: 'כתובת אימייל לא תקינה',
  passwordMinLenghth: 'הסיסמא צריכה להכיל לפחות 6 תוים',
  email: 'אימייל',
  password: 'סיסמא',
  login: 'התחבר',
  title: 'התחברות מנהל',
  forgotPassword: 'שחכתי סיסמא',
};
const Login = () => {
  let location = useLocation();
  console.log(location);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(strings.required).email(strings.invalidEmail),
      password: Yup.string().min(6, strings.passwordMinLenghth).required(strings.required),
    }),
    onSubmit: values => alert(JSON.stringify(values, null, 2)),
  });
  return (
    <div className=" flex justify-center items-center border-p-gray-dark border-2 px-14 py-9 rounded-2xl">
      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
        <h1 className="_text-bold-3xl pb-4">{strings.title}</h1>
        <FormField formik={formik} htmlFor="email" placeholder={strings.email} />
        <FormField formik={formik} htmlFor="password" type="password" placeholder={strings.password} />
        <button className="bg-p-brown _text-3xl px-12 py-1 rounded-xl hover:bg-p-brown-dark">{strings.login}</button>
        <NavLink to="/admin/restore">{strings.forgotPassword}</NavLink>
      </form>
    </div>
  );
};

export default Login;
