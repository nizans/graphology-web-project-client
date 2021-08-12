import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../../../common/FormField';

const strings = {
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: 'אימייל',
  send: 'שלח',
  invalidEmail: 'כתובת אימייל לא תקינה',
  required: 'שדה דרוש',
  invalidPhone: 'מספר לא תקין',
};

const ContantUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required(strings.required),
      email: Yup.string()
        .max(255)
        .required(strings.required)
        .email(strings.invalidEmail),

      phone: Yup.string()
        .max(255)
        .required(strings.required)
        .matches('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$', strings.invalidPhone),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex justify-center items-center p-16"
    >
      <FormField
        borderWidth="4"
        htmlFor="name"
        placeholder={strings.fullName}
        formik={formik}
      />
      <FormField
        borderWidth="4"
        htmlFor="phone"
        placeholder={strings.phoneNumber}
        formik={formik}
      />
      <FormField
        borderWidth="4"
        htmlFor="email"
        placeholder={strings.email}
        formik={formik}
      />
      <button
        type="submit"
        className="bg-p-brown px-10 py-2 rounded-xl mx-4 transform -translate-y-4  hover:bg-p-brown-dark _text-bold-3xl"
      >
        {strings.send}
      </button>
    </form>
  );
};

export default ContantUsForm;
