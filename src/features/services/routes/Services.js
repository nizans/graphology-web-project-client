import React, { useEffect } from 'react';
import Section from 'components/common/Section';
import ServiceItem from '../components/ServiceItem';
import { useFetchServices } from '..';

const strings = {
  title: 'שירות גרפולוגי',
  text: '.גרפולוגיה היא תורה פסאודו-מדעית הקושרת בין כתב ידו של אדם לבין אישיותו ענף אחר, המזוהה בטעות עם גרפולוגיה .נקרא ניתוח מסמכים וחתימות. תחום זה בוחן זיוף מסמכים וחתימות תוך שימוש בשיטות מדעיות כאשר העוסקים בו מוכרים כעדים מומחים בבית משפט. גרפולוגים טוענים כי הם יכולים להסיק מידע על אישיותו וחייו של אדם על פי כתב ידו. מחקרים אמפיריים אשר בחנו את תקפות שיטות האבחון בגרפולוגיה מצאו פעם אחר פעם כי לא קיים מתאם',
  offeredservices: ':שירותים גרפולוגים המוצעים',
};

export const Services = () => {
  const { isLoading, error, data } = useFetchServices();

  return (
    <>
      <Section>
        <div className="w-full flex flex-col ">
          <h1 className="text-7xl text-p-blue-dark pb-8 m-auto">{strings.title}</h1>
          <div className="divide-y-4 divide-p-brown flex flex-col w-2/12 m-auto">
            <span></span>
            <span></span>
          </div>
          <p className="text-p-blue text-3xl py-8">{strings.text}</p>
          <h2 className="text-p-blue text-3xl font-bold">{strings.offeredservices}</h2>
          <div className="grid grid-cols-3 w-2/3 py-4">
            {data &&
              data.map((item, i) => (
                <a href="/" key={i} className="text-p-blue text-3xl underline py-4">
                  {item.title}
                </a>
              ))}
          </div>
        </div>
      </Section>

      <div className="divide-y-2 divide-p-blue flex flex-col">
        {data && data.map((item, i) => <ServiceItem item={item} />)}
      </div>
    </>
  );
};
