import { SERVICES_API } from 'features/services';
import { truncate } from 'lodash-es';
import React from 'react';
import TableItemImage from '../UI/TableItemImage';
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
    return (
      <>
        <td>
          <TableItemImage image={item.images} />
        </td>
        <td>{item.title}</td>
        <td>{truncate(item.description, { length: 75, separator: ' ' })}</td>
      </>
    );
  };

  return <Table type="contents" API_REQUEST={SERVICES_API} generateCell={generateCell} headers={headers} />;
};

export default ServiceTable;
