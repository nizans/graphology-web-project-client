import React, { useContext, useEffect } from 'react';
import Section from 'components/common/Section';
import { CONTENTS_API } from '..';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import ImageBox from 'components/common/ImageBox';
import Underline from 'components/UI/Underline';
import { useFetchData } from 'utils/apiRequests';

const strings = { loading: 'טוען' };

const CouchItemPage = () => {
  const breadCrumbsTitleCTX = useContext(BreadCrumbsTitleContext);

  const { id } = useParams();
  const { isLoading, error, data: item } = useFetchData(CONTENTS_API.GET_BY_ID(id));

  useEffect(() => {
    if (item) {
      breadCrumbsTitleCTX.setTitle(item._id, item.title);
    }
  }, [item]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading || error) {
    return (
      <Section>
        <div className="flex justify-between items-center pb-1">
          <h1 className="_text-bold-dark-5xl">{isLoading && strings.loading}</h1>
          {error && <h3 className="_text-xl">{error.message}</h3>}
        </div>
      </Section>
    );
  }

  if (item) {
    return (
      <Section className="pb-6 ">
        <div className="flex justify-between items-center pb-1 ">
          <h1 className="_text-bold-dark-5xl">{item.title}</h1>
          <h3 className="_text-2xl">{item.date}</h3>
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
    );
  }
};

export default CouchItemPage;
