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
          <h1 className="_text-bold-dark-6xl">{data.title}</h1>
          <h3 className="_text-bold-4xl">{data.author}</h3>
        </div>

        <p className="_text-3xl leading">{data.description}</p>
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
