import React from 'react';
const strings = {
  readMore: 'קרא עוד',
};
const ReadMoreBtn = ({ onClick, className, href }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`underline _text-bold-3xl ml-auto hover:text-p-brown  ${
        className ? className : ''
      }`}
    >
      {strings.readMore}
    </a>
  );
};

export default ReadMoreBtn;
