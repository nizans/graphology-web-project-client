import { useDeleteArticle, useFetchArticles } from 'features/articles';
import React, { useEffect } from 'react';
import Table from './Table';
const ArticlesTable = () => {
  const { isLoading, error, data } = useFetchArticles();
  const mutation = useDeleteArticle();
  useEffect(() => {

  }, [data]);
  return <Table type="articles" isLoading={isLoading} error={error} data={data} mutation={mutation} />;
};

export default ArticlesTable;
