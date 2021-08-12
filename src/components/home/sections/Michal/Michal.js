import React from 'react';
import MichalDrawings from '../../../../assets/icons/michal_drawings.svg';
import ReadMoreBtn from '../../../common/ReadMoreBtn';
import SpeechBubble from '../../../../assets/icons/speech_bubble.svg';
import SplitScreen from '../../../common/SplitScreen';
import Quotes from '../../../../assets/icons/quotes_icon.svg';
const strings = {
  title: 'מיכל דורון',
  text: '.עובדת כעשרים ושבע שנה כמרצה בתחומים ,פסיכולוגים וגרפולוגיה, לימדה במכללות לוינסקיעמק יזרעאל ומכללת שחר. גרפולוגית מוסמכת עובדת עם ארגונים וחברות, מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטית',
  readMore: 'קרא עוד',
  bubbleText: 'כשם שאין בעולם שתי טביעות אצבע זהות אין בעולם שני כתבי יד זהים',
};

const Michal = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 relative">
        <img className=" mx-auto " src={SpeechBubble} alt="" />
        <img
          alt=""
          src={Quotes}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h1
          className="absolute left-0 right-0 text-p-brown-light _text-5xl text-center px-16 italic break-words"
          style={{ top: '22.214%', bottom: '44.58' }}
        >
          {strings.bubbleText}
        </h1>
      </div>

      <SplitScreen imgSrc={MichalDrawings}>
        <div className="flex flex-col px-4">
          <a
            href="/"
            className="_text-bold-dark-12xl leading-none hover:text-p-brown"
          >
            {strings.title}
          </a>
          <div className="divide-p-brown divide-y-4 flex flex-col w-3/6">
            <span></span>
            <span></span>
          </div>
          <p className="_text-3xl py-6 pl-12 max-w-2xl leading-normal ">
            {strings.text}
          </p>
          <ReadMoreBtn href={'/'} className="text-4xl" />
        </div>
      </SplitScreen>
    </div>
  );
};

export default Michal;
