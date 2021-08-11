import React from 'react';
import Home from '../home/Home';
import About from '../about/About';
import Books from '../books/Books';
import Services from '../services/Services';
import Contact from '../contact/Contact';

const Main = ({ sectionHeight, windowHeight }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl">
        {/* <Home sectionHeight={sectionHeight} windowHeight={windowHeight} />
        <About />
        <Books /> */}
        {/* <Services /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Main;
