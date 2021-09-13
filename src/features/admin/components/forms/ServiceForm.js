import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';
import TextEditor from 'components/common/TextEditor';
import { SERVICES_API } from 'features/services';
import ImageUploadInput from 'components/common/ImageUploadInput';
import createFormData from 'utils/createFormData';
import { useAddMutation } from 'utils/apiRequests';

const strings = {
  title: 'שם השירות',
  description: 'תיאור השירות',
  descriptionPlaceholder: 'כתוב פה את תיאור השירות',
  required: 'שדה דרוש',
  send: 'העלה שירות',
  update: 'עדכן שירות',
  uploadImage: 'העלה תמונה',
};

const ServiceForm = ({ data: item }) => {
  const mutation = useAddMutation(SERVICES_API.ADD);
  const [images, setImages] = useState([]);

  const initialValues = {
    title: item?.title || '',
    description: item?.description || '',
  };
  const validation = Yup.object({
    title: Yup.string().required(strings.required),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      const formData = createFormData(values, images);
      mutation.mutate(formData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full w-full ">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <ImageUploadInput onImageChange={setImages} images={images.map(img => img.full)} />
        <button className="button" type="submit" style={{ width: 'fit-content' }}>
          {item ? strings.update : strings.send}
        </button>
      </div>
      <div className="flex flex-col w-full">
        <TextEditor
          title={strings.description}
          placeholder={strings.descriptionPlaceholder}
          name="description"
          handleChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
    </form>
  );
};

export default ServiceForm;
