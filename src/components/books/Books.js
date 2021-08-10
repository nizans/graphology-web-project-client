import React from 'react';
import BooksItem from './BooksItem';
import Book1 from '../../assets/imgs/books/1BookMockup.png';
import Book2 from '../../assets/imgs/books/2BookMockup.png';

const data = [
  {
    img: Book1,
    title: 'על ספת הגרפולוג',
    author: 'מאת מיכל דורון',
    description:
      'הגרפולוגית והמשוררת מיכל דורון ניתחה את כתבי היד של סופרים ומשוררים עבריים וביניהם: נתן אלתרמן, דוד אבידן, יונה , וולך, פנחס שדה, לאה גולדברג,מנדלי מוכר ספרים, חיים הזז .אלכסנדר פן, מרים ילן שטקליס ועוד ניתוחיה מגלים באופן בלעדי דברים מרתקים ונסתרים באישיותם .המיוחדת של טובי הסופרים והמשוררים בשפה העברית ספר מרתק מאוד החושף את הצד האנושי, שלא תמיד היה .גלוי לעין אצלם',
  },
];

const Books = () => {
  return (
    <>
      {data.map((item, i) => (
        <BooksItem data={item} key={i} />
      ))}
    </>
  );
};

export default Books;
