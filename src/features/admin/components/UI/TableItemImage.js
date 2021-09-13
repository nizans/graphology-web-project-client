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

const TableItemImage = ({ image, maxHeight = 150, width = '150px', imgClassName }) => {
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
      maxHeight={maxHeight}
      withModal={false}
      imgClassName={imgClassName || 'h-full object-fit m-2 rounded-md border-2 border-p-gray object-cover'}
      imageSrc={imageSrc}
      tinySrc={thumbSrc}
    />
  );
};

export default TableItemImage;
