import React from 'react';
const Section = React.forwardRef(
  ({ children, sectionHeight, className }, ref) => {
    return (
      <section
        className={`w-full ${className ? className : ''}`}
        style={{
          minHeight: `${sectionHeight ? sectionHeight - 1 + 'px' : ''}`,
        }}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default Section;
