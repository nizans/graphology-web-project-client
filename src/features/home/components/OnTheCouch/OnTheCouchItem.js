import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import { useRouteMatch } from 'react-router';

const OnTheCouchItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  return (
    <div className="flex w-full justify-evenly py-16 items-stretch">
      <img src={item.frontImg} className="max-h-80 object-scale-down" alt="" />

      <div className="flex flex-col justify-start _text-2xl">
        <div className="pb-4">
          <h1 className="_text-bold-3xl">{item.title}</h1>
          <h3 className="_text-xl">{item.date}</h3>
        </div>

        <p className="_text-xl max-w-sm break-words">{item.text}</p>
        <ReadMoreBtn to={`${path}/${item._id}`} />
      </div>
    </div>
  );
};

export default OnTheCouchItem;
