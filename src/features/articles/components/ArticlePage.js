import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import Underline from 'components/UI/Underline';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import parse from 'html-react-parser';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetchData } from 'utils/apiRequests';
import { toDate } from 'utils/toDate';
import { ARTICLES_API } from '..';

const strings = { articleFrom: 'כתבה מתוך: ', publishedAt: 'פורסם בתאריך: ', originalLink: 'לכתבה המקורית' };

const ArticlePage = () => {
  const { id } = useParams();
  const { data: item } = useFetchData(ARTICLES_API.GET_BY_ID(id));
  const { setTitle } = useContext(BreadCrumbsTitleContext);

  useEffect(() => {
    if (item) setTitle(item._id, item.title);
  }, [item, setTitle]);

  if (item) {
    const { title, text, publishDate, images, sourceFrom, sourceURL } = item;
    const date = strings.publishedAt + toDate(publishDate);
    const pNodes = parse(text);

    //pNodes.splice(1, 0, imageNode());

    return (
      <Section className="flex flex-col items-center mb-9">
        <div className="text-center">
          <h1 className="_text-bold-dark-7xl">{title}</h1>
          <h3 className="_text-3xl font-light">{strings.articleFrom + sourceFrom}</h3>
          <Underline thickness={4} />
        </div>
        <div className="w-10/12 my-4">
          <ImageBox sliderWrapperClassName="px-8" images={images} maxHeight={600} />
        </div>

        <div className="my-4 _text-3xl">
          {pNodes.map((node, i) => (
            <div key={i}>{node}</div>
          ))}
        </div>
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
