import React from 'react';

const ExpertiseContainer = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-between p-8 mb-4">
      <img src={data.icon} width="180px" alt="" />
      <h1 className="_text-bold-3xl mt-6 ml-auto">{data.title}</h1>
      <p className=" _text-xl">{data.text}</p>
      <button className="bg-p-brown py-2 px-4 ml-auto  mt-4 _text-bold-xl hover:bg-p-brown-dark">
        {data.button}
      </button>
    </div>
  );
};

export default ExpertiseContainer;
