import React from 'react';

const ServiceItem = ({ item }) => {
  return (
    <div className="grid grid-cols-6 py-11">
      <div className="col-span-1 m-auto">
        <img src={item.img} />
      </div>
      <div className=" col-span-5 px-14">
        <h1 className="font-bold text-5xl text-p-blue-dark pb-6">
          {item.title}
        </h1>
        <p className="text-p-blue text-3xl">{item.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
