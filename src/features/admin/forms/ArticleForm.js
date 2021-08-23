import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';
import { postArticle } from 'helpers/apiRequests';
import TextEditor from 'components/common/TextEditor';

const strings = {
  title: 'כותרת',
  sourceFrom: 'מקור הכתבה',
  sourceURL: 'לינק למקור הכתבה',
  publishDate: 'תאריך פרסום',
  send: 'העלה כתבה',
  notext: 'לא הוכנס טסט',
  uploadImage: 'העלה תמונה',
};

const ArticleForm = () => {
  const handleSubmit = async values => {
    let data = new FormData();
    for (const [key, val] of Object.entries(values)) {
      data.append(key, val);
    }
    postArticle(data);
  };
  const [textValue, setTextValue] = useState('');
  const handleTextChange = text => {
    setTextValue(text);
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
      publishDate: Yup.date().required().default(),
    }),
    onSubmit: values => {
      if (!textValue) {
        alert(strings.notext);
        return;
      }
      values.text = textValue;
      handleSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full justify-between w-full">
      <div className="flex flex-col justify-between items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <FormField formik={formik} htmlFor="sourceFrom" placeholder={strings.sourceFrom} />
        <FormField formik={formik} htmlFor="sourceURL" placeholder={strings.sourceURL} />
        <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />
        <div className="mx-4">
          <label htmlFor="image" className="_text-3xl">
            {strings.uploadImage}
          </label>
          <input
            type="file"
            name="image"
            onChange={e => {
              formik.setFieldValue('image', e.target.files[0]);
            }}
          />
        </div>

        <button className="button" type="submit" style={{ width: 'fit-content' }}>
          {strings.send}
        </button>
      </div>
      <div className="flex flex-col w-full">
        <label className="xl:_text-lg"></label>
        <TextEditor formik={formik} htmlFor="text" onTextChange={handleTextChange} />
      </div>
    </form>
  );
};

export default ArticleForm;
