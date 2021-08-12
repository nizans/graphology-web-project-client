import React from 'react';
import Home from '../home/Home';
import About from '../about/About';
import Books from '../books/Books';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Couch from '../couch/Couch';
import { Route, Switch } from 'react-router';
import Articles from '../articles/Articles';
const Main = ({ sectionHeight, windowHeight }) => {
  return (
    <Switch>
      <div className=" w-full flex justify-center">
        <div className=" w-full container">
          <Route exact path="/">
            <Home sectionHeight={sectionHeight} windowHeight={windowHeight} />
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
            <Contact />
          </Route>
          <Route path="/couch">
            <Couch />
          </Route>
          <Route path="/Articles">
            <Articles />
          </Route>
        </div>
      </div>
    </Switch>
  );
};

export default Main;
