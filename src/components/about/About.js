import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useReducer,
} from 'react';
import Section from '../common/Section';
import MichalAboutPhoto from '../../assets/imgs/MichalAboutPhoto.svg';
import SplitScreen from '../common/SplitScreen';

const strings = {
  title: 'מיכל דורון',
  subTitle: 'גרפולוגית, סופרת, משוררת ועיתונאית ישראלית',
  certificates: 'תעודות',
  text: `עובדת כ- עשרים ושבע שנה כמרצה בתחומים פסיכולוגיה ,וגרפולוגיה. לימדה במכללות לוינסקי ועמק יזרעאל ומכללת השחר .מוזמנת לימי עיון כנסים, וספריות גרפולוגית מוסמכת , עובדת עם ארגונים וחברות מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטיתבפילוסופיה, עשתה השלמות בעלת תואר שני בפסיכולוגיה ובעלת תואר שני במדעי ההתנהגות בו חקרה את הקשר בין המתאם הגרפולוגי לבין .האינטליגנציה הרגשית "ספרים שהוציאה: ספר שירים "בקרום הדק שזכה בתעודת הוקרה .ע"ש דוד לויתן, ספרה ספרה 'על ספת הגרפולוג" 2004 הוצ' עקד מתורגם כעת לשפה האנגלית כתבה טורים בנושא גרפולוגיה בידיעות תקשורת ובעיתון מאזנים של אגודת הסופרים`,
};
const About = () => {
  const [divHeight, setDivHeight] = useState();

  return (
    <>
      <SplitScreen imgSrc={MichalAboutPhoto}>
        <div className="flex flex-col justify-between flex-grow h-full m-0 pt-16">
          <div className>
            <h1 className="text-8xl font-bold text-p-blue-dark leading-none">
              {strings.title}
            </h1>
            <h3 className="text-3xl font-bold text-p-blue leading-none pb-4">
              {strings.subTitle}
            </h3>
          </div>

          <div className="ml-auto flex flex-col divide-p-brown divide-y-4 w-2/3">
            <span></span>
            <span></span>
          </div>
          <p className="pt-4 text-2xl text-p-blue">{strings.text}</p>
        </div>
      </SplitScreen>

      <Section>
        <h2 className="text-p-brown-dark font-bold text-8xl">
          {strings.certificates}
        </h2>
        <div className="grid grid-cols-3">
          <img src="https://via.placeholder.com/418x518.png" className="p-16" />
          <img src="https://via.placeholder.com/418x518.png" className="p-16" />
          <img src="https://via.placeholder.com/418x518.png" className="p-16" />
        </div>
      </Section>
    </>
  );
};

export default About;
