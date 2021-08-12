import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-p-blue-dark"></div>
    </div>
  );
};

export default Spinner;
