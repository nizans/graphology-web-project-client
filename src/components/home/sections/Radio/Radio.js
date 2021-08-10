import React, { useEffect, useRef, useState } from 'react';
import TitleUnderline from '../../../common/TitleUnderline';
import ReactPlayer from 'react-player/lazy';
import SuggestionContainer from './SuggestionContainer';

const strings = {
  title: 'מיכל ברדיו',
};

const Radio = () => {
  const [videoUrl, setVideoUrl] = useState(
    'https://www.facebook.com/100003098510659/videos/pcb.3997212253725352/3997187820394462'
  );
  return (
    <div className="w-full flex flex-col  items-center">
      <TitleUnderline title={strings.title} />
      <div className="grid grid-cols-6 gap-3">
        <div className=" w-full bg-p-gray col-span-4 col-start-2 relative">
          <ReactPlayer url={videoUrl} controls={false} />
        </div>
        <div className="w-full m-auto">
          <SuggestionContainer setVideoUrl={setVideoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Radio;
