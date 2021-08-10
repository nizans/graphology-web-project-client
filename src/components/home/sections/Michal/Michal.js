import React from 'react';
import MichalDrawings from '../../../../assets/icons/michal_drawings.svg';
import ReadMoreBtn from '../../../common/ReadMoreBtn';

const strings = {
  title: 'מיכל דורון',
  text: '.עובדת כעשרים ושבע שנה כמרצה בתחומים ,פסיכולוגים וגרפולוגיה, לימדה במכללות לוינסקיעמק יזרעאל ומכללת שחר. גרפולוגית מוסמכת עובדת עם ארגונים וחברות, מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטית',
  readMore: 'קרא עוד',
};

const Michal = () => {
  return (
    <div className="flex justify-center">
      <img
        src={MichalDrawings}
        className=" px-4 obj"
        style={{
          maxHeight: '70vh',
        }}
      />
      <div className="flex flex-col px-4">
        <a
          href="#"
          className="text-p-blue-dark font-bold text-10xl leading-none hover:text-p-brown"
        >
          {strings.title}
        </a>
        <div className="divide-p-brown divide-y-4 flex flex-col w-3/6">
          <span></span>
          <span></span>
        </div>
        <p className="text-p-blue text-3xl py-6 pl-12 max-w-2xl leading-normal ">
          {strings.text}
        </p>
        <ReadMoreBtn href={'/'} className="text-4xl" />
      </div>
    </div>
  );
};

export default Michal;
