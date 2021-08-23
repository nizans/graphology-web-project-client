import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
const CouchItem = ({ data }) => {
  return (
    <div className="grid grid-cols-8 gap-x-8 py-14">
      <div
        className="col-span-2"
        style={{
          height: '290px',
          width: '275px',
        }}>
        <img className=" object-cover w-full h-full" src={data.img} alt="" />
      </div>
      <div className="col-span-5">
        <h1 className="_text-bold-4xl">{data.title}</h1>
        <h3 className="_text-xl pb-3">{data.date}</h3>
        <p
          style={{
            columnCount: '2',
          }}
          className="align-middle _text-2xl">
          {data.text}
        </p>
      </div>

      <ReadMoreBtn className="col-span-1 col-start-8 mr-auto mt-auto" href="/" />
    </div>
  );
};

export default CouchItem;
