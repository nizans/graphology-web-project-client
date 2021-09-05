import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from 'components/UI/DropDown';
import NavLogo from './NavLogo';

const dropdownLinks = [
  <NavLink className="px-4" activeClassName="font-bold" to="/home/about">
    אודות
  </NavLink>,
  <NavLink className="px-4" activeClassName="font-bold" to="/home/about">
    מיכל
  </NavLink>,
  <NavLink className="px-4" activeClassName="font-bold" to="/home/articles">
    כתבות
  </NavLink>,
];
const links = [
  {
    title: 'על ספת הגרפולוג',
    to: '/home/couch',
  },
  {
    title: 'ספרים',
    to: '/home/books',
  },
  {
    title: 'שירות גרפולוגי',
    to: '/home/services',
  },
  {
    title: 'צור קשר',
    to: '/home/contact',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <NavLogo />
      <div className="flex justify-between items-center divide-x-2 divide-p-brown divide-x-reverse">
        <div className="lg:px-2 xl:px-4">
          <DropDown elements={dropdownLinks} elementClassName="bg-p-brown" />
        </div>
        {links.map((item, i) => (
          <NavLink to={item.to} key={i} activeClassName="font-bold" className="lg:px-2 xl:px-4">
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
