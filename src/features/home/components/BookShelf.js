import React, { useRef } from 'react';
import Shelf from '../../../assets/icons/Shelf.svg';
import EmptyBook from '../../../assets/icons/book_side_emprty.svg';
import { ReactComponent as BookSide } from '../../../assets/icons/book_side.svg';
import { ReactComponent as BookFront } from '../../../assets/icons/book_front.svg';
import DownArrow from '../../../assets/icons/down_arrow.png';
import BookSideways from '../../../assets/icons/BookSideways.svg';
import './bookshelf.css';

const strings = {
  title: 'גרפולוגיה',
  subTitle: 'תורת כתב-יד',
  findMore: 'גלה עוד',
};

const BookShelf = ({ translateY }) => {
  const readMoreTextRef = useRef(null);
  const readMoreImgRef = useRef(null);
  const readMoreAnimation = e => {
    if (e.type === 'mouseenter') {
      readMoreTextRef.current.classList.add('translate-y-4');
      readMoreImgRef.current.classList.add(`translate-y-2`);
    }
    if (e.type === 'mouseleave') {
      readMoreTextRef.current.classList.remove('translate-y-4');
      readMoreImgRef.current.classList.remove(`translate-y-2`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-full">
        <h1 className=" leading-none _text-bold-dark-12xl">{strings.title}</h1>
        <h3 className=" leading-7 _text-bold-7xl">{strings.subTitle}</h3>
      </div>

      <div
        className="h-full"
        style={{
          transform: `translateY(${translateY}px)`,
        }}>
        <div className="flex justify-between items-end">
          <div className="flex items-end">
            <BookSide className="transform transition-all hover:rotate-2" />
            <img src={EmptyBook} alt="" />
            <img src={EmptyBook} alt="" />
            <img src={BookSideways} alt="" />
          </div>
          <div
            className="flex flex-col items-center pb-4 cursor-pointer"
            onMouseEnter={readMoreAnimation}
            onMouseLeave={readMoreAnimation}>
            <h1 ref={readMoreTextRef} className="_text-bold-4xl transform transition-all">
              {strings.findMore}
            </h1>
            <img ref={readMoreImgRef} src={DownArrow} alt="" className="transform transition-all" />
          </div>
          <div className="flex items-end">
            <BookFront className="transform transition-all hover:rotate-2" />
            <img src={EmptyBook} alt="" />
          </div>
        </div>
        <img src={Shelf} alt="" className="w-full" />
      </div>
    </>
  );
};

export default BookShelf;
