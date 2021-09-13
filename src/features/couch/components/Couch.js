import React from 'react';
import CouchItem from './CouchItem';
import { CONTENTS_API } from '..';
import useQueryParams from 'hooks/useQueryParams';
import Section from 'components/common/Section';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import SearchInput from 'components/UI/SearchInput';
import Pagintation from 'components/common/Pagintation';
import { useFetchData } from 'utils/apiRequests';
import { useState } from 'react';
import { useEffect } from 'react';
const strings = {
  title: 'על ספת הגרפולוג',
  subtitle: 'ניתוח כתב יד של יוצרים שונים',

  moreInfo: 'מידע נוסף',
  orderBy: 'מיון לפי',
  loading: 'טוען',
};

const Couch = () => {
  const page = useQueryParams().get('page');
  const [searchInput, setSearchInput] = useState(null);
  const { isLoading, data } = useFetchData(CONTENTS_API.GET_ALL, searchInput ? { find: searchInput } : { page });

  return isLoading ? (
    <LoadingSection />
  ) : (
    <Section>
      <div className="w-full">
        <h1 className="_text-bold-dark-7xl text-center">{strings.title}</h1>
        <h3 className="_text-bold-3xl text-center">{strings.subtitle}</h3>
      </div>

      <div className="w-full flex justify-between px-4 mt-8 pb-8">
        <select
          className="pr-4 pl-8 bg-p-brown rounded-lg _text-bold-2xl hover:bg-p-brown-dark outline-none "
          name="sortBy">
          <option>{strings.orderBy}</option>
        </select>
        <div className="flex justify-evenly">
          <SearchInput value={searchInput} handleInput={setSearchInput} />
          <span className="_text-bold-2xl mr-4 cursor-pointer">? {strings.moreInfo}</span>
        </div>
      </div>

      <Underline thickness={4} />

      <div className="flex flex-col divide-y-2 divide-p-brown w-full">
        {data.payload.map((item, i) => (
          <CouchItem data={item} key={item._id} />
        ))}
        <Pagintation pages={data.pages} page={data.page} />
      </div>
    </Section>
  );
};

export default Couch;
