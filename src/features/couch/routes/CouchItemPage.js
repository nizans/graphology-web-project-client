import React, { useContext, useEffect } from 'react';
import ExpandIcon from 'assets/icons/expand_icon.svg';
import useModal from 'hooks/useModal';
import Modal from 'components/common/Modal';
import Section from 'components/common/Section';
import { useFetchContent } from '..';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';

const strings = { loading: 'טוען' };
const CouchItemPage = () => {
  const breadCrumbsTitleCTX = useContext(BreadCrumbsTitleContext);
  const { isShowing, toggle } = useModal();
  const { id } = useParams();
  const { isLoading, error, data: item } = useFetchContent(id);

  useEffect(() => {
    if (item) {
      breadCrumbsTitleCTX.setTitle(item._id, item.title)
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
      <Section className="pb-6 mt-16">
        <div className="flex justify-between items-center pb-1 mt-16">
          <h1 className="_text-bold-dark-5xl">{item.title}</h1>
          <h3 className="_text-2xl">{item.date}</h3>
        </div>
        <div className="flex flex-col divide-y-2 divide-p-brown w-full">
          <span></span>
          <span></span>
        </div>
        <div>
          <h2 className="py-10 _text-bold-3xl">{item.subtitle}</h2>
          <div className="relative" style={{ cursor: 'zoom-in' }} onClick={toggle}>
            <img alt="" src={item.image} className="float-right pl-8" style={{ maxHeight: '550px' }} />
            <Modal isShowing={isShowing} hide={toggle}>
              <div className="relative">
                <span className="absolute border-2 rounded-full" style={{ width: '100px', height: '100px' }}></span>
                <img alt="" src={item.image} />
              </div>
            </Modal>
            <img
              src={ExpandIcon}
              className="absolute right-4 top-4 bg-transparent opacity-80"
              width="46px"
              height="46px"
              alt=""
            />
          </div>
          <div className="_text-2xl break-words leading-normal">{parse(item.text)}</div>
        </div>
      </Section>
    );
  }
};

export default CouchItemPage;
