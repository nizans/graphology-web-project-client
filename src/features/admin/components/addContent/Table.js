import React from 'react';
import ButtonsCell from './ButtonsCell';

const strings = {
  actions: 'פעולות',
};

const Table = ({ fetcher, type, mutationFn, generateCell, headers }) => {
  const mutation = mutationFn();
  const { isLoading, error, data } = fetcher();
  const handleDeleteItem = id => {
    mutation.mutate(id);
  };
  const handleEditItem = () => {};

  if (isLoading || mutation.isLoading) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  return (
    <table className="table-auto w-full ">
      <thead className="bg-p-brown-light border-b-2 border-p-gray text-right _text-bold-xl">
        <tr>
          <th>#</th>
          {headers()}
          <th>{strings.actions}</th>
        </tr>
      </thead>
      <tbody className="_text-xl">
        {!error &&
          data &&
          data.payload &&
          data.payload.map((item, i) => (
            <tr key={item._id} className={`border-p-gray border-b-2 ${i % 2 !== 0 ? 'bg-p-brown-light' : ''}`}>
              <td>{i + 1}</td>
              {generateCell(item)}
              <td>
                <ButtonsCell type={type} _id={item._id} onDelete={handleDeleteItem} handleEditItem={handleEditItem} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
