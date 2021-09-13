import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import { useRouteMatch } from 'react-router-dom';
import { truncate } from 'lodash';
import useDomParser from 'hooks/useDomParser';
import useWindowDimensions from 'hooks/useWindowDimensions';
import BlurredUpImage from 'components/UI/BlurredUpImage';
import useDimensions from 'hooks/useDimensions';

const CouchItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  const [parsedText] = useDomParser(item.text, 'text/html');
  const { width: screenW } = useWindowDimensions();
  const [ref, dim] = useDimensions();

  const imgSrc = (item.images[0] && item.images[0] && { full: item.images[0].full, thumb: item.images[0].thumb }) || {
    full: 'https://via.placeholder.com/150',
    thumb: 'https://via.placeholder.com/150',
  };

  return (
    <div className="flex flex-col md:grid py-14 grid-cols-8 gap-x-8 ">
      <div className="col-span-2 flex justify-center items-center ">
        <BlurredUpImage
          withModal={false}
          height={dim?.height}
          imageSrc={imgSrc.full}
          tinySrc={imgSrc.thumb}
          style={{ backgroundSize: 'cover' }}
        />
      </div>
      <div className="col-span-5 ">
        <h1 className="_text-bold-4xl">{item.title}</h1>
        <h3 className="_text-xl pb-3">{item.date}</h3>
        <div
          ref={ref}
          style={{
            columnCount: screenW < 768 ? '1' : '2',
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
