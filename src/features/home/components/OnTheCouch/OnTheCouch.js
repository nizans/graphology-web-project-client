import React from 'react';
import OnTheCouchItem from './OnTheCouchItem';
import Avidan from '../../../../assets/imgs/avidan.png';
import Dbora from '../../../../assets/imgs/dbora.png';
import HNBialick from '../../../../assets/imgs/hnBialick.png';
import Notebook from '../../../../assets/icons/notebook.svg';
const data = [
  {
    title: 'דוד אבידן: לזעזע את הסביבה',
    date: '20 פברואר 2019',
    text: '.הפעם אארח על ספת הגרפולוג את המשורר דוד אבידן .ב11 לחודש מאי נפטר 1995המשורר המהפכני דוד אבידן .סיבה לארח אותו על ספת הגרפולוג .כתב-ידו של אבידן פרוע, מהיר, לא קריא וזווית הכתיבה ימנית סימנים גרפיים אלה מעידים על אימפולסיביות ואפילו על פזיזות כללי הכתיבה מסמלים את נורמות ההתנהגות. בכתב של אבידן ...ניכרת הפרת הכללים',
    frontImg: Avidan,
  },
  {
    title: 'דבורה בארון: ציפור בכלוב',
    date: '‏26 דצמבר 2020',
    text: 'ברביעי בדצמבר חל יום הולדתה של דבורה בארון. סופרת מצויינת, אשרתיאוריה את הסיטואציות האנושיות .המרכבות כה נבונות ועמוקות הזדמנות מצוינת לארח אותה על .ספת הגרפולוג במאה העשרים ואחת',
    frontImg: Dbora,
  },
  {
    title: 'ח.נ. ביאליק נועזות מול שמרנות',
    date: '‏9 ינואר 2019',
    text: '.ב9 לחודש ינואר, 1873 נולד המשורר .הלאומי חיים נחמן ביאליק .סיבה לחגוג עמו על ספת הגרפולוג באישיותו של חיים נחמן ביאליק בלטו ...שני קווים מנוגדים',
    frontImg: HNBialick,
  },
];
const strings = {
  title: 'על ספת הגרפולוג',
  subTitle: 'זוהי פינה בה נחקור ונגלה על אישיותם של אשויות מוכורות',
  recentlyAdded: 'הועלו לאחרונה:',
  moreReadings: 'לעוד מאמרים',
};
const OnTheCouch = () => {
  return (
    <div className="flex flex-col">
      <div className=" mx-auto flex flex-col items-center pb-20">
        <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
        <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
      </div>

      <div className="w-full">
        <div className="ml-auto flex flex-col divide-p-brown divide-y-4 w-2/3">
          <h3 className="_text-bold-4xl pb-4">{strings.recentlyAdded}</h3>
          <span></span>
        </div>
      </div>

      <OnTheCouchItem data={data[0]} />
      <div className="w-full">
        <div className="mr-auto flex flex-col divide-p-brown divide-y-4 w-2/3">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="flex">
        <img
          src={Notebook}
          width="240px"
          className="ml-24"
          alt=""
        />
        <OnTheCouchItem data={data[1]} />
      </div>

      <div className="ml-auto flex flex-col divide-p-brown divide-y-4 w-2/3">
        <span></span>
        <span></span>
      </div>
      <div className="flex items-center">
        <OnTheCouchItem data={data[2]} />
        <a href="/" className="_text-6xl w-1/2 flex hover:font-bold">
          {strings.moreReadings} &gt;
        </a>
      </div>
    </div>
  );
};

export default OnTheCouch;
