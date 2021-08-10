import React from 'react';

const ExpertiseContainer = ({ data }) => {
  return (
    <div className="flex flex-col font-bold text-p-blue-dark text-xl items-center p-8 mb-4">
      <img src={data.icon} width="180px" alt="" />
      <h1 className="text-3xl mt-6 ml-auto">{data.title}</h1>
      <p className=" text-p-blue font-normal">{data.text}</p>
      <button className="bg-p-brown py-2 px-4 ml-auto font-bold mt-4 hover:bg-p-brown-dark">
        {data.button}
      </button>
    </div>
  );
};

export default ExpertiseContainer;
