import useWindowDimensions from '../../helpers/useWindowDimensions';
import React, { useEffect, useState } from 'react';
import BookShelf from './sections/BookShelf';
import Section from '../common/Section';
import Expertise from './sections/Expertise/Expertise';
import Recommendations from './sections/Recommendations/Recommendations';
import Radio from './sections/Radio/Radio';
import OnTheCouch from './sections/OnTheCouch/OnTheCouch';
import Michal from './sections/Michal/Michal';

const Home = ({ windowHeight }) => {
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

export default Home;
