import React from 'react';

const AppContainer = ({ children }) => {
  return (
    <div className="bg-background w-full flex justify-center  relative min-h-screen">
      <div dir="rtl" className="flex flex-col justify-center items-center md:container min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
