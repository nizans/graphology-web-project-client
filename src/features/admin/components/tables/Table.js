import Pagintation from 'components/common/Pagintation';
import Section from 'components/common/Section';
import LoadingSection from 'components/UI/LoadingSection';
import SearchInput from 'components/UI/SearchInput';
import useQueryParams from 'hooks/useQueryParams';
import React from 'react';
import { useState } from 'react';

import { useDeleteMutation, useFetchData } from 'utils/apiRequests';
import ButtonsCell from '../UI/ButtonsCell';

const strings = {
  actions: 'פעולות',
};

const Table = ({ type, generateCell, headers, API_REQUEST }) => {
  const page = useQueryParams().get('page');
  const [searchInput, setSearchInput] = useState('');

  const { mutate, isLoading: isMutating } = useDeleteMutation(API_REQUEST.DELETE);
  const { isLoading, error, data } = useFetchData(
    API_REQUEST.GET_ALL,
    searchInput ? { find: searchInput, page } : { page }
  );

  const handleDeleteItem = id => {
    mutate(id);
  };

  if (error) return <>{error.message}</>;
  if (!isLoading) console.log(data);
  return (
    <Section>
      <div className="w-2/12 my-2">
        <SearchInput value={searchInput} handleSearch={setSearchInput} />
      </div>
      {isLoading || isMutating ? (
        <LoadingSection />
      ) : (
        <>
          <table className="table-auto w-full ">
            <thead className="bg-p-brown-light border-b-2 border-p-gray-dark text-right _text-bold-xl">
              <tr>
                <th>#</th>
                {headers()}
                <th>{strings.actions}</th>
              </tr>
            </thead>
            <tbody className="_text-xl">
              {data.payload.map((item, i) => (
                <tr key={item._id} className={`border-p-gray-dark border-b-2 ${i % 2 !== 0 ? 'bg-p-brown-light' : ''}`}>
                  <td>{i + 1}</td>
                  {generateCell(item)}
                  <td>
                    <ButtonsCell type={type} _id={item._id} onDelete={handleDeleteItem} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Pagintation page={data.page} pages={data.pages} />
          </div>
        </>
      )}
    </Section>
  );
};

export default Table;
