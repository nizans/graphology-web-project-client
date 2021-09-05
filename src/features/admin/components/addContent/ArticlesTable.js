import { useDeleteArticle, useFetchArticles } from 'features/articles';
import React from 'react';
import { toDate } from 'utils/toDate';
import Table from './Table';
const strings = {
  title: 'שם',
  souceFrom: 'מקור הכתבה',
  link: 'לינק',
  image: 'תמונה',
  uploadDate: 'תאריך העלאה',
};
const ArticlesTable = () => {
  const headers = () => {
    return (
      <>
        <th>{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.souceFrom}</th>
        <th>{strings.link}</th>
        <th>{strings.uploadDate}</th>
      </>
    );
  };
  const generateCell = item => {
    return (
      <>
        <td>
          <img
            onError={e => {
              e.target.onerror = null;
              e.target.src = 'http://placehold.jp/150x150.png';
            }}
            width="100px"
            className="h-full object-fit m-2 rounded-md border-2 border-p-gray"
            src={item.image ? item.image : 'http://placehold.jp/150x150.png'}
            alt=""
          />
        </td>
        <td>{item.title}</td>
        <td>{item.source.from}</td>
        <td>
          <a className="hover:font-bold" href={item.source.url}>
            {strings.link}
          </a>
        </td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };
  return (
    <Table
      type="articles"
      headers={headers}
      generateCell={generateCell}
      fetcher={useFetchArticles}
      mutationFn={useDeleteArticle}
    />
  );
};

export default ArticlesTable;
