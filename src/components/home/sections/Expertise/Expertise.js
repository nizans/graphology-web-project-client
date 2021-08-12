import React from 'react';
import ExpertiseContainer from './ExpertiseContainer';
import BriefCase from '../../../../assets/icons/experise_breifcase.svg';
import OpenBook from '../../../../assets/icons/experise_openbook.svg';
import Speech from '../../../../assets/icons/expertise_speech.svg';
import Arrow from '../../../../assets/icons/down_arrow.png';
const strings = {
  title: 'תחומי התמחות',
  subTitle: 'שירותים ואבחונים גרפולוגים',
};

const data = [
  {
    title: 'קורסים וסדנאות',
    text: 'קורס הוא בדרך כלל תנאי. לקידומו של החייל לתפקיד מסוים. מוסדות להכשרה מקצועית גופים למתן קורס ספציפי, לעיתים כזה המהווה תנאי לקבלת רישיון מסוים במתנ"סים ומרכזי למידה',
    button: 'לקורסים',
    icon: OpenBook,
  },
  {
    title: 'הרצאות',
    text: 'הרצאה היא הצגה מילולית שנועדה להעביר מידע, או ללמד נושא מסוים; למשל, על ידי מרצה באוניברסיטה הרצאות משמשות להעברת מידע על נושא מסוים, כדוגמת היסטוריה',
    button: 'להרצאות',
    icon: Speech,
  },
  {
    title: 'ייעוץ תעסוקתי',
    text: 'תוכניות לעידוד תעסוקה הן תוכניות שמטרתן לסייע לבלתי מועסקים (הן למובטלים והן לפרטים המצויים מחוץ לכוח העבודה) להיקלט בשוק העבודה לעיתים המדינה',
    button: 'לייעוץ תעסוקתי',
    icon: BriefCase,
  },
];
const Expertise = () => {
  return (
    <>
      <div className="flex  flex-col w-full items-center ">
        <h1 className="_text-bold-8xl">{strings.title}</h1>
        <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
      </div>

      <div className="relative ">
        <img
          alt=""
          src={Arrow}
          className="transform -rotate-90  absolute bottom-1/2"
          style={{
            right: '-3rem',
          }}
        />
        <div className="grid grid-cols-3 divide-x-4 divide-p-brown divide-x-reverse">
          {data.map((item, i) => (
            <ExpertiseContainer data={item} key={i} />
          ))}
        </div>
        <img
          alt=""
          src={Arrow}
          className="transform rotate-90 absolute -left-3.5 bottom-1/2"
          style={{
            left: '-3rem',
          }}
        />
      </div>
    </>
  );
};

export default Expertise;
