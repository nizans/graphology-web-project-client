import React from 'react';
import VideoThumbnail from './VideoThumbnail';

const data = {
  url: 'https://www.youtube.com/watch?v=sIJtzokIaOQ',
  thumbnail:
    'https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png',
  date: '27.12.2020',
};

const SuggestionContainer = ({ setVideoUrl }) => {
  return (
    <>
      <VideoThumbnail setVideoUrl={setVideoUrl} data={data} />
      <VideoThumbnail setVideoUrl={setVideoUrl} data={data} />
      <VideoThumbnail setVideoUrl={setVideoUrl} data={data} />
    </>
  );
};

export default SuggestionContainer;
