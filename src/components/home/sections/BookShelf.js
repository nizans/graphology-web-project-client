import React, { useRef } from 'react';
import Shelf from '../../../assets/icons/Shelf.svg';
import EmptyBook from '../../../assets/icons/book_side_emprty.svg';
import BookSide from '../../../assets/icons/book_side.svg';
import BookFront from '../../../assets/icons/book_front.svg';
import DownArrow from '../../../assets/icons/down_arrow.png';
import BookSideways from '../../../assets/icons/BookSideways.svg';
const strings = {
  title: 'גרפולוגיה',
  subTitle: 'תורת כתב-יד',
  findMore: 'גלה עוד',
};
const BookShelf = ({ translateY }) => {
  const readMoreTextRef = useRef(null);
  const readMoreImgRef = useRef(null);
  const readMoreAnimation = (e) => {
    console.log(e.type);
    if (e.type === 'mouseenter') {
      console.log(readMoreTextRef.current.classList);
      readMoreTextRef.current.classList.add('translate-y-4');
      readMoreImgRef.current.classList.add(`translate-y-2`);
    }
    if (e.type === 'mouseleave') {
      readMoreTextRef.current.classList.remove('translate-y-4');
      readMoreImgRef.current.classList.remove(`translate-y-2`);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full pb-4">
      <div className="flex flex-col items-center h-full">
        <h1 className="text-15xl leading-none font-bold text-p-blue-dark">
          {strings.title}
        </h1>
        <h3 className="text-8xl leading-7 font-bold text-p-blue">
          {strings.subTitle}
        </h3>
      </div>

      <div
        className="h-full"
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div className="flex justify-between items-end">
          <div className="flex items-end">
            <img
              src={BookSide}
              alt="Book img"
              className="transform transition-all hover:rotate-2"
            />
            <img src={EmptyBook} alt="Empty Book img" />
            <img src={EmptyBook} alt="Empty Book img" />
            <img src={BookSideways} alt="Book Side" />
          </div>
          <div
            className="flex flex-col items-center pb-4 cursor-pointer"
            onMouseEnter={readMoreAnimation}
            onMouseLeave={readMoreAnimation}
          >
            <h1
              ref={readMoreTextRef}
              className="text-4xl text-p-blue transform transition-all"
            >
              {strings.findMore}
            </h1>
            <img
              ref={readMoreImgRef}
              src={DownArrow}
              alt="down arrow"
              className="transform transition-all"
            />
          </div>
          <div className="flex items-end">
            <img
              src={BookFront}
              alt="Book front img"
              className="transform transition-all hover:rotate-2"
            />
            <img src={EmptyBook} alt="Empty Book img" />
          </div>
        </div>
        <img src={Shelf} alt="Shelf img" />
      </div>
    </div>
  );
};

export default BookShelf;
