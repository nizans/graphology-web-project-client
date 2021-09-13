import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';
import { ARTICLES_API } from 'features/articles';
import TextEditor from 'components/common/TextEditor';
import ImageUploadInput from 'components/common/ImageUploadInput';
import createFormData from 'utils/createFormData';
import { useAddMutation } from 'utils/apiRequests';

const strings = {
  title: 'כותרת',
  sourceFrom: 'מקור הכתבה',
  sourceURL: 'לינק למקור הכתבה',
  publishDate: 'תאריך פרסום',
  send: 'העלה כתבה',
  content: 'תוכן הכתבה',
  contentPlaceholder: 'כתוב פה את תוכן הכתבה',
  update: 'עדכן כתבה',
  notext: 'לא הוכנס טסט',
  uploadImage: 'העלה תמונה',
};

const ArticleForm = ({ data: item }) => {
  const mutation = useAddMutation(ARTICLES_API.ADD);

  const [images, setImages] = useState([]);

  const initialValues = {
    title: item?.title || '',
    sourceFrom: item?.sourceFrom || '',
    sourceURL: item?.sourceURL || '',
    publishDate: item?.publishDate || '',
    text: item?.text || '',
  };

  const validation = Yup.object({
    title: Yup.string().required(),
    sourceFrom: Yup.string().required(),
    sourceURL: Yup.string().required(),
    publishDate: Yup.date().required().default(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      const formData = createFormData(values, images);
      mutation.mutate(formData);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full justify-between w-full">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <FormField formik={formik} htmlFor="sourceFrom" placeholder={strings.sourceFrom} />
        <FormField formik={formik} htmlFor="sourceURL" placeholder={strings.sourceURL} />
        <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />
        <ImageUploadInput images={images} onImageChange={setImages} />
        <button className="button" type="submit" style={{ width: 'fit-content' }}>
          {item ? strings.update : strings.send}
        </button>
      </div>
      <div className="flex flex-col w-full">
        <TextEditor
          title={strings.content}
          placeholder={strings.contentPlaceholder}
          name="text"
          handleChange={formik.handleChange}
          value={formik.values.text}
        />
      </div>
    </form>
  );
};

export default ArticleForm;
