import React, { useState } from 'react';

const useImageOnLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return <div></div>;
};

export default useImageOnLoad;
