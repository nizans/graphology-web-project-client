import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
//TODO - Implements lazy loading for ProtectedRoutes
const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Header />
          <PublicRoutes />
          <Footer />
        </Route>
        <Route path="/admin">
          <ProtectedRoutes />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  );
};

export default AppRoutes;
