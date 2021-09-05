import React, { useContext, useEffect, useState } from 'react';
import BookShelf from '../components/BookShelf';
import Section from 'components/common/Section';
import Expertise from '../components/Expertise/Expertise';
import Recommendations from '../components/Recommendations/Recommendations';
import Radio from '../components/Radio/Radio';
import OnTheCouch from '../components/OnTheCouch/OnTheCouch';
import Michal from '../components/Michal/Michal';
import { SectionHeightContext } from 'context/sectionHeightContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const Home = () => {
  const [translateY, setTranslateY] = useState(0);
  const { windowHeight, headerHeight } = useContext(SectionHeightContext);
  useEffect(() => {
    if (windowHeight < 740) {
      setTranslateY(-110);
    } else {
      setTranslateY(0);
    }
  }, [windowHeight]);

  return (
    <>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-evenly mb-16">
        <BookShelf translateY={translateY} />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col items-center mb-16">
        <Michal />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-evenly mb-16">
        <Expertise />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-around mb-16">
        <Recommendations />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-evenly mb-16">
        <Radio />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col">
        <OnTheCouch />
      </Section>
    </>
  );
};
