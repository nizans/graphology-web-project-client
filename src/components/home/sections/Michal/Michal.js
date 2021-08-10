import React from 'react';
import { ReactComponent as MichalDrawings } from '../../../../assets/icons/michal_drawings.svg';
import ReadMoreBtn from '../../../common/ReadMoreBtn';

const strings = {
  title: 'מיכל דורון',
  text: '.עובדת כעשרים ושבע שנה כמרצה בתחומים ,פסיכולוגים וגרפולוגיה, לימדה במכללות לוינסקיעמק יזרעאל ומכללת שחר. גרפולוגית מוסמכת עובדת עם ארגונים וחברות, מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטית',
  readMore: 'קרא עוד',
};

const Michal = () => {
  return (
    <div className="flex justify-center">
      {/* TODO - ASK FOR BUBBLE PNG */}
      {/* <img src={MichalDrawings} className="max-w-md px-4" /> */}
      <MichalDrawings />
      <div className="flex flex-col px-4">
        <a
          href="#"
          className="text-p-blue-dark font-bold text-12xl leading-none hover:text-p-brown"
        >
          {strings.title}
        </a>
        <div className="divide-p-brown divide-y-4 flex flex-col w-2/3">
          <span></span>
          <span></span>
        </div>
        <p className="text-p-blue text-4xl py-6 pl-12 max-w-2xl leading-snug ">
          {strings.text}
        </p>
        <ReadMoreBtn className="text-4xl" />
      </div>
    </div>
  );
};

export default Michal;
