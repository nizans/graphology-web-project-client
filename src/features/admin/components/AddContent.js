import React from 'react';
import ArticleForm from '../forms/ArticleForm';
import CouchForm from '../forms/CouchForm';
import VideoForm from '../forms/VideoForm';
import AdminNav from './AdminNav';
import { Route, Switch, useRouteMatch } from 'react-router';

const strings = {
  title: 'הוספת תוכן חדש',
};
const links = [
  { name: 'כתבה', to: 'article' },
  { name: 'על ספת הגרפולוג', to: 'content' },
  { name: 'וידאו', to: 'video' },
];
const AddContent = () => {
  const { path } = useRouteMatch();

  return (
    <div className="w-full h-full">
      <AdminNav title={strings.title} links={links} />
      <div className="mt-4 flex h-full w-full items-center pb-4 flex-wrap">
        <Switch>
          <Route exact path={`${path}/article`}>
            <ArticleForm />
          </Route>
          <Route exact path={`${path}/content`}>
            <CouchForm />
          </Route>
          <Route exact path={`${path}/video`}>
            <VideoForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AddContent;
