import React from 'react';
import ContantUsForm from './ContantUsForm';

const strings = {
  title: 'ייעוץ והכוונה',
  subTitle:
    'לקבלת מידע נוסף, אשמח לעמוד לשרותכם 054-8950837 או השאירו פרטים ואחזור אליכם בהקדם',
};

const ContactUs = () => {
  return (
    <div
      className="w-full bg-p-gray rounded-2xl text-p-blue flex flex-col items-center mb-40 text-3xl"
      style={{
        boxShadow: '15px 25px 0px 5px #FFFBF7, 15px 25px 0px 8px #DFBBA6',
      }}
    >
      <h1 className="font-bold text-8xl text-p-blue-dark pt-6">
        {strings.title}
      </h1>
      <h3 className="px-60 text-center">{strings.subTitle}</h3>
      <ContantUsForm />
    </div>
  );
};

export default ContactUs;
