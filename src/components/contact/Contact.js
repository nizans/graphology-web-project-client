import React, { useRef } from 'react';
import Section from '../common/Section';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../common/FormField';

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
  requestSubjects: ['נושא', 'נושא', 'נושא'],
};

const Contact = () => {
  const selectRef = useRef(null);
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
      requestSubject: Yup.string().oneOf(strings.requestSubjects),
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
          <select
            className="mr-16 ml-9 pr-8 bg-p-brown-light rounded-lg text-p-blue font-bold text-3xl hover:bg-p-brown-dark outline-none appearance-none"
            name="requestSubject"
            value={formik.values.requestSubject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={console.log(selectRef)}
          >
            {strings.requestSubjects.map((subj, i) => (
              <option
                key={i}
                value={subj + i.toString()}
                label={subj + i.toString()}
              />
            ))}
          </select>
        </div>
        <FormField
          className="w-full pr-40 pl-32"
          borderWidth="2"
          formik={formik}
          htmlFor="notes"
          placeholder={strings.notes}
        />
        <button
          type="submit"
          style={{ width: 'fit-content' }}
          className="bg-p-brown text-3xl text-p-blue-dark px-12 py-1 rounded-xl font-bold hover:bg-p-brown-dark m-auto"
        >
          {strings.send}
        </button>
      </form>
    </Section>
  );
};

export default Contact;
