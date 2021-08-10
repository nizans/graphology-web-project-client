import React from 'react';

const NavLink = ({ title, link }) => {
  return (
    <a className="px-4" href={link}>
      {title}
    </a>
  );
};

export default NavLink;
