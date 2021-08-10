import React from 'react';
const Section = React.forwardRef(
  ({ children, sectionHeight, className }, ref) => (
    <section
      className={className ? className : ''}
      style={{
        minHeight: `${
          sectionHeight ? sectionHeight - 1 + 'px' : 'calc(100vh - 120px)'
        }`,
      }}
      ref={ref}
    >
      {children}
    </section>
  )
);

export default Section;
