import React from 'react';
import BooksItem from './BooksItem';
import { BOOKS_API } from '..';
import LoadingSection from 'components/UI/LoadingSection';
import { useFetchData } from 'utils/apiRequests';
import useQueryParams from 'hooks/useQueryParams';
import Pagintation from 'components/common/Pagintation';

const Books = () => {
  const page = useQueryParams().get('page');
  const { isLoading, data } = useFetchData(BOOKS_API.GET_ALL, { page });
  return isLoading ? (
    <LoadingSection />
  ) : (
    <div>
      {data.payload.map((item, i) => (
        <BooksItem data={item} key={i} />
      ))}
      <Pagintation page={data.page} pages={data.pages} />\
    </div>
  );
};

export default Books;
