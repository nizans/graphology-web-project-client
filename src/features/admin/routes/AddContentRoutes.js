import React from 'react';
import ArticleForm from '../components/forms/ArticleForm';
import CouchForm from '../components/forms/CouchForm';
import VideoForm from '../components/forms/VideoForm';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import ServiceForm from '../components/forms/ServiceForm';
import withData from '../components/forms/withData';
import { ARTICLES_API } from 'features/articles';
import { CONTENTS_API } from 'features/couch';
import { VIDEOS_API } from 'features/videos';
import { SERVICES_API } from 'features/services';
import BookForm from '../components/forms/BookForm';
import { BOOKS_API } from 'features/books';

const AddContentRoutes = () => {
  const { path } = useRouteMatch();
  const WithDataArticleForm = withData(ArticleForm, ARTICLES_API);
  const WithDataCouchForm = withData(CouchForm, CONTENTS_API);
  const WithDataVideoForm = withData(VideoForm, VIDEOS_API);
  const WithDataServiceForm = withData(ServiceForm, SERVICES_API);
  const WithDataBookForm = withData(BookForm, BOOKS_API);
  return (
    <>
      <div className="mt-4 flex h-full w-full items-center pb-4 flex-wrap absolute top-0 bottom-0 right-0 left-0">
        <Switch>
          <Route exact path={`${path}/articles`}>
            <ArticleForm />
          </Route>
          <Route exact path={`${path}/contents`}>
            <CouchForm />
          </Route>
          <Route exact path={`${path}/videos`}>
            <VideoForm />
          </Route>
          <Route exact path={`${path}/services`}>
            <ServiceForm />
          </Route>
          <Route exact path={`${path}/books`}>
            <BookForm />
          </Route>
          <Route exact path={`${path}/articles/:id`}>
            <WithDataArticleForm />
          </Route>
          <Route exact path={`${path}/contents/:id`}>
            <WithDataCouchForm />
          </Route>
          <Route exact path={`${path}/videos/:id`}>
            <WithDataVideoForm />
          </Route>
          <Route exact path={`${path}/services/:id`}>
            <WithDataServiceForm />
          </Route>
          <Route exact path={`${path}/books/:id`}>
            <WithDataBookForm />
          </Route>
          <Route exact path={`${path}`}>
            <Redirect from={`${path}`} to={`${path}/articles`} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default AddContentRoutes;
