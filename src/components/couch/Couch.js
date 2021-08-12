import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import CouchItem from './CouchItem';
import HandWriting from '../../assets/imgs/jimMorison.png';
import CouchItemPage from './CouchItemPage';
import writings from '../../assets/imgs/full_page_writings.svg';
const strings = {
  title: 'על ספת הגרפולוג',
  subtitle: 'ניתוח כתב יד של יוצרים שונים',
  search: 'חיפוש',
  moreInfo: 'מידע נוסף',
  orderBy: 'מיון לפי',
};

const data = [
  {
    title: 'חנוך לוין- האיסטניס',
    subtitle: `ב19 לאוגוסט 1999, נפטר המחזאי המופלא הסופר והמשורר חנוך לוין,
       סיבה טובה לאורח אותו ספת הגרפולוג ולנתח את כתב ידו.`,
    date: '25.08.2020',
    text: '.גרפולוגיה היא תורה פסאודו-מדעית הקושרת בין כתב ידו של אדם לבין אישיותו ענף אחר, המזוהה בטעות עם גרפולוגיה .נקרא ניתוח מסמכים וחתימות. תחום זה בוחן זיוף מסמכים וחתימות תוך שימוש בשיטות מדעיות כאשר העוסקים בו מוכרים כעדים מומחים בבית משפט. גרפולוגים טוענים כי הם יכולים להסיק מידע על אישיותו וחייו של אדם על פי כתב ידו. מחקרים אמפיריים אשר בחנו את תקפות שיטות האבחון בגרפולוגיה מצאו פעם אחר פעם כי לא קיים מתאם',
    img: writings,
  },
];

const Couch = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-7xl font-bold text-p-blue-dark text-center">
          {strings.title}
        </h1>
        <h3 className="text-3xl font-bold text-p-blue text-center">
          {strings.subtitle}
        </h3>
      </div>

      <div className="w-full flex justify-between px-4 mt-8 pb-8">
        <select
          className="pr-4 pl-8 bg-p-brown rounded-lg text-p-blue font-bold text-2xl hover:bg-p-brown-dark outline-none "
          name="sortBy"
        >
          <option>{strings.orderBy}</option>
        </select>
        <div className="flex justify-evenly">
          <div className="relative w-6/12 ">
            <input
              placeholder={strings.search}
              className="placeholder-p-gray-dark font-bold text-2xl border-p-blue border-2 rounded-md  w-full pr-8 text-p-blue outline-none"
            />
            <img
              src={SearchIcon}
              style={{
                bottom: '4px',
                right: '5px',
              }}
              className="absolute"
              width="24px"
              height="24px"
            />
          </div>

          <a className="font-bold text-p-blue text-2xl">? {strings.moreInfo}</a>
        </div>
      </div>

      <div className="flex flex-col divide-y-2 divide-p-brown w-full">
        <span></span>
        <span></span>
      </div>

      <div className="flex flex-col divide-y-2 divide-p-brown w-full">
        {new Array(10).fill().map((i) => (
          <CouchItem data={data[0]} key={i} />
        ))}
        <div className="py-20 flex justify-center items-center">
          <span className="text-2xl px-4 text-p-blue">&lt;</span>
          <ul className="flex justify-center divide-x-2 divide-p-blue text-p-blue text-3xl flex-row-reverse">
            <li className="list-none px-2">
              <a>1</a>
            </li>
            <li className="list-none px-2">
              <a>2</a>
            </li>
            <li className="list-none px-2">
              <a>3</a>
            </li>
            <li className="list-none px-2">
              <a>4</a>
            </li>
          </ul>
          <span className="text-2xl px-4 text-p-blue">&gt;</span>
        </div>
      </div>

      {/* <CouchItemPage item={data[0]} /> */}
    </>
  );
};

export default Couch;
