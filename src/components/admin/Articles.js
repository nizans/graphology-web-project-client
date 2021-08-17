import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../common/FormField';

const strings = {
  title: 'כותרת',
  sourceFrom: 'מקור הכתבה',
  sourceURL: 'לינק למקור הכתבה',
  publishDate: 'תאריך פרסום',
  send: 'העלה כתבה',
};
const Articles = () => {
  const handleSubmit = async values => {
    let data = new FormData();
    for (const [key, val] of Object.entries(values)) {
      data.append(key, val);
    }
    const response = await fetch('/api/articles', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
      }),
      body: data,
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      sourceFrom: '',
      sourceURL: '',
      image: '',
      publishDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      sourceFrom: Yup.string().required(),
      sourceURL: Yup.string().required(),
      publishDate: Yup.date().required(),
    }),
    onSubmit: values => {
      handleSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
      <FormField formik={formik} htmlFor="sourceFrom" placeholder={strings.sourceFrom} />
      <FormField formik={formik} htmlFor="sourceURL" placeholder={strings.sourceURL} />
      <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />

      <input
        type="file"
        name="image"
        onChange={e => {
          formik.setFieldValue('image', e.target.files[0]);
        }}
      />
      <button type="submit">{strings.send}</button>
    </form>
  );
};

export default Articles;
