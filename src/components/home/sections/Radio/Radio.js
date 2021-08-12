import React, { useEffect, useState } from 'react';
import TitleUnderline from '../../../common/TitleUnderline';
import ReactPlayer from 'react-player/lazy';
import SuggestionContainer from './SuggestionContainer';
import ResponsivePlayer from '../../../common/ResponsivePlayer';
import Spinner from '../../../common/Spinner';

const strings = {
  title: 'מיכל ברדיו',
};

const Radio = () => {
  const [videoUrl, setVideoUrl] = useState(
    'https://www.facebook.com/100003098510659/videos/pcb.3997212253725352/3997187820394462'
  );
  const [isReady, setIsReady] = useState(false);
  const handleReady = () => {
    setIsReady(true);
  };
  useEffect(() => {
    setIsReady(false);
  }, [videoUrl]);
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <TitleUnderline title={strings.title} />
      <div className="grid grid-cols-6 w-full h-full gap-x-3 mt-4">
        <div className="col-span-4 col-start-2 border-p-brown bg-p-brown border-4  rounded-lg relative">
          {!isReady && <Spinner />}
          <ResponsivePlayer
            url={videoUrl}
            controls={false}
            handleReady={handleReady}
          />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <SuggestionContainer setVideoUrl={setVideoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Radio;
