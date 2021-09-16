import Section from 'components/common/Section';
import Underline from 'components/UI/Underline';
import { SectionHeightContext } from 'context/sectionHeightContext';
import { useFetchData } from 'lib/reactQuery';
import React, { createRef, useContext, useEffect, useState } from 'react';
import { servicesApiCRUDRequests } from '..';
import ServiceItem from '../components/ServiceItem';

const strings = {
  title: 'שירות גרפולוגי',
  text: '.גרפולוגיה היא תורה פסאודו-מדעית הקושרת בין כתב ידו של אדם לבין אישיותו ענף אחר, המזוהה בטעות עם גרפולוגיה .נקרא ניתוח מסמכים וחתימות. תחום זה בוחן זיוף מסמכים וחתימות תוך שימוש בשיטות מדעיות כאשר העוסקים בו מוכרים כעדים מומחים בבית משפט. גרפולוגים טוענים כי הם יכולים להסיק מידע על אישיותו וחייו של אדם על פי כתב ידו. מחקרים אמפיריים אשר בחנו את תקפות שיטות האבחון בגרפולוגיה מצאו פעם אחר פעם כי לא קיים מתאם',
  offeredservices: 'שירותים גרפולוגים המוצעים:',
};

export const Services = () => {
  const { data } = useFetchData(servicesApiCRUDRequests.read());
  const [numOfItems, setNumOfItems] = useState(0);
  const [itemsRefs, setItemsRefs] = useState([]);
  const { headerHeight, windowHeight, breadCrumbHeight } = useContext(SectionHeightContext);

  const handleScrollToItem = i => {
    if (itemsRefs[i]) {
      const { top } = itemsRefs[i].current.getBoundingClientRect();
      window.scroll({ top: top - headerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (data) if (data.payload) setNumOfItems(data.payload.length);
  }, [data]);

  useEffect(() => {
    setItemsRefs(itemsRefs =>
      Array(numOfItems)
        .fill()
        .map((_, i) => itemsRefs[i] || createRef())
    );
  }, [numOfItems]);

  return (
    <>
      <Section
        className="flex flex-col items-center justify-center"
        minHeight={windowHeight - breadCrumbHeight - headerHeight}>
        <h1 className="text-7xl text-p-blue-dark pb-8">{strings.title}</h1>

        <Underline className="w-2/12" />
        <p className="text-p-blue text-3xl py-8">{strings.text}</p>
        <div className="w-full">
          <h2 className="text-p-blue text-3xl font-bold">{strings.offeredservices}</h2>
          <div className="grid grid-cols-3 w-2/3 py-4">
            {data &&
              data.payload &&
              data.payload.map((item, i) => (
                <button
                  key={item._id + item.title}
                  onClick={() => handleScrollToItem(i)}
                  className="text-p-blue text-3xl underline py-4 text-right">
                  {item.title}
                </button>
              ))}
          </div>
        </div>
      </Section>

      <div className="divide-y-2 divide-p-blue flex flex-col">
        {data &&
          data.payload &&
          data.payload.map((item, i) => <ServiceItem ref={itemsRefs[i]} key={item._id} item={item} />)}
      </div>
    </>
  );
};
