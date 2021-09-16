import React from 'react';
import './Spinner.css';
const Spinner = ({ className = '', size = 120, speed = 2, style, bgColor = '#DFBBA6', fgColor = '#005885' }) => {
  return (
    // <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0">
    //   <div className={`flex justify-${justify} items-center absolute top-0 bottom-0 right-0 left-0`}>
    //     <div className={`animate-spin rounded-full h-${size} w-${size} border-b-4 border-p-blue-dark`}></div>
    //   </div>
    // </div>
    <div
      className={'w-full h-full flex items-center justify-end top-0 right-0 left-0 bottom-0 absolute'}
      style={{ ...style }}>
      <span
        className={'loader ml-2' + className}
        style={{
          border: `${Math.ceil(size * 0.13)}px solid ${bgColor}`,
          borderRadius: '50%',
          borderTop: `${Math.ceil(size * 0.13)}px solid ${fgColor}`,
          width: size,
          height: size,
          WebkitAnimation: `spin ${speed}s linear infinite`,
          animation: `spin ${speed}s linear infinite`,
        }}
      />
    </div>
  );
};

export default Spinner;
