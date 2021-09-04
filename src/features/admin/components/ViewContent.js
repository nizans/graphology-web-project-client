import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import AdminNav from './AdminNav';
import ArticlesTable from './Table/ArticlesTable';
import ContentsTable from './Table/ContentTable';
import VideosTable from './Table/VideosTable';

const strings = {
  title: 'תכנים באתר',
};
const links = [
  { name: 'כתבות', to: 'articles' },
  { name: 'תכנים מספת הגרפולוג', to: 'contents' },
  { name: 'סרטונים', to: 'videos' },
];
const ViewContent = () => {
  const { path } = useRouteMatch();

  return (
    <div className="w-full h-full">
         <AdminNav title={strings.title} links={links} />



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
      </Switch>
    </div>
  );
};

export default ViewContent;
