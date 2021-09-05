import useDomParser from 'hooks/useDomParser';
import { truncate } from 'lodash-es';
import React from 'react';

const titleStrToBtn = str => {
  return 'ל' + str;
};

const ExpertiseContainer = ({ data }) => {
  const [parsedDescription] = useDomParser(data.description, 'text/html');
  return (
    <div
      className="p-8 border-p-brown border-r-2"
      style={{
        display: 'grid',
        gridTemplateRows: '7',
        gridAutoRows: '1fr',
      }}>
      <div className="row-span-3">
        <img src={'images/' + data.image} className="h-full mx-auto" alt="" />
      </div>
      <h1 className="row-span-1 _text-bold-3xl mt-6 ml-auto">{data.title}</h1>
      <p className="row-span-2 _text-xl" style={{ direction: 'rtl' }}>
        {truncate(parsedDescription, { length: 150, separator: ' ' })}
      </p>
      <button className="row-span-1 bg-p-brown py-2 px-4 ml-auto  mt-4 _text-bold-xl hover:bg-p-brown-dark">
        {titleStrToBtn(data.title)}
      </button>
    </div>
  );
};

export default ExpertiseContainer;
