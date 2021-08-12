import React from 'react';
import Logo from '../../assets/icons/logo_subtitle.svg';
import FBIcon from '../../assets/icons/fb_logo.svg';
import Shelf from '../../assets/icons/brown_shelf.svg';
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
const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between items-center text-3xl text-p-blue container mx-auto ">
      <img src={Shelf} alt="Shelf" className="w-full" />
      <div className="w-full flex justify-between items-center text-3xl text-p-blue  mx-auto py-10">
        <a href="#" className="px-4">
          {strings.about}
        </a>
        <a
          href="https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9B%D7%9C_%D7%93%D7%95%D7%A8%D7%95%D7%9F"
          className="px-4"
        >
          {strings.michalDoron}
          <span className="font-bold underline">{strings.wiki}</span>
        </a>
        <a href="#" className="px-4">
          {strings.contact}
        </a>

        <img src={Logo} alt="Logo" />

        <a
          href="https://www.facebook.com/md1062"
          className="px-4 flex items-center"
        >
          <img src={FBIcon} alt="FB icon"></img>
          {strings.fb}
        </a>
        <a href="#" className="px-4">
          {strings.books}
        </a>
        <a href="#" className="px-4">
          {strings.lectures}
        </a>
      </div>

      <h5 className="text-lg">{strings.copyrights}</h5>
    </footer>
  );
};

export default Footer;
