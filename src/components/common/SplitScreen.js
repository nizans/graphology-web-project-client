import React, { useRef, useCallback, useState, useReducer } from 'react';
import Section from '../common/Section';

const SplitScreen = ({ imgSrc, children }) => {
  const imgRef = useRef(null);
  const [isMounted] = useReducer((p) => !p, true);
  const [divHeight, setDivHeight] = useState();
  const handleRect = useCallback((node) => {
    setDivHeight(node?.getBoundingClientRect().height);
  }, []);

  return (
    <Section className="grid grid-cols-2">
      {isMounted && (
        <div style={{ height: '75vh', maxHeight: '75vh' }} ref={handleRect}>
          <img
            alt=""
            ref={imgRef}
            src={imgSrc}
            className="h-full m-auto"
          ></img>
        </div>
      )}

      <div style={{ height: `${divHeight}px`, overflow: 'hidden' }}>
        {children}
      </div>
    </Section>
  );
};

export default SplitScreen;
