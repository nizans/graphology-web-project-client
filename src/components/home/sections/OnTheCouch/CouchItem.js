import React from 'react';
import ReadMoreBtn from '../../../common/ReadMoreBtn';

const CouchItem = ({ data, imgWidth }) => {
  return (
    <div className="flex w-full justify-evenly py-16 items-stretch">
      <img src={data.frontImg} className="max-h-80 object-scale-down" alt="" />

      <div className="flex flex-col justify-start text-p-blue text-2xl">
        <div className="pb-4">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <h3 className="text-xl">{data.date}</h3>
        </div>

        <p className=" text-xl max-w-sm break-words">{data.text}</p>
        <ReadMoreBtn />
      </div>
    </div>
  );
};

export default CouchItem;
