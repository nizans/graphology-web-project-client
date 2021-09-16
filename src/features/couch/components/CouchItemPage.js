import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import ErrorSerction from 'components/UI/ErrorSerction';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import parse from 'html-react-parser';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { toDate } from 'utils/toDate';
import { contentsApiCRUDRequests } from '..';

const CouchItemPage = () => {
  const breadCrumbsTitleCTX = useContext(BreadCrumbsTitleContext);

  const { id } = useParams();
  const { isLoading, error, data: item, isSuccess } = useFetchData(contentsApiCRUDRequests.read(id));

  useEffect(() => {
    if (item) {
      breadCrumbsTitleCTX.setTitle(item._id, item.title);
    }
  }, [item]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) return <LoadingSection />;

  return (
    (error && <ErrorSerction error={error} />) ||
    (isSuccess && (
      <Section className="pb-6 ">
        <div className="flex justify-between items-center pb-1 ">
          <h1 className="_text-bold-dark-5xl">{item.title}</h1>
          <h3 className="_text-2xl">{toDate(item.publishDate || item.uploadDate)}</h3>
        </div>
        <Underline />
        <h2 className="py-10 _text-bold-3xl  ">{item.subtitle}</h2>

        <div>
          <div>
            <ImageBox
              sliderWrapperClassName="w-1/2 float-right p-8 ml-4"
              imgClassName=""
              images={item.images}
              maxHeight={500}
            />
          </div>
          <div className="_text-2xl break-words leading-normal w-full">{parse(item.text)}</div>
        </div>
      </Section>
    ))
  );
};

export default CouchItemPage;
