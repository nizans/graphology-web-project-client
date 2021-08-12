import React from 'react';
import Service1 from '../../assets/icons/services/service1.svg';
import Service2 from '../../assets/icons/services/service2.svg';
import Service3 from '../../assets/icons/services/service3.svg';
import Service4 from '../../assets/icons/services/service4.svg';
import Service5 from '../../assets/icons/services/service5.svg';
import Section from '../common/Section';
import ServiceItem from './ServiceItem';

const strings = {
  title: 'שירות גרפולוגי',
  text: '.גרפולוגיה היא תורה פסאודו-מדעית הקושרת בין כתב ידו של אדם לבין אישיותו ענף אחר, המזוהה בטעות עם גרפולוגיה .נקרא ניתוח מסמכים וחתימות. תחום זה בוחן זיוף מסמכים וחתימות תוך שימוש בשיטות מדעיות כאשר העוסקים בו מוכרים כעדים מומחים בבית משפט. גרפולוגים טוענים כי הם יכולים להסיק מידע על אישיותו וחייו של אדם על פי כתב ידו. מחקרים אמפיריים אשר בחנו את תקפות שיטות האבחון בגרפולוגיה מצאו פעם אחר פעם כי לא קיים מתאם',
  offeredservices: ':שירותים גרפולוגים המוצעים',
};

const data = [
  {
    title: 'גרפולוגיה משפטית',
    description:
      '.בית משפט הוא חלק מהרשות השופטת - מוסד אשר המדינה מעניקה לו סמכות , שפיטה כללית בית משפט" הוא חלק ממערכת בתי המשפט הכללית של המדינה בעוד ש"בית דין" דן בעניין מסוים" ובדרך כלל לפי מערכת דינים מיוחדת ושונה ממערכת החוקים הרגילה. רכב מסוים של שופטים בין אםשופטים בין אם דן יחיד – נקרא מוֹתָב השיטה האדברסרית, שיטת משפט, המקובלת במיוחד בארצות שבהן נהוג המשפט המקובל ,(לרוב ארצות חבר העמים הבריטי ומדינות שקיבלו את שיטת המשפט הבריטית, ובהן בריטניה ,ארצות הברית, קנדה, אוסטרליה, ובמידה מסוימת מדינת ישראל). על פי השיטה האדברסרית השופט אוחבר מושבעים, משמשים כגורם מכריע פאסיבי',
    img: Service1,
  },
  {
    title: 'גרפולוגיה משפטית',
    description:
      '.בית משפט הוא חלק מהרשות השופטת - מוסד אשר המדינה מעניקה לו סמכות , שפיטה כללית בית משפט" הוא חלק ממערכת בתי המשפט הכללית של המדינה בעוד ש"בית דין" דן בעניין מסוים" ובדרך כלל לפי מערכת דינים מיוחדת ושונה ממערכת החוקים הרגילה. רכב מסוים של שופטים בין אםשופטים בין אם דן יחיד – נקרא מוֹתָב השיטה האדברסרית, שיטת משפט, המקובלת במיוחד בארצות שבהן נהוג המשפט המקובל ,(לרוב ארצות חבר העמים הבריטי ומדינות שקיבלו את שיטת המשפט הבריטית, ובהן בריטניה ,ארצות הברית, קנדה, אוסטרליה, ובמידה מסוימת מדינת ישראל). על פי השיטה האדברסרית השופט אוחבר מושבעים, משמשים כגורם מכריע פאסיבי',
    img: Service2,
  },
  {
    title: 'גרפולוגיה משפטית',
    description:
      '.בית משפט הוא חלק מהרשות השופטת - מוסד אשר המדינה מעניקה לו סמכות , שפיטה כללית בית משפט" הוא חלק ממערכת בתי המשפט הכללית של המדינה בעוד ש"בית דין" דן בעניין מסוים" ובדרך כלל לפי מערכת דינים מיוחדת ושונה ממערכת החוקים הרגילה. רכב מסוים של שופטים בין אםשופטים בין אם דן יחיד – נקרא מוֹתָב השיטה האדברסרית, שיטת משפט, המקובלת במיוחד בארצות שבהן נהוג המשפט המקובל ,(לרוב ארצות חבר העמים הבריטי ומדינות שקיבלו את שיטת המשפט הבריטית, ובהן בריטניה ,ארצות הברית, קנדה, אוסטרליה, ובמידה מסוימת מדינת ישראל). על פי השיטה האדברסרית השופט אוחבר מושבעים, משמשים כגורם מכריע פאסיבי',
    img: Service3,
  },
  {
    title: 'גרפולוגיה משפטית',
    description:
      '.בית משפט הוא חלק מהרשות השופטת - מוסד אשר המדינה מעניקה לו סמכות , שפיטה כללית בית משפט" הוא חלק ממערכת בתי המשפט הכללית של המדינה בעוד ש"בית דין" דן בעניין מסוים" ובדרך כלל לפי מערכת דינים מיוחדת ושונה ממערכת החוקים הרגילה. רכב מסוים של שופטים בין אםשופטים בין אם דן יחיד – נקרא מוֹתָב השיטה האדברסרית, שיטת משפט, המקובלת במיוחד בארצות שבהן נהוג המשפט המקובל ,(לרוב ארצות חבר העמים הבריטי ומדינות שקיבלו את שיטת המשפט הבריטית, ובהן בריטניה ,ארצות הברית, קנדה, אוסטרליה, ובמידה מסוימת מדינת ישראל). על פי השיטה האדברסרית השופט אוחבר מושבעים, משמשים כגורם מכריע פאסיבי',
    img: Service4,
  },
  {
    title: 'גרפולוגיה משפטית',
    description:
      '.בית משפט הוא חלק מהרשות השופטת - מוסד אשר המדינה מעניקה לו סמכות , שפיטה כללית בית משפט" הוא חלק ממערכת בתי המשפט הכללית של המדינה בעוד ש"בית דין" דן בעניין מסוים" ובדרך כלל לפי מערכת דינים מיוחדת ושונה ממערכת החוקים הרגילה. רכב מסוים של שופטים בין אםשופטים בין אם דן יחיד – נקרא מוֹתָב השיטה האדברסרית, שיטת משפט, המקובלת במיוחד בארצות שבהן נהוג המשפט המקובל ,(לרוב ארצות חבר העמים הבריטי ומדינות שקיבלו את שיטת המשפט הבריטית, ובהן בריטניה ,ארצות הברית, קנדה, אוסטרליה, ובמידה מסוימת מדינת ישראל). על פי השיטה האדברסרית השופט אוחבר מושבעים, משמשים כגורם מכריע פאסיבי',
    img: Service5,
  },
];

const Services = () => {
  return (
    <>
      <Section>
        <div className="w-full flex flex-col ">
          <h1 className="text-7xl text-p-blue-dark pb-8 m-auto">
            {strings.title}
          </h1>
          <div className="divide-y-4 divide-p-brown flex flex-col w-2/12 m-auto">
            <span></span>
            <span></span>
          </div>
          <p className="text-p-blue text-3xl py-8">{strings.text}</p>
          <h2 className="text-p-blue text-3xl font-bold">
            {strings.offeredservices}
          </h2>
          <div className="grid grid-cols-3 w-2/3 py-4">
            {data.map((item, i) => (
              <a
                href="/"
                key={i}
                className="text-p-blue text-3xl underline py-4"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <div className="divide-y-2 divide-p-blue flex flex-col">
        {data.map((item, i) => (
          <ServiceItem item={item} />
        ))}
      </div>
    </>
  );
};

export default Services;
