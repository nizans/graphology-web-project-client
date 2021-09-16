import Pagintation from 'components/common/Pagintation';
import Section from 'components/common/Section';
import ErrorSerction from 'components/UI/ErrorSerction';
import LoadingSection from 'components/UI/LoadingSection';
import SearchInput from 'components/UI/SearchInput';
import Underline from 'components/UI/Underline';
import useDimensions from 'hooks/useDimensions';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData } from 'lib/reactQuery';
import React, { useState } from 'react';
import { contentsApiCRUDRequests } from '..';
import CouchItem from './CouchItem';
const strings = {
  title: 'על ספת הגרפולוג',
  subtitle: 'ניתוח כתב יד של יוצרים שונים',

  moreInfo: 'מידע נוסף',
  orderBy: 'מיון לפי',
  loading: 'טוען',
};

const Couch = () => {
  const page = useQueryParams().get('page');
  const find = useQueryParams().get('find');
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, data, error, isSuccess } = useFetchData(
    contentsApiCRUDRequests.read(null, { find, page, searchInput })
  );
  const [ref, dim] = useDimensions();

  
  return isLoading ? (
    <LoadingSection />
  ) : (
    <Section>
      <div ref={ref}>
        <div className="w-full">
          <h1 className="_text-bold-dark-7xl text-center">{strings.title}</h1>
          <h3 className="_text-bold-3xl text-center">{strings.subtitle}</h3>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between px-4 mt-8 pb-8">
          <select
            className="pr-4 pl-8 bg-p-brown w-3/4 m-auto sm:m-0 sm:w-auto rounded-lg _text-bold-2xl hover:bg-p-brown-dark outline-none "
            name="sortBy">
            <option>{strings.orderBy}</option>
          </select>
          <div className="flex flex-col sm:flex-row justify-evenly items-center">
            <SearchInput className="m-auto" value={searchInput} handleSearch={setSearchInput} />
            <span className="_text-bold-2xl sm:mr-6 cursor-pointer">? {strings.moreInfo}</span>
          </div>
        </div>
      </div>

      <Underline thickness={4} />

      {error && <ErrorSerction error={error} addToDef={dim?.height + 1} />}
      {isSuccess && (
        <div className="flex flex-col divide-y-2 divide-p-brown w-full">
          {data.payload.map((item, i) => (
            <CouchItem data={item} key={item._id} />
          ))}
          <Pagintation pages={data.pages} page={data.page} />
        </div>
      )}
    </Section>
  );
};

export default Couch;
