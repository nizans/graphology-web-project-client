import React from 'react';
import SplitScreen from 'components/common/SplitScreen';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';

const strings = {
  title: 'הזמנת ספר',
  subtitle: 'מלאו את הטופס וניצור איתכם קשר .לסגירת פרטים אחרונים',
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: 'אימייל',
  order: 'הזמן',
  notes: 'הערות',
  invalidEmail: 'כתובת אימייל לא תקינה',
  required: 'שדה דרוש',
  invalidPhone: 'מספר לא תקין',
};

const OrderBook = ({ book }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      notes: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required(strings.required),
      email: Yup.string().max(255).required(strings.required).email(strings.invalidEmail),

      phone: Yup.string()
        .required(strings.required)
        .matches('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$', strings.invalidPhone),
      notes: Yup.string().max(255),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <SplitScreen imgSrc={book.img}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col justify-evenly h-full">
        <h1 className="_text-bold-dark-6xl mr-4">{strings.title}</h1>
        <h3 className="_text-3xl mr-4">{strings.subtitle}</h3>
        <div className="grid grid-cols-2">
          <FormField borderWidth="2" formik={formik} htmlFor="name" placeholder={strings.fullName} />
          <FormField borderWidth="2" formik={formik} htmlFor="phone" placeholder={strings.phoneNumber} />
        </div>

        <FormField borderWidth="2" formik={formik} htmlFor="email" placeholder={strings.email} />
        <FormField borderWidth="2" formik={formik} htmlFor="notes" placeholder={strings.notes} />
        <button
          type="submit"
          style={{ width: 'fit-content' }}
          className="bg-p-brown _text-bold-dark-3xl px-12 py-1 rounded-xl  hover:bg-p-brown-dark w-full  mr-auto ml-4">
          {strings.order}
        </button>
      </form>
    </SplitScreen>
  );
};

export default OrderBook;
