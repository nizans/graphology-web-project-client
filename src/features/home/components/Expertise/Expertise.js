import React, { useEffect } from 'react';
import ExpertiseContainer from './ExpertiseContainer';
import BriefCase from '../../../../assets/icons/experise_breifcase.svg';
import OpenBook from '../../../../assets/icons/experise_openbook.svg';
import Speech from '../../../../assets/icons/expertise_speech.svg';
import Arrow from '../../../../assets/icons/down_arrow.png';
import Slider from 'react-slick';
import { useFetchServices } from 'features/services';

const strings = {
  title: 'תחומי התמחות',
  subTitle: 'שירותים ואבחונים גרפולוגים',
};

const fallbackData = [
  {
    title: 'קורסים וסדנאות',
    text: 'קורס הוא בדרך כלל תנאי. לקידומו של החייל לתפקיד מסוים. מוסדות להכשרה מקצועית גופים למתן קורס ספציפי, לעיתים כזה המהווה תנאי לקבלת רישיון מסוים במתנ"סים ומרכזי למידה',
    button: 'לקורסים',
    icon: OpenBook,
  },
  {
    title: 'הרצאות',
    text: 'הרצאה היא הצגה מילולית שנועדה להעביר מידע, או ללמד נושא מסוים; למשל, על ידי מרצה באוניברסיטה הרצאות משמשות להעברת מידע על נושא מסוים, כדוגמת היסטוריה',
    button: 'להרצאות',
    icon: Speech,
  },
  {
    title: 'ייעוץ תעסוקתי',
    text: 'תוכניות לעידוד תעסוקה הן תוכניות שמטרתן לסייע לבלתי מועסקים (הן למובטלים והן לפרטים המצויים מחוץ לכוח העבודה) להיקלט בשוק העבודה לעיתים המדינה',
    button: 'לייעוץ תעסוקתי',
    icon: BriefCase,
  },
];

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className + ` transform transition-all -rotate-90  scale-300 hover:scale-350 `}
      style={{ ...style, right: '-40px' }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className + ` transform transition-all rotate-90  scale-300 hover:scale-350 `}
      style={{ ...style, left: '-40px' }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
}
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  className: 'center',
  centerMode: true,
  centerPadding: '-2px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Expertise = () => {
  const { isLoading, error, data } = useFetchServices();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="flex  flex-col w-full items-center ">
        <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
        <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
      </div>
      {data && data.payload && (
        <Slider {...sliderSettings}>
          {data.payload.map((item, i) => (
            <ExpertiseContainer data={item} key={item._id} />
          ))}
        </Slider>
      )}
      {!data && (
        <Slider {...sliderSettings}>
          {fallbackData.map((item, i) => (
            <ExpertiseContainer data={item} key={i} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default Expertise;
