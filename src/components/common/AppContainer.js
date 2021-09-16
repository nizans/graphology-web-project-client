import React from 'react';

const AppContainer = ({ children }) => {
  return (
    <div className="bg-background w-full flex justify-center relative min-h-screen overflow-hidden">
      <div
        dir="rtl"
        className="px-2 sm:px-0 flex flex-col justify-center items-center relative  w-screen md:container min-h-screen ">
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
