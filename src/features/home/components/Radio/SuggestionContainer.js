import React, { useEffect, useState } from 'react';
import VideoThumbnail from './VideoThumbnail';
import Slider from 'react-slick';
import Arrow from 'assets/icons/down_arrow.png';
import { useFetchVideos } from 'features/videos';

const fallbackData = {
  url: 'https://www.youtube.com/watch?v=sIJtzokIaOQ',
  thumbnail: 'https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png',
  date: '27.12.2020',
};
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

const SuggestionContainer = ({ setVideoUrl }) => {
  const { isLoading, error, data } = useFetchVideos(0, 5);
  const [currentVideo, setCurrentVideo] = useState();
  useEffect(() => {
    if (data)
      if (data.payload) {
        setVideoUrl(data.payload[0].url);
        setCurrentVideo(data.payload[0]);
      }
  }, [data]);
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
