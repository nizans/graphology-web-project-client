import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';
import TextEditor from 'components/common/TextEditor';
import { useAddService } from 'features/services';

const strings = {
  title: 'שם השירות',
  text: 'תיאור',
  required: 'שדה דרוש',
  send: 'שלח',
  uploadImage: 'העלה תמונה',
};

const ServiceForm = () => {
  const mutation = useAddService();

  const handleSubmit = async values => {
    let data = new FormData();
    for (const [key, val] of Object.entries(values)) {
      data.append(key, val);
    }
    mutation.mutate(data);
  };
  const [textValue, setTextValue] = useState('');

  const handleTextChange = text => {
    setTextValue(text);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required(strings.required),
    }),
    onSubmit: values => {
      if (!textValue) {
        alert(strings.notext);
        return;
      }
      values.description = textValue;
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full w-full ">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
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

export default ServiceForm;
