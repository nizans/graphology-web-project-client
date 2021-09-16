import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import Underline from 'components/UI/Underline';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import parse from 'html-react-parser';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetchData } from 'lib/reactQuery';
import { toDate } from 'utils/toDate';
import { articlesApiCRUDRequests } from '..';
import ErrorSerction from 'components/UI/ErrorSerction';
import LoadingSection from 'components/UI/LoadingSection';

const strings = { articleFrom: 'כתבה מתוך: ', publishedAt: 'פורסם בתאריך: ', originalLink: 'לכתבה המקורית' };

const ArticlePage = () => {
  const { id } = useParams();
  const { data: item, isLoading, error } = useFetchData(articlesApiCRUDRequests.read(id));
  const { setTitle } = useContext(BreadCrumbsTitleContext);
  useEffect(() => {
    if (item) setTitle(item._id, item.title);
  }, [item]);
  if (item) {
    const { title, text, publishDate, images, sourceFrom, sourceURL } = item;
    const date = strings.publishedAt + toDate(publishDate);
    const pNodes = parse(text);

    if (error) return <ErrorSerction error={error} />;

    return isLoading ? (
      <LoadingSection />
    ) : (
      <Section className="flex flex-col items-center mb-9">
        <div className="text-center">
          <h1 className="_text-bold-dark-7xl">{title}</h1>
          <h3 className="_text-3xl font-light">{strings.articleFrom + sourceFrom}</h3>
          <Underline thickness={4} />
        </div>
        <div className="w-10/12 my-4">
          <ImageBox sliderWrapperClassName="px-8" images={images} maxHeight={600} />
        </div>

        <div className="my-4 _text-3xl">{pNodes}</div>
        <div className="_text-3xl font-light mr-auto mt-8">
          <h3>{date}</h3>
          <a className="underline" href={sourceURL}>
            {strings.originalLink}
          </a>
        </div>
      </Section>
    );
  }

  return <Section>Loading</Section>;
};

export default ArticlePage;
