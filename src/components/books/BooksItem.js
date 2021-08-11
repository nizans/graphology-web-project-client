import React from 'react';
import SplitScreen from '../common/SplitScreen';

const strings = {
  orderBook: 'הזמנת ספר',
};

const BooksItem = ({ data }) => {
  return (
    <SplitScreen imgSrc={data.img}>
      <div className="h-full flex flex-col justify-evenly p-0 ">
        <div>
          <h1 className="text-7xl font-bold text-p-blue-dark">{data.title}</h1>
          <h3 className="text-4xl text-p-blue font-bold">{data.author}</h3>
        </div>

        <p className="text-3xl text-p-blue leading">{data.description}</p>
        <button
          style={{ width: 'fit-content' }}
          className="bg-p-brown text-3xl text-p-blue-dark px-10 py-2 rounded-xl font-bold transition-all hover:bg-p-brown-dark"
        >
          {strings.orderBook}
        </button>
      </div>
    </SplitScreen>
  );
};

export default BooksItem;
