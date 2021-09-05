import useDomParser from 'hooks/useDomParser';
import React from 'react';

const ServiceItem = ({ item }) => {
  const [parsedDescription] = useDomParser(item.description, 'text/html');
  return (
    <div className="grid grid-cols-6 py-20 px-10">
      <div className="col-span-1 m-auto">
        <img src={'../images/' + item.image} alt="" />
      </div>
      <div className="col-span-5 px-14">
        <h1 className="font-bold text-5xl text-p-blue-dark pb-6">{item.title}</h1>
        <p className="text-p-blue text-3xl">{parsedDescription}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
