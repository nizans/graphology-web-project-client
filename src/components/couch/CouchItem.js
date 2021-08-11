import React from 'react';
import ReadMoreBtn from '../common/ReadMoreBtn';
const CouchItem = ({ data }) => {
  return (
    <div className="grid grid-cols-8 gap-x-8 py-20">
      <img className="col-span-2 " src={data.img}></img>
      <div className="col-span-5">
        <h1 className="text-4xl font-bold text-p-blue">{data.title}</h1>
        <h3 className="text-xl text-p-blue pb-3">{data.date}</h3>
        <p
          style={{
            columnCount: '2',
          }}
          className="align-middle  text-p-blue text-2xl"
        >
          {data.text}
        </p>
      </div>

      <ReadMoreBtn
        className="col-span-1 col-start-8 mr-auto mt-auto"
        href="/"
      />
    </div>
  );
};

export default CouchItem;
