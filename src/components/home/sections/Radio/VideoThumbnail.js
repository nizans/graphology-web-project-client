import React, { useRef } from 'react';
import PlayOutline from '../../../../assets/icons/play_border.png';
import PlayFilled from '../../../../assets/icons/play_filled.png';

const VideoThumbnail = ({ data, setVideoUrl }) => {
  const playOutlineRef = useRef(null);
  const playFilledRef = useRef(null);

  const handleHover = (e) => {
    if (e.type === 'mouseenter') playFilledRef.current.style.opacity = '1';
    else playFilledRef.current.style.opacity = '0';
  };

  const handleClick = () => {
    setVideoUrl(data.url);
  };

  const playButton = (
    <>
      <img
        alt=""
        ref={playOutlineRef}
        src={PlayOutline}
        className="absolute top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <img
        alt=""
        ref={playFilledRef}
        src={PlayFilled}
        className="absolute top-1/2 left-1/2 transition-all opacity-0 duration-200"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );

  return (
    <div
      className=" my-4 relative cursor-pointer bg-p-brown-dark w-full bg-center bg-cover  rounded-lg border-p-brown border-4"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
      style={{
        paddingTop: '56.25%',
        backgroundImage: `url(${data.thumbnail})`,
      }}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50 "></div>
      {playButton}
      <h5 className="absolute right-1 bottom-0 text-sm text-p-brown">
        {data.date}
      </h5>
    </div>
  );
};

export default VideoThumbnail;
