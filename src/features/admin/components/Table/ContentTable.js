import { useDeleteContent, useFetchContents } from 'features/contact';
import React, { useEffect } from 'react';
import Table from './Table';
const ContentsTable = () => {
  const { isLoading, error, data } = useFetchContents();
  const mutation = useDeleteContent();
  useEffect(() => {

  }, [data]);
  return <Table type="contents" isLoading={isLoading} error={error} data={data} mutation={mutation} />;
};

export default ContentsTable;
