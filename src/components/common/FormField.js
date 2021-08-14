import React from 'react';

const FormField = ({
  htmlFor,
  formik,
  placeholder,
  borderWidth,
  type,
  className,
}) => {
  return (
    <div className={`grid grid-rows-2 mx-4 ${className ? className : ''}`}>
      <input
        className={`placeholder-p-blue bg-transparent border-p-blue border-b-${borderWidth} _text-3xl outline-none`}
        placeholder={placeholder}
        id={htmlFor}
        name={htmlFor}
        type={type ? type : 'text'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[htmlFor]}
      />
      <label htmlFor={htmlFor} className="xl:_text-lg">
        {formik.touched[htmlFor] &&
          formik.errors[htmlFor] &&
          formik.errors[htmlFor]}
      </label>
    </div>
  );
};

export default FormField;
