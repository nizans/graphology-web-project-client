import React from 'react';
const strings = {
  readMore: 'קרא עוד',
};
const ReadMoreBtn = ({ onClick, className, href }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`underline text-p-blue ml-auto hover:text-p-brown font-bold ${
        className ? className : ''
      }`}
    >
      {strings.readMore}
    </a>
  );
};

export default ReadMoreBtn;
