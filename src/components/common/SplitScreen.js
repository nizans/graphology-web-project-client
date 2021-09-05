import React, { useCallback, useState, useReducer } from 'react';
import Section from 'components/common/Section';

const SplitScreen = ({ imgSrc, children, sectionHeight }) => {
  const [divHeight, setDivHeight] = useState();
  const [isMounted] = useReducer(p => !p, true);
  const handleRect = useCallback(node => {
    setDivHeight(node?.getBoundingClientRect().height);
  }, []);

  return (
    <Section sectionHeight={sectionHeight} className="grid grid-cols-2">
      {isMounted && (
        <div style={{ height: '75vh', maxHeight: '75vh' }} ref={handleRect}>
          <img alt="" src={imgSrc} className="h-full m-auto"></img>
        </div>
      )}

      <div style={{ height: `${divHeight}px` }}>{children}</div>
    </Section>
  );
};

export default SplitScreen;
