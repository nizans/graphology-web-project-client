import React from 'react';
import BooksItem from '../components/BooksItem';
import Book1 from 'assets/imgs/books/1BookMockup.png';
import Book2 from 'assets/imgs/books/2BookMockup.png';
import Section from 'components/common/Section';

const data = [
  {
    img: Book1,
    title: 'על ספת הגרפולוג',
    author: 'מאת מיכל דורון',
    description:
      'הגרפולוגית והמשוררת מיכל דורון ניתחה את כתבי היד של סופרים ומשוררים עבריים וביניהם: נתן אלתרמן, דוד אבידן, יונה , וולך, פנחס שדה, לאה גולדברג,מנדלי מוכר ספרים, חיים הזז .אלכסנדר פן, מרים ילן שטקליס ועוד ניתוחיה מגלים באופן בלעדי דברים מרתקים ונסתרים באישיותם .המיוחדת של טובי הסופרים והמשוררים בשפה העברית ספר מרתק מאוד החושף את הצד האנושי, שלא תמיד היה .גלוי לעין אצלם',
  },
  {
    img: Book2,
    title: 'בקרום הדק',
    author: 'מאת מיכל דורון',
    description: `,ספר שירים – "בקרום הדק" – הוצ' עקד 2010 .זכה בתעודת הוקרה ע"ש דוד לויתן ספריה של מיכל דורון משקפים עולם פנימי מורכב ומשלבים היבטים תבוניים,וביטויים של עומק רגשי. הקורא נחשף לדינמיקה של פגיעות חלום, תקוות לנוכחות הנארגים ברקמה פואטית .ייחודית. המשוררת מצליחה להתרחק מקישוטי סרק והעמדת פנים .נאמנה לאמת שלה היא בונה מגוון של אימג'יים מקוריים ומפתיעים`,
  },
];

const Books = () => {
  return (
    <Section>
      {data.map((item, i) => (
        <BooksItem data={item} key={i} />
      ))}
    </Section>
  );
};

export default Books;
