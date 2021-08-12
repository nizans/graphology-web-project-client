import React from 'react';
import useModal from '../../helpers/useModal';
import useTextTruncate from '../../helpers/useTextTruncate';
import Modal from '../common/Modal';
const strings = {
  readMore: 'להמשך קריאה',
  articleFrom: 'כתבה מתוך: ',
};
const ArticleContainer = ({ item }) => {
  const [text] = useTextTruncate(item.text, {
    limit: 150,
    endWith: '...',
  });
  const { isShowing, toggle } = useModal();
  return (
    <div className="flex flex-col max-w-xs items-center bg-p-brown-light px-9 py-6 rounded-xl">
      <div className="flex flex-col items-start w-full mb-4">
        <h1 className="_text-bold-2xl leading-none">{item.title}</h1>
        <h2 className="text-p-blue text-base">
          {strings.articleFrom} {item.subtitle}
        </h2>
      </div>
      <img
        alt=""
        src={item.img}
        onClick={toggle}
        className="object-cover mb-4 max-h-60"
      />
      <Modal isShowing={isShowing} hide={toggle}>
        <div className="relative">
          <span
            className="absolute border-2 rounded-full"
            style={{ width: '100px', height: '100px' }}
          ></span>
          <img src={item.img} alt="" />
        </div>
      </Modal>

      <div className="_text-xl">
        <p>{text}</p>
      </div>
      <button className="_text-bold-xl bg-p-brown hover:bg-p-brown-dark py-1 px-4 mr-auto mt-5">
        {strings.readMore}
      </button>
    </div>
  );
};

export default ArticleContainer;
