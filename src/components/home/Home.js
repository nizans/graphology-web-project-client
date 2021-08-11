import useWindowDimensions from '../../helpers/useWindowDimensions';
import React, { useEffect, useState } from 'react';
import BookShelf from './sections/BookShelf';
import Section from '../common/Section';
import Expertise from './sections/Expertise/Expertise';
import Recommendations from './sections/Recommendations/Recommendations';
import Radio from './sections/Radio/Radio';
import OnTheCouch from './sections/OnTheCouch/OnTheCouch';
// import throttle from '../../helpers/throttle';
import ContactUs from './sections/ContantUs/ContactUs';
import Michal from './sections/Michal/Michal';

const Home = ({ sectionHeight }) => {
  const { height: windowHeight } = useWindowDimensions();
  const [translateY, setTranslateY] = useState(0);

  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     if (e.deltaY > 0) {
  //       //DOWN
  //       scrollToSection(true);
  //     } else {
  //       //UP
  //       scrollToSection(false);
  //     }
  //   };

  //   const scrollToSection = (down) => {
  //     const prevSection = document.querySelector('.current-section');
  //     let nextSection;
  //     if (down) {
  //       if (!prevSection.nextSibling) return;
  //       nextSection = prevSection.nextSibling;
  //     } else {
  //       if (!prevSection.previousSibling) return;
  //       nextSection = prevSection.previousSibling;
  //     }
  //     prevSection.classList.remove('current-section');
  //     nextSection.classList.add('current-section');
  //     window.scrollTo(0, nextSection.offsetTop - 120);
  //   };

  const sections = [
    { component: <BookShelf translateY={translateY} /> },
    { component: <Michal /> },
    { component: <Expertise /> },
    { component: <Recommendations /> },
    { component: <Radio /> },
    { component: <OnTheCouch />, scrollable: true },
  ];

  useEffect(() => {
    // window.scrollTo(0, 0);
    // window.addEventListener('wheel', throttle(handleWheel, 500), {
    //   passive: false,
    // });
    // return () =>
    //   window.removeEventListener('wheel', throttle(handleWheel, 500), {
    //     passive: false,
    //   });
  }, []);

  useEffect(() => {
    if (windowHeight < 740) {
      setTranslateY(-110);
      // } else if (windowHeight < 1080) {
      //   setTranslateY(-220);
    } else {
      setTranslateY(0);
    }
  }, [windowHeight]);

  return (
    <>
      {sections.map((item, i) => (
        <Section
          key={i}
          sectionHeight={sectionHeight}
          className={`${i === 0 ? 'current-section' : ''}${
            item.scrollable ? 'scrollable' : ''
          } mb-12`}
          id={'section' + i}
        >
          {item.component}
        </Section>
      ))}
      <ContactUs />
    </>
  );
};

export default Home;
