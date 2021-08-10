import React from 'react';

const Section = React.forwardRef(
  ({ children, sectionHeight, className }, ref) => (
    <section
      className={className ? className : ''}
      style={{
        minHeight: `${sectionHeight - 1}px`,
      }}
      ref={ref}
    >
      {children}
    </section>
  )
);

export default Section;
