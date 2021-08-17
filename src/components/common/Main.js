import React from 'react';
import Home from '../home/Home';
import About from '../about/About';
import Books from '../books/Books';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Couch from '../couch/Couch';
import { Route } from 'react-router';
import Articles from '../articles/Articles';
import Section from './Section';
import useWindowDimensions from '../../helpers/useWindowDimensions';

import Admin from '../admin/Admin';

const Main = ({ footerHeight, headerHeight }) => {
  const { height: windowHeight } = useWindowDimensions();
  return (
    <>
      <Route exact path="/">
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
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>
    </>
  );
};

export default Main;
