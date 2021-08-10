import React from 'react';
import Home from '../home/Home';

const Main = ({ sectionHeight, windowHeight }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl">
        <Home sectionHeight={sectionHeight} windowHeight={windowHeight} />
      </div>
    </div>
  );
};

export default Main;
