import { LeftArrow, RightArrow } from 'components/UI/Arrows';
import BlurredUpImage from 'components/UI/BlurredUpImage';
import React from 'react';
import Slider from 'react-slick';

const defualtSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <LeftArrow left={-25} />,
  prevArrow: <RightArrow right={-25} />,
};

const ImageBox = ({
  images,
  maxHeight,
  sliderWrapperClassName,
  withModal = true,
  sliderSettings = defualtSliderSettings,
}) => {
  return images.length > 0 ? (
    <div className={`${sliderWrapperClassName ? sliderWrapperClassName : 'px-8 pb-8'}`}>
      <Slider {...sliderSettings}>
        {images.map(img => (
          <div className="w-full " key={img.full}>
            <BlurredUpImage
              withModal={withModal}
              height={maxHeight - 40}
              imageSrc={img.full}
              tinySrc={img.thumb}
              key={img.full}

            />
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div className="w-full"></div>
  );
};

export default ImageBox;
