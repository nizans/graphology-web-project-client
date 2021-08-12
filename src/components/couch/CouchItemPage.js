import React from 'react';
import ExpandIcon from '../../assets/icons/expand_icon.svg';
import useModal from '../../helpers/useModal';
import Modal from '../common/Modal';
import Section from '../common/Section';
const CouchItemPage = ({ item }) => {
  const { isShowing, toggle } = useModal();
  return (
    <Section>
      <div className="flex justify-between items-center pb-1">
        <h1 className="_text-bold-dark-5xl">{item.title}</h1>
        <h3 className="_text-2xl">{item.date}</h3>
      </div>
      <div className="flex flex-col divide-y-2 divide-p-brown w-full">
        <span></span>
        <span></span>
      </div>
      <div className="">
        <h2 className="py-10 text-bold-2xl">{item.subtitle}</h2>
        <div
          className="relative"
          style={{ cursor: 'zoom-in' }}
          onClick={toggle}
        >
          <img
            alt=""
            src={item.img}
            className="float-right pl-8"
            style={{ maxHeight: '550px' }}
          />
          <Modal isShowing={isShowing} hide={toggle}>
            <div className="relative">
              <span
                className="absolute border-2 rounded-full"
                style={{ width: '100px', height: '100px' }}
              ></span>
              <img alt="" src={item.img} />
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

        <p className="_text-2xl break-words leading-normal">{item.text}</p>
      </div>
    </Section>
  );
};

export default CouchItemPage;
