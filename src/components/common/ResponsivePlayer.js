import React from 'react';
import ReactPlayer from 'react-player/lazy';

const ResponsivePlayer = (props) => {
  console.log({ ...props });
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <ReactPlayer
        {...props}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      />
    </div>
  );
};

export default ResponsivePlayer;
