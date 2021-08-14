import React from 'react';
import Logo from '../../assets/icons/logo_subtitle.svg';
import FBIcon from '../../assets/icons/fb_logo.svg';
import Shelf from '../../assets/icons/brown_shelf.svg';
import { NavLink } from 'react-router-dom';

const strings = {
  about: 'אודות',
  michalDoron: 'מיכל דורון ב',
  wiki: 'ויקיפדיה',
  contact: 'צור קשר',
  fb: 'פייסבוק',
  books: 'ספרים',
  lectures: 'סדנאות והרצאות',
  copyrights: 'כל הזכויות שמורות © מיכל דורון ייעוץ ואבחון גרפולוגית',
};

const Footer = ({ footerRef }) => {
  return (
    <footer
      ref={footerRef}
      className="w-full flex flex-col justify-between items-center _text-3xl mx-auto box-content"
    >
      <img src={Shelf} alt="" className="w-full" />
      <div className="w-full flex justify-between items-center _text-3xl  mx-auto py-10">
        <NavLink to="/about" className="px-4">
          {strings.about}
        </NavLink>
        <a
          href="https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9B%D7%9C_%D7%93%D7%95%D7%A8%D7%95%D7%9F"
          className="px-4"
        >
          {strings.michalDoron}
          <span className="font-bold underline">{strings.wiki}</span>
        </a>
        <NavLink to="/contact" className="px-4">
          {strings.contact}
        </NavLink>

        <NavLink to="/">
          <img
            src={Logo}
            alt=""
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
          />
        </NavLink>

        <a
          href="https://www.facebook.com/md1062"
          className="px-4 flex items-center"
        >
          <img src={FBIcon} alt=""></img>
          {strings.fb}
        </a>
        <NavLink to="/books" className="px-4">
          {strings.books}
        </NavLink>
        <NavLink to="#" className="px-4">
          {strings.lectures}
        </NavLink>
      </div>

      <h5 className="_text-lg">{strings.copyrights}</h5>
    </footer>
  );
};

export default Footer;
