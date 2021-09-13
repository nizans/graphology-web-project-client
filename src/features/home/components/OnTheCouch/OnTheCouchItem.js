import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import { useRouteMatch } from 'react-router';
import TableItemImage from 'features/admin/components/UI/TableItemImage';
import { toDate } from 'utils/toDate';
import useDomParser from 'hooks/useDomParser';
import { truncate } from 'lodash-es';

const OnTheCouchItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  const { publishDate, title, images, _id, text } = item;
  const date = toDate(publishDate);
  const [parsedText] = useDomParser(text);
  return (
    <div className="flex w-full justify-evenly py-16  items-center">
      <TableItemImage image={images} maxHeight={350} width="100%" imgClassName="object-cover" />
      <div className="flex flex-col justify-start _text-2xl">
        <div className="pb-4">
          <h1 className="_text-bold-3xl">{title}</h1>
          <h3 className="_text-xl">{date}</h3>
        </div>

        <p className="_text-xl max-w-sm break-words">{truncate(parsedText, { separator: ' ', length: 400 })}</p>
        <ReadMoreBtn to={`${path}/${_id}`} />
      </div>
    </div>
  );
};

export default OnTheCouchItem;
