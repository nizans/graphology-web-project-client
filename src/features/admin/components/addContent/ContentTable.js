import { useDeleteContent, useFetchContents } from 'features/couch';
import { truncate } from 'lodash-es';
import React from 'react';
import { toDate } from 'utils/toDate';
import Table from './Table';

const strings = {
  title: 'שם',
  subtitle: 'תת כותרת',
  image: 'תמונה',
  publishDate: 'תאריך פרסום',
  uploadDate: 'תאריך העלאה',
};

const ContentsTable = () => {
  //   const { isLoading, error, data } = useFetchContents();
  //   const mutation = useDeleteContent();
  const headers = () => {
    return (
      <>
        <th>{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.subtitle}</th>
        <th>{strings.publishDate}</th>
        <th>{strings.uploadDate}</th>
      </>
    );
  };
  const generateCell = item => {
    return (
      <>
        <td>
          <img
            width="100px"
            className="h-full object-fit m-2 rounded-md border-2 border-p-gray"
            src={item.image ? item.image : 'http://placehold.jp/150x150.png'}
            alt=""
          />
        </td>
        <td>{item.title}</td>
        <td>{truncate(item.subtitle, { length: 75, separator: ' ' })}</td>
        <td>{toDate(item.publishDate)}</td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };
  return (
    <Table
      type="contents"
      headers={headers}
      generateCell={generateCell}
      fetcher={useFetchContents}
      mutationFn={useDeleteContent}
    />
  );
};

export default ContentsTable;
