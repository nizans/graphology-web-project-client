import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Articles } from 'features/articles';
import { About } from 'features/about/index';
import { Contact } from 'features/contact';
import { BooksRoutes } from 'features/books/index';
import { CouchRoutes } from 'features/couch';
import { Services } from 'features/services';
import { Home } from 'features/home/index';
import BreadCrumbs from 'components/common/BreadCrumbs';
import { BreadCrumbsTitleProvider } from 'context/breadCrumbsTitleContext';

const PublicRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Home />
        </Route>
        <Route>
          <BreadCrumbsTitleProvider>
            <BreadCrumbs />
            <Route path={`${path}/about`}>
              <About />
            </Route>

            <Route path={`${path}/books`}>
              <BooksRoutes />
            </Route>

            <Route path={`${path}/services`}>
              <Services />
            </Route>

            <Route path={`${path}/contact`}>
              <Contact />
            </Route>

            <Route path={`${path}/couch`}>
              <CouchRoutes />
            </Route>

            <Route path={`${path}/articles`}>
              <Articles />
            </Route>
          </BreadCrumbsTitleProvider>
        </Route>
      </Switch>
    </>
  );
};

export default PublicRoutes;
