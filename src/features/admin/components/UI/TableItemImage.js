import BlurredUpImage from 'components/UI/BlurredUpImage';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function checkValidImageSrc(src) {
  let valid = true;
  const img = new Image();
  img.onerror = () => (valid = false);
  img.src = src;
  return valid;
}

const defultClassName = 'h-full m-2 rounded-md border-2 border-p-brown';
const TableItemImage = ({
  image,
  height = '150px',
  width = '150px',
  imgClassName = defultClassName,
  style = { objectFit: 'cover' },
}) => {
  const [imageSrc, setImageSrc] = useState('http://placehold.jp/150x150.png');
  const [thumbSrc, setThumbSrc] = useState('http://placehold.jp/16x16.png');

  useEffect(() => {
    getImageSrc();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getImageSrc = () => {
    if (Array.isArray(image) && image.length > 1) {
      setImageSrc(image[0].full);
      setThumbSrc(image[0].thumbSrc);
    } else if (checkValidImageSrc(image)) setImageSrc(image);
  };

  return (
    <BlurredUpImage
      width={width}
      height={height}
      withModal={false}
      imgClassName={imgClassName}
      imageSrc={imageSrc}
      tinySrc={thumbSrc}
      style={style}
    />
  );
};

export default TableItemImage;
