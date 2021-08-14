import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../../common/DropDown';
import NavLogo from './NavLogo';

const dropdownLinks = [
  <NavLink className="px-4" activeClassName="font-bold" to="/about">
    אודות
  </NavLink>,
  <NavLink className="px-4" activeClassName="font-bold" to="/about">
    מיכל
  </NavLink>,
  <NavLink className="px-4" activeClassName="font-bold" to="/articles">
    כתבות
  </NavLink>,
];
const links = [
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
        <div className="lg:px-2 xl:px-4">
          <DropDown
            elements={dropdownLinks}
            handleValueChange={(e) => console.log(e)}
            elementClassName="bg-p-brown"
          />
        </div>
        {links.map((item, i) => (
          <NavLink
            to={item.link}
            key={i}
            activeClassName="font-bold"
            className="lg:px-2 xl:px-4"
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
