import Pagintation from 'components/common/Pagintation';
import ErrorSerction from 'components/UI/ErrorSerction';
import LoadingSection from 'components/UI/LoadingSection';
import SearchInput from 'components/UI/SearchInput';
import useQueryParams from 'hooks/useQueryParams';
import React, { useState } from 'react';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import ButtonsCell from '../UI/ButtonsCell';

const strings = {
  actions: 'פעולות',
};

const Table = ({ type, generateCell, headers, apiRequests }) => {
  const page = useQueryParams().get('page');
  const find = useQueryParams().get('find');
  const sortby = useQueryParams().get('sortby') || '-uploadDate';
  const [searchInput, setSearchInput] = useState('');
  //   const { mutate, isLoading: isMutating } = useDeleteMutation(apiRequest.DELETE);
  //   const { isLoading, error, data, isSuccess } = useFetchData(
  //     apiRequest.GET_ALL,
  //     find ? { find, page, sortby } : { page, sortby }
  //   );
  const { mutate, isLoading: isMutating } = useMutateData(apiRequests.delete);
  const { isLoading, error, data, isSuccess } = useFetchData(apiRequests.read(null, { find, page, sortby }));

  const handleDeleteItem = id => {
    console.log(apiRequests.delete);
    mutate(id);
  };

  return (
    <>
      <div className="w-2/12 my-2">
        <SearchInput value={searchInput} handleSearch={setSearchInput} />
      </div>
      {isLoading || isMutating ? (
        <LoadingSection />
      ) : (
        <>
          {error && <ErrorSerction addToDef={300} error={error} />}
          {isSuccess && (
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
                    <tr
                      key={item._id}
                      className={`border-p-gray-dark border-b-2 ${i % 2 !== 0 ? 'bg-p-brown-light' : ''}`}>
                      <td>{i + 1}</td>
                      {generateCell(item)}
                      <td>
                        <ButtonsCell type={type} _id={item._id} onDelete={handleDeleteItem} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>{isSuccess && <Pagintation page={data.page} pages={data.pages} />}</div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Table;
