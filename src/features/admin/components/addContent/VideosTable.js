import { useDeleteVideo, useFetchVideos } from 'features/videos';
import { truncate } from 'lodash-es';
import React from 'react';
import { toDate } from 'utils/toDate';
import Table from './Table';

const strings = {
  title: 'שם',
  link: 'לינק',
  image: 'תמונה',
  uploadDate: 'תאריך העלאה',
  description: 'תיאור',
};

const VideosTable = () => {
  const headers = () => {
    return (
      <>
        <th>{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.description}</th>
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
            width="100px"
            className="h-full object-fit m-2 rounded-md border-2 border-p-gray"
            src={item.image ? item.image : 'http://placehold.jp/150x150.png'}
            alt=""
          />
        </td>
        <td>{item.title}</td>
        <td>{truncate(item.description, { length: 75, separator: ' ' })}</td>
        <td>
          <a className="hover:font-bold" href={item.url}>
            {strings.link}
          </a>
        </td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };
  return (
    <Table
      type="videos"
      headers={headers}
      generateCell={generateCell}
      fetcher={useFetchVideos}
      mutationFn={useDeleteVideo}
    />
  );
};

export default VideosTable;
