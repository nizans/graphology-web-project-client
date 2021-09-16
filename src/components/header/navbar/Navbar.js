import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from 'components/UI/DropDown';
import NavLogo from './NavLogo';
import DropDownMenu from 'components/UI/DropDownMenu';

// const dropdownLinks = [
//   <NavLink className="px-4" activeClassName="font-bold" to="/home/about">
//     אודות
//   </NavLink>,
//   <NavLink className="px-4" activeClassName="font-bold" to="/home/about">
//     מיכל
//   </NavLink>,
//   <NavLink className="px-4" activeClassName="font-bold" to="/home/articles">
//     כתבות
//   </NavLink>,
// ];

const Navbar = ({ dropdownLinks, links }) => {
  return (
    <nav className="min-w-full lg:flex items-center lg:justify-between sticky top-0">
      <NavLogo />
      <div className="grid grid-cols-6 w-full lg:w-auto lg:gap-0">
        <div className="col-span-1 relative w-full flex justify-evenly lg:justify-center items-center lg:px-2 xl:px-4">
          <DropDownMenu
            values={dropdownLinks}
            asLinks={true}
            ulStyle={{ padding: '0 0', top: 0, width: '100%' }}
            liStyle={{ padding: 2 }}
          />
        </div>
        <div className="flex justify-between items-center divide-x-2 divide-p-brown divide-x-reverse col-span-5">
          <div className="flex divide-x-2 divide-p-brown divide-x-reverse">
            <span></span>
            <span></span>
          </div>
          {links.map((item, i) => (
            <NavLink
              to={item.to}
              key={i}
              activeClassName="font-bold"
              style={{ transition: 'font .1s' }}
              className="px-1 lg:px-2 xl:px-4 w-full text-center lg:w-auto hover:font-bold">
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
