import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddContent from '../components/AddContent';
import Login from '../components/Login';
import ViewContent from '../components/ViewContent';

const AdminRoutes = () => {
  return (
    <Switch>
      <Route>
        <Login />
      </Route>
      <Route>
        <AddContent />
      </Route>
      <Route>
        <ViewContent />
      </Route>
    </Switch>
  );
};

export default AdminRoutes;
