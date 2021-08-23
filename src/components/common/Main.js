import React from 'react';

import { Route } from 'react-router-dom';

import useWindowDimensions from '../../helpers/useWindowDimensions';

const Main = ({ footerHeight, headerHeight }) => {
  const { height: windowHeight } = useWindowDimensions();
  return (
    <>
      {/* <Route exact path="/">
        <Home sectionHeight={windowHeight - headerHeight} windowHeight={windowHeight} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/contact">
        <Section sectionHeight={windowHeight - footerHeight - headerHeight}>
          <Contact />
        </Section>
      </Route>
      <Route path="/couch">
        <Couch />
      </Route>
      <Route path="/Articles">
        <Articles />
      </Route> */}
      helo
    </>
  );
};

export default Main;
