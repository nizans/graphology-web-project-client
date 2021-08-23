import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Header = ({ headerRef }) => {
  return (
    <div
      ref={headerRef}
      className="container font-light flex justify-center _text-3xl  py-1 sticky top-0 bg-background z-50">
      <Navbar />
    </div>
  );
};

export default withRouter(Header);
