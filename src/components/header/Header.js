import React from 'react';
import Navbar from './navbar/Navbar';

const Header = ({ headerRef }) => {
  return (
    <div
      ref={headerRef}
      className="max-w-full font-light flex justify-center text-p-blue text-3xl py-4  h-1/6 sticky top-0 bg-background z-50"
    >
      <div className="container w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
