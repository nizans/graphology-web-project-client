import Pagintation from 'components/common/Pagintation';
import Section from 'components/common/Section';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import useQueryParams from 'hooks/useQueryParams';
import React from 'react';
import { useFetchData } from 'utils/apiRequests';
import { ARTICLES_API } from '..';
import ArticleContainer from './ArticleContainer';

const strings = {
  title: 'כתבות - מיכל דורון',
};

export const Articles = () => {
  const page = useQueryParams().get('page');
  const { data, isLoading } = useFetchData(ARTICLES_API.GET_ALL, { page });

  if (isLoading) return <LoadingSection />;

  return (
    <Section>
      <div className="flex flex-col items-center mb-9">
        <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
        <Underline style={{ width: '33%' }} />
        <div className="grid grid-cols-3 pt-16  gap-28">
          {data.payload.map(item => (
            <ArticleContainer key={item._id} item={item} />
          ))}
        </div>
      </div>
      <Pagintation pages={data.pages} page={data.page} />
    </Section>
  );
};
