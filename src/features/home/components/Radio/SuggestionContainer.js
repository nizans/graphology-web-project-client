import Arrow from 'assets/icons/down_arrow.png';
import { videosApiCRUDRequests } from 'features/videos/api';
import { useFetchData } from 'lib/reactQuery';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import VideoThumbnail from './VideoThumbnail';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={
        className +
        ` transform -translate-x-1/2 translate-y-5 transition-all scale-300 hover:scale-350 hover:translate-y-7 `
      }
      style={{ ...style, left: '50%', right: 0, top: '100%' }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={
        className +
        ` transform -translate-x-1/2 transition-all -translate-y-8 rotate-180 scale-300 hover:scale-350 hover:-translate-y-10   `
      }
      style={{ ...style, left: '50%', right: 0, bottom: 0, top: 0 }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
}

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SuggestionContainer = ({ setVideoUrl }) => {
  const { data } = useFetchData(videosApiCRUDRequests.read(null, { page: 0, limit: 5 }));
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    if (data)
      if (data.payload.length > 0) {
        setVideoUrl(data.payload[0].url);
        setCurrentVideo(data.payload[0]);
      }
  }, [data, setVideoUrl]);

  const handleThumbnailClick = item => {
    setVideoUrl(item.url);
    setCurrentVideo(item);
  };
  return (
    <Slider {...sliderSettings}>
      {data &&
        data.payload &&
        data.payload
          .filter(vid => vid !== currentVideo)
          .map((item, i) => <VideoThumbnail data={item} key={item._id} onClick={handleThumbnailClick} />)}
    </Slider>
  );
};

export default SuggestionContainer;
