import React from 'react';
import logo from '../../../assets/icons/logo.svg';
import phoneIcon from '../../../assets/icons/phone_icon.svg';
import { NavLink } from 'react-router-dom';
const strings = {
  phoneTitle: 'לייעוץ ואבחון גרפולוגי',
  phoneNumber: '054-9772887',
};
const NavLogo = () => {
  return (
    <div className="flex items-center divide-x-2 divide-p-brown divide-x-reverse">
      <NavLink to="/">
        <img
          src={logo}
          width="260px"
          alt="Logo"
          className="pl-4 transform  -translate-y-3"
        />
      </NavLink>

      <div className="pr-4 flex flex-col items-start  ">
        <h1>{strings.phoneTitle}</h1>
        <div className="flex mt-4">
          <a href={`tel:${strings.phoneNumber}`}>
            <img
              src={phoneIcon}
              height="30px"
              className="pl-4"
              alt="Phone icon"
            />
          </a>
          <a href={`tel:${strings.phoneNumber}`}>{strings.phoneNumber}</a>
        </div>
      </div>
    </div>
  );
};

export default NavLogo;
