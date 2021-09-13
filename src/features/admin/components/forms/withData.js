import LoadingSection from 'components/UI/LoadingSection';
import React from 'react';
import { useParams } from 'react-router';
import { useFetchData } from 'utils/apiRequests';

const withData = (FormComponent, API_REQUEST) => () => {
  const { id } = useParams();
  const { isLoading, data } = useFetchData(API_REQUEST.GET_BY_ID(id));

  return (
    <>
      {data && <FormComponent data={data} />}
      {isLoading && <LoadingSection />}
    </>
  );
};

export default withData;
