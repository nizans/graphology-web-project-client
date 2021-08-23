import useWindowDimensions from '../../../helpers/useWindowDimensions';
import React, { useEffect, useState } from 'react';
import BookShelf from '../components/BookShelf';
import Section from 'components/common/Section';
import Expertise from '../components/Expertise/Expertise';
import Recommendations from '../components/Recommendations/Recommendations';
import Radio from '../components/Radio/Radio';
import OnTheCouch from '../components/OnTheCouch/OnTheCouch';
import Michal from '../components/Michal/Michal';

export const Home = ({ windowHeight }) => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (windowHeight < 740) {
      setTranslateY(-110);
    } else {
      setTranslateY(0);
    }
  }, [windowHeight]);

  return (
    <>
      <Section className="flex flex-col  mb-36">
        <BookShelf translateY={translateY} />
      </Section>
      <Section className="flex flex-col  mb-18">
        <Michal />
      </Section>
      <Section className="flex flex-col justify-between  mb-18">
        <Expertise />
      </Section>
      <Section className="flex flex-col   mb-36">
        <Recommendations />
      </Section>
      <Section className="flex flex-col   mb-36">
        <Radio />
      </Section>
      <Section className="flex flex-col  mb-36">
        <OnTheCouch />
      </Section>
    </>
  );
};
