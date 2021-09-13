import Section from 'components/common/Section';
import React from 'react';
import Spinner from './Spinner';

const LoadingSection = () => {
  return (
    <Section className="relative">
      <Spinner />
    </Section>
  );
};

export default LoadingSection;
