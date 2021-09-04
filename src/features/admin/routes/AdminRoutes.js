import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import AddContent from '../components/AddContent';

import Login from '../components/Login';
import ViewContent from '../components/ViewContent';

const AdminRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${path}/view/articles`} />
      </Route>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/add`}>
        <AddContent />
      </Route>
      <Route path={`${path}/view`}>
        <ViewContent />
      </Route>
    </Switch>
  );
};

export default AdminRoutes;
