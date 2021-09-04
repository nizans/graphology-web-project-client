import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';

import TextEditor from 'components/common/TextEditor';

const strings = {
  title: 'כותרת',
  subtitle: 'תת כותרת',
  publishDate: 'תאריך פרסום',
  send: 'העלה כתבה',
  notext: 'לא הוכנס טסט',
  uploadImage: 'העלה תמונה',
  required: 'שדה דרוש',
};

const CouchForm = () => {
  const handleSubmit = async values => {
    let data = new FormData();
    for (const [key, val] of Object.entries(values)) {
      data.append(key, val);
    }
    postContent(data);
  };
  const [textValue, setTextValue] = useState('');
  const handleTextChange = text => {
    setTextValue(text);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      subtitle: '',
      image: '',
      publishDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required(strings.required),
      subtitle: Yup.string(),
      publishDate: Yup.date().required(strings.required).default(),
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
        <div className="px-4 py-4  w-full">
          <label htmlFor="subtitle" className="_text-2xl">
            {strings.subtitle}
          </label>
          <textarea className="w-full h-full border-p-blue border-2 _text-xl" name="subtitle" />
        </div>
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

export default CouchForm;
