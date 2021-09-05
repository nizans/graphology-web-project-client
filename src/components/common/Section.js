import React from 'react';

const Section = React.forwardRef(({ children, className, minHeight }, ref) => {
  return (
    <section
      className={`w-full ${className ? className : ''}`}
      style={{
        minHeight: `${minHeight ? minHeight - 1 + 'px' : ''}`,
      }}
      ref={ref}>
      {children}
    </section>
  );
});

export default Section;
