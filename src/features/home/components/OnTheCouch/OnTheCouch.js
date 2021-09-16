import { SORT_BY } from 'ApiRequest';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import { contentsApiCRUDRequests } from 'features/couch';
import { useFetchData } from 'lib/reactQuery';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Notebook from '../../../../assets/icons/notebook.svg';
import Avidan from '../../../../assets/imgs/avidan.png';
import Dbora from '../../../../assets/imgs/dbora.png';
import HNBialick from '../../../../assets/imgs/hnBialick.png';
import OnTheCouchItem from './OnTheCouchItem';
const fallbackData = [
  {
    title: 'דוד אבידן: לזעזע את הסביבה',
    publishDate: '20 פברואר 2019',
    text: '.הפעם אארח על ספת הגרפולוג את המשורר דוד אבידן .ב11 לחודש מאי נפטר 1995המשורר המהפכני דוד אבידן .סיבה לארח אותו על ספת הגרפולוג .כתב-ידו של אבידן פרוע, מהיר, לא קריא וזווית הכתיבה ימנית סימנים גרפיים אלה מעידים על אימפולסיביות ואפילו על פזיזות כללי הכתיבה מסמלים את נורמות ההתנהגות. בכתב של אבידן ...ניכרת הפרת הכללים',
    images: [{ full: Avidan }],
  },
  {
    title: 'דבורה בארון: ציפור בכלוב',
    publishDate: '‏26 דצמבר 2020',
    text: 'ברביעי בדצמבר חל יום הולדתה של דבורה בארון. סופרת מצויינת, אשרתיאוריה את הסיטואציות האנושיות .המרכבות כה נבונות ועמוקות הזדמנות מצוינת לארח אותה על .ספת הגרפולוג במאה העשרים ואחת',
    images: [{ full: Dbora }],
  },
  {
    title: 'ח.נ. ביאליק נועזות מול שמרנות',
    publishDate: '‏9 ינואר 2019',
    text: '.ב9 לחודש ינואר, 1873 נולד המשורר .הלאומי חיים נחמן ביאליק .סיבה לחגוג עמו על ספת הגרפולוג באישיותו של חיים נחמן ביאליק בלטו ...שני קווים מנוגדים',
    images: [{ full: HNBialick }],
  },
];
const strings = {
  title: 'על ספת הגרפולוג',
  subTitle: 'זוהי פינה בה נחקור ונגלה על אישיותם של אשויות מוכורות',
  recentlyAdded: 'הועלו לאחרונה:',
  moreReadings: 'לעוד מאמרים',
};
const OnTheCouch = () => {
  const { isLoading, data, error } = useFetchData(
    contentsApiCRUDRequests.read(null, { page: 0, limit: 3, sortby: SORT_BY.UPLOAD_DATE_DESC })
  );
  if (isLoading) return <LoadingSection />;

  return (
    <>
      <div className=" mx-auto flex flex-col items-center pb-20">
        <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
        <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
      </div>
      <div className="w-full">
        <Underline className="w-2/3" />
      </div>
      <OnTheCouchItem data={(!error && data.payload[0]) || fallbackData[0]} />
      <Underline className="w-2/3 mr-auto" />
      <div className="flex">
        <img loading="lazy" src={Notebook} width="240px" className="ml-24" alt="" />
        <OnTheCouchItem data={(!error && data.payload[1]) || fallbackData[1]} />
      </div>
      <Underline className="w-2/3 ml-auto" />
      <div className="flex items-center">
        <OnTheCouchItem data={(!error && data.payload[2]) || fallbackData[2]} />
        <NavLink to="/home/couch" className="_text-6xl w-1/2 flex hover:font-bold">
          {strings.moreReadings} &gt;
        </NavLink>
      </div>
    </>
  );
};

export default OnTheCouch;
