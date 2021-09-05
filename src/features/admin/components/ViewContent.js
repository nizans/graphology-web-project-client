import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import AdminNav from './AdminNav';
import ArticlesTable from './addContent/ArticlesTable';
import ContentsTable from './addContent/ContentTable';
import VideosTable from './addContent/VideosTable';

const ViewContent = () => {
  const { path } = useRouteMatch();

  return (
    <>

      <Switch>
        <Route exact path={`${path}/articles`}>
          <ArticlesTable />
        </Route>
        <Route exact path={`${path}/contents`}>
          <ContentsTable />
        </Route>
        <Route exact path={`${path}/videos`}>
          <VideosTable />
        </Route>
        <Route exact path={`${path}`}>
          <Redirect from={`${path}`} to={`${path}/articles`} />
        </Route>
      </Switch>
    </>
  );
};

export default ViewContent;
