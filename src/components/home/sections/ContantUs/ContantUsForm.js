import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
      className="flex justify-center items-center text-p-blue-dark p-16"
    >
      <div className="grid grid-rows-2 mx-4">
        <input
          className="placeholder-p-blue bg-p-gray border-p-blue border-b-4 "
          placeholder={strings.fullName}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <label htmlFor="phone" className="text-lg">
          {formik.touched.name && formik.errors.name && formik.errors.name}
        </label>
      </div>

      <div className="grid grid-rows-2 mx-4">
        <input
          className="placeholder-p-blue bg-p-gray border-p-blue border-b-4 "
          placeholder={strings.phoneNumber}
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <label htmlFor="phone" className="text-lg">
          {formik.touched.phone && formik.errors.phone && formik.errors.phone}
        </label>
      </div>

      <div className="grid grid-rows-2 mx-4">
        <input
          className="placeholder-p-blue bg-p-gray border-p-blue border-b-4"
          placeholder={strings.email}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <label htmlFor="phone" className="text-lg">
          {formik.touched.email && formik.errors.email && formik.errors.email}
        </label>
      </div>

      <button
        type="submit"
        className="bg-p-brown px-10 py-2 rounded-xl mx-4 transform -translate-y-4 font-bold hover:bg-p-brown-dark"
      >
        {strings.send}
      </button>
    </form>
  );
};

export default ContantUsForm;
