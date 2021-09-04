import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Couch from './Couch';
import CouchItemPage from './CouchItemPage';

export const CouchRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Couch />
      </Route>
      <Route path={`${path}/:couchId`}>
        <CouchItemPage />
      </Route>
    </Switch>
  );
};
