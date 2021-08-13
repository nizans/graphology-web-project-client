import React from 'react';
import Section from '../common/Section';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../common/FormField';
import DropDown from '../common/DropDown';

const strings = {
  title: 'צור קשר',
  subtitle:
    'לקבלת מידע נוסף, אשמח לעמוד לשרותכם 054-8950837 או השאירו פרטים ואחזור אליכם בהקדם',
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: 'אימייל',
  notes: 'הערות',
  invalidEmail: 'כתובת אימייל לא תקינה',
  required: 'שדה דרוש',
  invalidPhone: 'מספר לא תקין',
  send: 'שלח',
  requestSubject: 'נושא פניה',
  requestSubjects: ['נושא-1', 'נושא-2', '-3'],
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      notes: '',
      requestSubject: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required(strings.required),
      email: Yup.string()
        .max(255)
        .required(strings.required)
        .email(strings.invalidEmail),

      phone: Yup.string()
        .required(strings.required)
        .matches('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$', strings.invalidPhone),

      notes: Yup.string().max(255),
      requestSubject: Yup.string().oneOf(strings.requestSubjects, 'ssd'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Section>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-evenly items-center h-full"
      >
        <h1 className="font-bold text-7xl text-p-blue-dark py-4">
          {strings.title}
        </h1>
        <h3 className="text-p-blue text-3xl py-4">{strings.subtitle}</h3>
        <div className="grid grid-cols-2 py-4">
          <FormField
            className="w-full px-14"
            borderWidth="2"
            formik={formik}
            htmlFor="name"
            placeholder={strings.fullName}
          />
          <FormField
            className="w-full px-14"
            borderWidth="2"
            formik={formik}
            htmlFor="phone"
            placeholder={strings.phoneNumber}
          />

          <FormField
            className="w-full px-14"
            borderWidth="2"
            formik={formik}
            htmlFor="email"
            placeholder={strings.email}
          />

          <div className={`grid grid-rows-2 mx-4  `}>
            <DropDown
              headTitle="בחר נושא"
              buttonClassName="bg-p-brown-light mx-14 _text-3xl pl-20 max-w-1/2"
              elementClassName="bg-p-brown mx-14 _text-3xl"
              elements={strings.requestSubjects.map((i) => (
                <span value={i} className="pr-2 ">
                  {i}
                </span>
              ))}
              handleValueChange={(newValue) =>
                (formik.values.requestSubject = newValue.props.value)
              }
            />
            <label htmlFor="requestSubject" className="_text-lg">
              {formik.touched.requestSubject &&
                formik.errors.requestSubject &&
                formik.errors.requestSubject}
            </label>
          </div>
          <FormField
            className="w-full col-span-2 px-14"
            borderWidth="2"
            formik={formik}
            htmlFor="notes"
            placeholder={strings.notes}
          />
        </div>

        <button
          type="submit"
          style={{ width: 'fit-content' }}
          className="bg-p-brown _text-bold-dark-3xl px-12 py-1 rounded-xl hover:bg-p-brown-dark m-auto"
        >
          {strings.send}
        </button>
      </form>
    </Section>
  );
};

export default Contact;
