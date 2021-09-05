import Section from 'components/common/Section';
import { SectionHeightContext } from 'context/sectionHeightContext';
import React, { useContext } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import AddContent from '../components/AddContent';
import AdminNav from '../components/AdminNav';

import Login from '../components/Login';
import ViewContent from '../components/ViewContent';

const AdminRoutes = () => {
  const { path } = useRouteMatch();
  const sectionHeightCTX = useContext(SectionHeightContext);
  return (
    <div className="w-full">
      <AdminNav />

      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/view/articles`} />
        </Route>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/add`}>
          <Section className="relative" minHeight={sectionHeightCTX.windowHeight - sectionHeightCTX.headerHeight - 30}>
            <AddContent />
          </Section>
        </Route>
        <Route path={`${path}/view`}>
          <ViewContent />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminRoutes;
