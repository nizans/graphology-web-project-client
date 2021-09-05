import React from 'react';

const ServiceItem = ({ item }) => {
  const parser = new DOMParser();
  let pChilds = parser.parseFromString(item.description, 'text/html').childNodes;
  return (
    <div className="grid grid-cols-6 py-20 px-10">
      <div className="col-span-1 m-auto">
        <img src={'../images/' + item.image} alt="" />
      </div>
      <div className="col-span-5 px-14">
        <h1 className="font-bold text-5xl text-p-blue-dark pb-6">{item.title}</h1>
        <p className="text-p-blue text-3xl">{Array.from(pChilds).map(pC => pC.innerText)}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
