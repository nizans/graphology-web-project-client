import { useDeleteService, useFetchService } from 'features/services';
import { truncate } from 'lodash-es';
import React from 'react';
import Table from './Table';

const strings = {
  title: 'שם השירות',
  description: 'תיאור',
  image: 'תמונה',
};
const ServiceTable = () => {
  const headers = () => {
    <>
      <th>{strings.image}</th>
      <th>{strings.title}</th>
      <th>{strings.description}</th>
    </>;
  };
  const generateCell = item => {
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
    </>;
  };

  return (
    <Table
      type="contents"
      fetcher={useFetchService}
      mutationFn={useDeleteService}
      generateCell={generateCell}
      headers={headers}
    />
  );
};

export default ServiceTable;
