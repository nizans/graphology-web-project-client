import React from 'react';

import NavLink from './NavLink';
import NavLogo from './NavLogo';

const navLinks = [
  {
    title: 'אודות',
    link: '/about',
  },
  {
    title: 'על ספת הגרפולוג',
    link: '/oncouch',
  },
  {
    title: 'ספרים',
    link: '/books',
  },
  {
    title: 'שירות גרפולוגי',
    link: '/services',
  },
  {
    title: 'צור קשר',
    link: '/contact',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <NavLogo />
      <div className="flex justify-between divide-x-2 divide-p-brown divide-x-reverse">
        {navLinks.map((item, i) => (
          <NavLink title={item.title} link={item.link} key={i} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
