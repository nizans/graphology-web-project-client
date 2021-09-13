import React from 'react';

const Spinner = ({ size = 32 }) => {
  return (
    <div className="w-full h-full absolute">
      <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
        <div className={`animate-spin rounded-full h-${size} w-${size} border-b-4 border-p-blue-dark`}></div>
      </div>
    </div>
  );
};

export default Spinner;
