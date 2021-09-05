import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import { useRouteMatch } from 'react-router-dom';
import { truncate } from 'lodash';
import useDomParser from 'hooks/useDomParser';
const CouchItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  const [parsedText] = useDomParser(item.text, 'text/html');
  return (
    <div className="grid grid-cols-8 gap-x-8 py-14">
      <div
        className="col-span-2"
        style={{
          height: '290px',
          width: '275px',
        }}>
        <img className=" object-cover w-full h-full" src={item.image} alt="" />
      </div>
      <div className="col-span-5">
        <h1 className="_text-bold-4xl">{item.title}</h1>
        <h3 className="_text-xl pb-3">{item.date}</h3>
        <div
          style={{
            columnCount: '2',
          }}
          className="align-middle _text-2xl">
          {truncate(parsedText, { length: 500, separator: ' ' })}
        </div>
      </div>

      <ReadMoreBtn to={`${path}/${item._id}`} className="col-span-1 col-start-8 mr-auto mt-auto" href="/" />
    </div>
  );
};

export default CouchItem;
