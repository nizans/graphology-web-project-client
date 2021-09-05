import React from 'react';
import Section from 'components/common/Section';
import MichalAboutPhoto from 'assets/imgs/MichalAboutPhoto.svg';
import SplitScreen from 'components/common/SplitScreen';

const strings = {
  title: 'מיכל דורון',
  subTitle: 'גרפולוגית, סופרת, משוררת ועיתונאית ישראלית',
  certificates: 'תעודות',
  text: `עובדת כ- עשרים ושבע שנה כמרצה בתחומים פסיכולוגיה ,וגרפולוגיה. לימדה במכללות לוינסקי ועמק יזרעאל ומכללת השחר .מוזמנת לימי עיון כנסים, וספריות גרפולוגית מוסמכת , עובדת עם ארגונים וחברות מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטיתבפילוסופיה, עשתה השלמות בעלת תואר שני בפסיכולוגיה ובעלת תואר שני במדעי ההתנהגות בו חקרה את הקשר בין המתאם הגרפולוגי לבין .האינטליגנציה הרגשית "ספרים שהוציאה: ספר שירים "בקרום הדק שזכה בתעודת הוקרה .ע"ש דוד לויתן, ספרה ספרה 'על ספת הגרפולוג" 2004 הוצ' עקד מתורגם כעת לשפה האנגלית כתבה טורים בנושא גרפולוגיה בידיעות תקשורת ובעיתון מאזנים של אגודת הסופרים`,
};
export const About = () => {
  return (
    <>
      <SplitScreen imgSrc={MichalAboutPhoto}>
        <div className="flex flex-col justify-between flex-grow h-full m-0 pt-16">
          <div>
            <h1 className="_text-bold-dark-8xl leading-none">{strings.title}</h1>
            <h3 className="_text-bold-3xl leading-none pb-4">{strings.subTitle}</h3>
          </div>

          <div className="ml-auto flex flex-col divide-p-brown divide-y-4 w-2/3">
            <span></span>
            <span></span>
          </div>
          <p className="pt-4 _text-2xl">{strings.text}</p>
        </div>
      </SplitScreen>

      <Section>
        <h2 className="text-p-brown-dark _text-bold-8xl">{strings.certificates}</h2>
        <div className="grid grid-cols-3">
          <img alt="" src="https://via.placeholder.com/418x518.png" className="p-16" />
          <img alt="" src="https://via.placeholder.com/418x518.png" className="p-16" />
          <img alt="" src="https://via.placeholder.com/418x518.png" className="p-16" />
        </div>
      </Section>
    </>
  );
};
