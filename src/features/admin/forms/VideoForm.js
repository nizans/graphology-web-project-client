import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormField from 'components/UI/FormField';
import ResponsivePlayer from 'components/common/ResponsivePlayer';
import { postVideo } from 'helpers/apiRequests';

const strings = {
  title: 'שם הסרטון',
  description: 'תיאור',
  descriptionPlaceholder: 'כתוב פה את תיאור הסרטון',
  url: 'לינק לסרטון',
  required: 'שדה דרוש',
  urlInvalid: 'הלינק אינו תקין',
  send: 'שלח',
};

const VideoForm = () => {
  const handleSubmit = values => {
    const data = new FormData();
    for (const [key, val] of Object.entries(values)) {
      data.append(key, val);
    }
    postVideo(data);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      url: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required(strings.required),
      description: Yup.string(),
      url: Yup.string().url(strings.urlInvalid).required(strings.required),
    }),
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="flex flex-col items-start h-full w-full flex-wrap">
          <FormField formik={formik} htmlFor="title" placeholder={strings.title} className="w-1/2" />
          <div className="w-full my-2 mx-4">
            <label htmlFor="description" className="_text-2xl">
              {strings.description}
            </label>
            <textarea
              placeholder={strings.descriptionPlaceholder}
              className="w-full h-full border-p-blue border-2 _text-xl"
              name="description"
              id="description"
              onChange={e => {
                formik.values.description = e.target.value;
              }}
            />
          </div>
          <FormField formik={formik} className="_text-xl" htmlFor="url" placeholder={strings.url} className="w-full" />
          <div className="w-full flex justify-center">
            <div className="w-1/2">
              <ResponsivePlayer url={!formik.errors.url && formik.values.url} />
            </div>
          </div>

          <button className="button mr-auto" type="submit" style={{ width: 'fit-content' }}>
            {strings.send}
          </button>
        </div>
      </form>
    </>
  );
};

export default VideoForm;
