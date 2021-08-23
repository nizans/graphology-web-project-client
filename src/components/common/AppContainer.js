import React from 'react';

const AppContainer = ({ children }) => {
  return (
    <div className="bg-background w-full flex justify-center h-full relative">
      <div dir="rtl" className="flex flex-col justify-center items-center md:container">
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
