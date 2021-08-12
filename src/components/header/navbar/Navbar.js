import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLogo from './NavLogo';

const links = [
  {
    title: 'אודות',
    link: '/about',
  },
  {
    title: 'על ספת הגרפולוג',
    link: '/couch',
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
      <div className="flex justify-between items-center divide-x-2 divide-p-brown divide-x-reverse">
        {links.map((item, i) => (
          <NavLink
            to={item.link}
            key={i}
            activeClassName="font-bold"
            className="px-4"
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
